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
    return true
  };

  const submitForm = (e) => {
    if (handleFormSubmit(e)) {
      setName('');
      setMessage('');
      setEmail('');
      setErrorMessage(
        `Thank you for your message, I'll be in touch soon!`
      );
  }
  }

  return (
    <div className='contact--area w-50 my-4 mx-auto d-flex border'>
      <div className='contact--form w-100 p-lg-3 p-md-0'>
        <h5 className='m-1 p-2'><strong>Contact Me!</strong></h5>
        <form className="form m-2 p-3">
          <label className='m-1'>Name: </label><br />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleFormSubmit}
            type="text"
            className='d-block w-100'
          /><br />
          <label className='m-1'>Email address: </label><br />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleFormSubmit}
            type="email"
            className='d-block w-100'
          /><br />
          <label className='m-1'>Message: </label><br />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleFormSubmit}
            type="text"
            rows="5"  
            className='d-block w-100'
          /><br />
          {errorMessage && (
          <div>
            <p className="error-text warm-color">{errorMessage}</p>
          </div>
        )}
          <button type="button" onClick={submitForm} className='my-1 py-2 px-4'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;