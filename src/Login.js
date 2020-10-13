import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import { auth } from './firebase';

function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
        // firebase long IN

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault()
        // firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
            // do some fancy firebase shittt ...
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
                                onClick={signIn}
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
