import React, { useState } from 'react';

export default function  Form() {
  const [username, setUsername] = useState(['']);
  const [password, setPassword] = useState(['']);

  const [input, setInput] = React.useState({
    username: '',
    password:'',
  });

  const [errors, setErrors] = React.useState ({});

  const handleInputChange = function (e) {
    setInput ({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  export function validate(input) {
    let errors = {};
    if (!input.username) {
      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
    } else if (!input.password) {
      errors.password = 'Password is required';
    } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = 'Password less a number';
    }  
    return errors;
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Username: </label>
        <input name='username' placeholder='Username' value={username} onChange={handleInputChange}/>
        {errors.username && <p className='danger'>{errors.username}</p>}
      </div>
      <div>
        <label> Password: </label>
        <input name='password' placeholder='Password' value={password} onChange={handleInputChange}/>
        {errors.password && <p className='danger'>{errors.password}</p>}
      </div>
      <div>
        <input type='submit'> Send </input>
      </div>
    </form>
  )
}

// onChange, con la arrow function lo que hace es bindear el elemento del componente al estado, y value, es el valor que se le asigna
// al componente.
