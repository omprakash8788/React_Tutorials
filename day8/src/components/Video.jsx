import React, { useState } from "react";

const initState = {
  username: "",
  password: "",
  age: "",
  country: "",
  isMarried: false,
};

const Video = () => {
  const [formState, setFormData] = useState(initState);
  const handleSubmit = (e) => {
   e.preventDefault();
   
  };


  const handleChange = (e) => {
    console.log(e.target);
    
    const inputValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({...formState, [e.target.name] : inputValue})
  };
  const { username, password, age, country, isMarried } = formState;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <label>
          USER_NAME:{" "}
          <input
          name="username"
            value={username}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
          />
        </label>
        <br />
        <label>
          PASSWORD: <input name="password" value={password} onChange={handleChange} />
        </label>
        <br />
        <label>
          AGE: <input name="age" type="number" value={age} onChange={handleChange} />
        </label>
        <br />
        <label>
          COUNTRY:{" "}
          <select name="country" value={country} onChange={handleChange}>
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="uae">UAE</option>
            <option value="nepal">NEPAL</option>
          </select>
        </label>
        <br />
        <label>
          IS MARRIED:{" "}
          <input name="isMarried" type="checkbox" checked={isMarried} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="REGISTER" />
      </form>
    </div>
  );
};

export default Video;
