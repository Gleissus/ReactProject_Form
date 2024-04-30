import React, { useState } from 'react';

// Define a functional component called LoginForm
const LoginForm = () => {
  // Define state variables using the useState hook
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    if (!isValidEmail(name)) {
      setError('Le nom utilisateur doit être un e-mail valide.');
      return;
    }

    // Submit form if all validations pass
    setSuccessMessage('Utilisateur identifié avec succès !');
    console.log('Name:', name);
    console.log('Password:', password);
    setError('');
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Render the login form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Nom d'utilisateur"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Mot de passe"
        />
      </label>
      <br />
      <button type="submit">S'IDENTIFIER</button>
      {/* Display error message if there's an error */}
      {error && <p className="error-message">{error}</p>}
      {/* Display success message if the form is submitted successfully */}
      {successMessage && <p className="success-message">{successMessage}</p>}      
    </form>

    
  );
};


export default LoginForm;
