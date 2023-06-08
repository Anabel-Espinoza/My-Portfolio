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
    <div className='contact--area w-50 my-5 mx-auto d-flex border'>
      <div className='contact--form w-100 p-4'>
        <h5 className='my-md-1 p-md-3'><strong>Contact Me!</strong></h5>
        <form className="form m-2 p-3">
          <label className='m-1'>Name: </label><br />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            className='d-block w-100'
          /><br />
          <label className='m-1'>Email address: </label><br />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className='d-block w-100'
          /><br />
          <label className='m-1'>Message: </label><br />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            rows="5"  
            className='d-block w-100'
          /><br />
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
          <button type="button" onClick={handleFormSubmit} className='my-1 py-2 px-4'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;