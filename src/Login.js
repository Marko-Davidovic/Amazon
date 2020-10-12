import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
    
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const singIn = e => {
    e.preventDefault()
    // firebase long IN
}
const register = e => {
    e.preventDefault()
    // firebase register
}

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                    <h5>Password</h5>
                    <input type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    <button className="login__singInButton"
                            type={"submit"}
                            onClick={singIn}
                            >
                        <h5>Sign In</h5>
                    </button>
                </form>
                <p>
                    By signing-in you agree to the <strong>AMAZON FAKE CLONE</strong>. Condistion of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our internet Base Ads Notice.
                </p>
                <button className="login__registerButton"
                        onClick={register}
                        >
                    <h5>Create your Amazon Account</h5>
                </button>
            </div>
        </div>
    )
}

export default Login
