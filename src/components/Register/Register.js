import React from 'react'
import './Register.css' 

function Register() {
  return (
    <main className='Register'>
      <h1>Register</h1>
      <p>
        Register for the SFPOPOS Newsletter to receive updates about 
        all your favorite SFPOPOS. 
      </p>
      <p>
        By signing up, you will be the first to know about events, news, and new art displays.
      </p>
      
      <form className='registration-form'>
          <label htmlFor='nameInput' className='name'>Name<input className='nameInput' type="text" id="nameInput" placeholder="First and Last"/></label>
          <label htmlFor='emailInput' className='email'>Email<input className='emailInput' type="email" id="emailInput" placeholder="Enter email"/></label>
          <label htmlFor="checkbox" className='checkbox'><input type="checkbox" value="yes" id="checkbox"/> Yes, please send me the SFPOPOS Newsletter.</label>

          <div className='buttons'>
            <input type="submit" value="Cancel" id="Cancel"/>
            <input type="submit" value="Submit" id="Submit"/>
          </div>
      </form>


    </main>
  )
}

export default Register