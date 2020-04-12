import React, { Component } from 'react'
import './newLogin.css'
import './focusBlur.js'
import bg from './image/wave2.png'
import logo from './image/b2.png'

class newLogin extends Component {
    render() {
        return (
            <div>
                <img className="wave" src={bg} />
                <div id="container">

                    <div className="login-content">
                        <form id="loginForm" action="index.html">

                            {/* <img id="proImg" src={logo} /> */}
                            <div id="proImg"><h1>Bank Asia</h1></div>
                            <h2 className="title">e-kyc</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div id="user">
                                    <h5>Username</h5>
                                    <input type="text" id="inputUser" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div id="passwd">
                                    <h5>Password</h5>
                                    <input type="password" id="inputPass" />
                                </div>
                            </div>
                            <a id="forgetPass" href="#">Forgot Password?</a>
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default newLogin
