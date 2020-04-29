import React, { Component } from 'react';


export class SuccessRole extends Component {


    render() {

        console.log(this.props)
        const { roleName, selectedFeature } = this.props.history.location.state


        return (

            <div className="container">
                <div className="jumbotron my-5 im" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <h1 className="display-4 text-muted">" {roleName} " Role Created</h1>
                    <h3 className="text-muted">Features are :&nbsp;

                    {selectedFeature.map((v, i) => (
                        <small style={{ color: "Green", textTransform:"uppercase", fontSize:"17px" }} key={i}>
                            "{v[1]}",&nbsp;
                        </small>
                    ))}


                    </h3>
                    <p className="text-muted">Thank you for your submission.</p>

                </div>

            </div>

        )
    }
}


export default SuccessRole;
