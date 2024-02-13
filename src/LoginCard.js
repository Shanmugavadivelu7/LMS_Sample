// // //  LoginCard.js
// // // import React, { useState } from 'react';
// // // import './LoginCard.css';

// // // function LoginCard() {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleUsernameChange = (e) => {
// // //     setUsername(e.target.value);
// // //   };

// // //   const handlePasswordChange = (e) => {
// // //     setPassword(e.target.value);
// // //   };

// // //   return (
// // //     <div className="login-card">
// // //       <h2>Login</h2>
// // //       <form>
// // //         <div className="form-group">
// // //           <input
// // //             type="text"
// // //             id="username"
// // //             name="username"
// // //             value={username}
// // //             onChange={handleUsernameChange}
// // //             placeholder="Username"
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             value={password}
// // //             onChange={handlePasswordChange}
// // //             placeholder="Password"
// // //           />
// // //         </div>
// // //         <button type="submit">Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default LoginCard;

// // // LoginCard.js
// // import React, { useState } from 'react';
// // import './LoginCard.css';

// // function LoginCard() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleUsernameChange = (e) => {
// //     const inputUsername = e.target.value;
// //     // Check if the input username contains uppercase letters
// //     if (inputUsername !== inputUsername.toLowerCase()) {
// //       setError('Username should be in lowercase letters only.');
// //     } else {
// //       setUsername(inputUsername);
// //       setError('');
// //     }
// //   };

// //   const handlePasswordChange = (e) => {
// //     setPassword(e.target.value);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your login logic here
// //     console.log('Submitting username:', username);
// //     console.log('Submitting password:', password);
// //   };

// //   return (
// //     <div className="login-card">
// //       <h2>Login</h2>
// //       {error && <div className="error-message">{error}</div>}
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <input
// //             type="text"
// //             id="username"
// //             name="username"
// //             value={username}
// //             onChange={handleUsernameChange}
// //             placeholder="Username"
// //           />
// //         </div>
// //         <div className="form-group">
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //             placeholder="Password"
// //           />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default LoginCard;
// // LoginCard.js
// import React, { useState } from 'react';
// import './LoginCard.css';

// function LoginCard() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if the input username contains uppercase letters
//     if (username !== username.toLowerCase()) {
//       setError('Username should be in lowercase letters only.');
//     } else {
//       // Add your login logic here
//       console.log('Submitting username:', username);
//       console.log('Submitting password:', password);
//     }
//   };

//   return (
//     <div className="login-card">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={handleUsernameChange}
//             placeholder="Username"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Password"
//           />
//         </div>
//         {error && <div className="error-message">{error}</div>} {/* Show error message if present */}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginCard;
// LoginCard.js
import React, { useState } from 'react';
import './LoginCard.css';

function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(''); // Clear username error when input changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear password error when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the username meets the criteria
    if (!isValidUsername(username)) {
      setUsernameError('Lowercase letters only .');
    }
    // Check if the password meets the criteria
    else if (!isValidPassword(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one special character, and one number.');
    } else {
      // Add your login logic here
      console.log('Submitting username:', username);
      console.log('Submitting password:', password);
    }
  };

  // Function to validate the username
  const isValidUsername = (username) => {
    const usernameRegex = /^[a-z]+$/;
    return usernameRegex.test(username);
  };

  // Function to validate the password
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          {usernameError && <div className="error-message">{usernameError}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginCard;
