import React from 'react'
import './styles/Loginsignup.scss'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>

      <form className="container">
      <h1>Sign Up</h1>
      <div className="username">
        <h2>Name:</h2>
        <input required type="text" placeholder="Username"/>
      </div>
      <div className="email">
        <h2>Name:</h2>
        <input required type="email" placeholder="Email"/>
      </div>
      <div className="password">
        <h2>Password:</h2>
        <input required type="password" placeholder="Password"/>
      </div>
      <div className="cta">
        <button type="submit">Continue</button>
        <p>Already have an account? <span>Login</span>.</p>
        <div className="policy">
        <input type="checkbox" required name="" id="" />
        <p>By checking this I agree to the <span>terms of policy</span>.</p>
        </div>
      </div>

      </form>
      

    </div>
  )
}

export default LoginSignup
