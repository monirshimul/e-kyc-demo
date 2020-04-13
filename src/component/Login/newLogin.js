import React, { Component } from 'react'
import './newLogin.css'
import './focusBlur.js'
import bg from './image/wave2.png'
import logo from './image/b2.png'
import { withRouter, Link } from 'react-router-dom';

class newLogin extends Component {

    state = {
        name: '',
        password: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log("name", this.state.name);
        console.log("password", this.state.password);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                <img className="wave" src={bg} />
                <div id="container">

                    <div className="login-content">
                        <form id="loginForm" onSubmit={this.onSubmit}>

                            {/* <img id="proImg" src={logo} /> */}
                            <div id="proImg"><h1>E-KYC</h1></div>
                            <h2 className="title">Login</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div id="user">
                                    <h5>Username</h5>
                                    <input name="name" value={this.state.name} onChange={this.onChange} type="text" id="inputUser" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div id="passwd">
                                    <h5>Password</h5>
                                    <input name="password" value={this.state.password} onChange={this.onChange} type="password" id="inputPass" />
                                </div>
                            </div>
                            <a id="forgetPass" href="#">Forgot Password?</a>
                            <input type="submit" id="btn" value="Login" />
                            {/* <Link to="/dashboard" id="btn" >Login</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(newLogin)
