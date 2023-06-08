import React, { useState } from 'react'
import validateEmail from './utils/helpers'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    if (inputType === 'name') {
      setName(inputValue)
    } else if (inputType === 'email') {
      setEmail(inputValue)
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!name) {
      setErrorMessage(
        `Please enter your name`
      );
      return;
    }
    if (!message) {
      setErrorMessage(
        `Please enter a message`
      );
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='contact--form d-flex flex-column border align-items-even justify-content-center'>
      <h5>Contact Me</h5>
      <form className="form">
        <label>Name: </label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        />
        <label>Email address: </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        <label>message: </label>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;