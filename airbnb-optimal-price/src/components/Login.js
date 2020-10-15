// Import Dependencies
import React, { useState } from 'react';

export default function Login() {
  
  // Declare a variable holding the default empty data
  const defaultUserData = {name: "", password: ""};

  // Get the state to hold the form data
  const [ user, setUser ] = useState(defaultUserData);

  // Function to handle the text field change to set to the user state
  const handleChange = (e) => {
    const userData = {...user, [e.target.name]: e.target.value};

    setUser(userData);
  }

  // Function to handle the form submission
  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(user);

    setUser(defaultUserData);
  }
  
  return (
    <div className="form-container">
      <h3>Login Form</h3>

      <form onSubmit={handleSubmission}>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />
        </label>

        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}
