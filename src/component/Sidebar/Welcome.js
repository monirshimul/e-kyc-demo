import React, { Component } from 'react'
import profileImage from "./image/undraw_profile_pic_ic5t.svg"



class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron my-5 im" >

                    <div className="divBg" style={{ padding: "10px 0px" }}>
                        <img className="" src={profileImage} width="100px" height="100px" alt="profile_img" />
                        <h2 className="">Abdur Rahim</h2>
                    </div>





                    <h1 className="display-1 text-muted">Welcome</h1>
                    <h3 className="text-muted">Thank You for Your Login</h3>


                </div>

            </div>
        )
    }
}

export default Welcome
