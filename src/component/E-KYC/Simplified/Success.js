import React, { Component } from 'react';


export class Success extends Component {


    render() {


        return (

            <div className="container">
                <div className="jumbotron my-5 im" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <h1 className="display-1 text-muted">Success</h1>
                    <h3 className="text-muted">Thank You for Your Submission</h3>
                    <p className="text-muted">You will get an email with further
                            instructions</p>

                </div>

            </div>

        )
    }
}


export default Success;
