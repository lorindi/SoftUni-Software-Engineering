import { useEffect, useState } from "react";
import * as userService from "./services/userService";
import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "./App.css";
import UserList from "./components/UserList";
function App() {
  const [users, setUsers] = useState([]);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });
  useEffect(() => {
    userService
      .getAll()
      .then(setUsers)
      .catch((err) => {
        console.log("Error" + err);
      });
  }, []);

  const onUserCreateSubmit = async (e) => {
    //stop automatic form
    e.preventDefault();

    //Take form data from Dom tree
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    //Send ajax request to server
    const createdUser = await userService.create(data);
    //If successfull add new user to the state
    setUsers((state) => [...state, createdUser]);
    //Close dialog
  };

  const onUserUpdateSubmit = async (e, userId) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const updateUser = await userService.update(userId, data);
    setUsers((state) => state.map((x) => (x._id === userId ? updateUser : x)));
  };

  const onUserDelete = async (userId) => {
    //Delete from server
    await userService.remove(userId);
    // Delete from state
    setUsers((state) => state.filter((x) => x._id !== userId));
  };

  const formChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};
    if (
      e.target.name === "firstName" &&
      (value.length < 3 || value.length > 20)
    ) {
      errors.firstName = "First name should be between 3 and 20 characters";
    }
    if (
      e.target.name === "lastName" &&
      (value.length < 3 || value.length > 20)
    ) {
      errors.lastName = "Last name should be between 3 and 20 characters";
    }
    setFormErrors(errors);
  };
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserUpdateSubmit={onUserUpdateSubmit}
            onUserDelete={onUserDelete}
            formValues={formValues}
            formChangeHandler={formChangeHandler}
            formErrors={formErrors}
            formValidate={formValidate}
          />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
