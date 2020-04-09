import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './login.css';
import Avatar from './image/undraw_profile_pic_ic5t.svg'

// import { routes, homeRoute } from '../RouteName'

export class login extends Component {
    state = {
        name: '',
        password: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.password);
        this.props.history.push("/dashboard");
    }



    render() {
        return (
            <div className="" id="loginBg" >

                <div className="col-sm-5 " id="leftContent" >

                    <h1 className="display-1 text-white" style={{ fontFamily: "'Bebas Neue', cursive" }}>Lo<span style={{ color: "#c72c41" }}>g</span>in</h1>
                    <h1 className="display-4" style={{ fontFamily: "'Poiret One', cursive", color: "#3a3535" }}>Lorem ipsum dolor sit amet <span style={{ color: "#fff" }}>consectetur</span> adipisicing elit.</h1>
                </div>
                <div className="col-sm-5" id="formHolder">
                    <div className="col text-center">
                        <img src={Avatar} alt="Smiley face" height="120px" width="120px" />
                    </div>


                    <form >
                        <div className="form-group">
                            <label htmlFor="" className="text-white">User Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.onChange} className="form-control" id="userNameInputOne" placeholder="Enter User Name" />

                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-white">Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" id="userNameInputTwo" placeholder="Enter Password" />

                        </div>


                        <div className="d-flex justify-content-center" >


                            <Link to="/dashboard" className="btn mb-3" id="loginBtn" style={{ borderRadius: "50px", minWidth: "100px" }}>Login</Link>



                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(login);
