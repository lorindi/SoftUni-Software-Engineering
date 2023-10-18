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
    const  formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData);
    //Send ajax request to server
    const createdUser = await userService.create(data)
    //If successfull add new user to the state
    setUsers(state => [...state, createdUser]);
    //Close dialog
  };

const onUserUpdateSubmit = async (e, userId) => {
  e.preventDefault()
  const  formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData);
  const updateUser = await userService.update(userId, data)
  setUsers(state => state.map(x => x._id === userId ? updateUser : x));

}


  const onUserDelete = async (userId) => {
    //Delete from server
    await userService.remove(userId)
    // Delete from state
    setUsers(state => state.filter(x => x._id !== userId));

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
          onUserDelete={onUserDelete}/>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
