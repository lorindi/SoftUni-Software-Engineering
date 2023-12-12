import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  const [hobbies, setHobbies] = useState({});
  const [values, setValues] = useState({
    username: "Lora",
    creditCard: "",
    occupation: "engineering",
    gender: "male",
    bio: "",
    age: "",
  });

  useEffect(() => {
      ref.current.value = values.username

  }, [values.username])

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onHobbiesChange = (e) => {
    setHobbies((state) => ({ ...state, [e.target.value]: e.target.checked }));
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              //   Когато подадем value={username} onChange={onUsernameChange}, този компонент става контролиран от React
              value={values.username}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={values.age}
              //   value={age || ''}
              onChange={onChangeHandler}
            />
          </div>
          {Number(values.age) >= 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={values.creditCard}
                onChange={onChangeHandler}
              />
            </div>
          )}
          <div>
            <label htmlFor="username">Occupation</label>
            <select
              name="occupation"
              id="occupation"
              value={values.occupation}
              onChange={onChangeHandler}
            >
              <option value="it">IT</option>
              <option value="engineering">Engineering</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={onChangeHandler}
              checked={values.gender === "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onChangeHandler}
              checked={values.gender === "female"}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={values.bio}
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div>
            <label htmlFor="hiking">hiking</label>
            <input
              type="checkbox"
              name="hobbies"
              value="hiking"
              id="hiking"
              onChange={onHobbiesChange}
              checked={hobbies["hiking"] || false}
            />
            <label htmlFor="reading">reading</label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              id="reading"
              onChange={onHobbiesChange}
              checked={hobbies["reading"] || false}
            />
            <label htmlFor="sports">sports</label>
            <input
              type="checkbox"
              name="hobbies"
              value="sports"
              id="sports"
              onChange={onHobbiesChange}
              checked={hobbies["sports"] || false}
            />
            <label htmlFor="gaming">gaming</label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              id="gaming"
              onChange={onHobbiesChange}
              checked={hobbies["gaming"] || false}
            />
            <label htmlFor="coding">coding</label>
            <input
              type="checkbox"
              name="hobbies"
              value="coding"
              id="coding"
              onChange={onHobbiesChange}
              checked={hobbies["coding"] || false}
            />
          </div>
          <div>
            <label htmlFor="uncontrolled">Uncontrolled</label>
            <input type="text" name="uncontrolled" id="uncontrolled" ref={ref}/>
          </div>
          <div>
            <input type="submit" value="Send" onClick={onSubmitHandler} />
            {/* <input type="button" value="Send" onClick={onSubmitHandler} />
            <button type="submit" onClick={onSubmitHandler}>
              Send
            </button> */}
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
