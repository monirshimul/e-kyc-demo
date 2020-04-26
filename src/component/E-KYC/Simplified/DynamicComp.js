import React, { Component } from 'react';
import MainFace from '../Simplified/MainFace';
import Finger from '../Simplified/FingerMultiForm/Finger';
import './utils/Common.css'

export class DynamicComp extends Component {
    state = {
        jointArray: [],
        comp: ''
    }

    deleteComp = (index) => {
        const copyArray = Object.assign([], this.state.jointArray);
        copyArray.splice(index, 1);
        this.setState({
            jointArray: copyArray
        })
    }

    addComp = (val) => {
        const copyArray = Object.assign([], this.state.jointArray);
        copyArray.push({
            comp: val
        })
        this.setState({
            jointArray: copyArray
        })
    }



    render() {
        return (
            <div className="col text-center">


                {
                    this.state.jointArray.map((arr, index) => {
                        return (
                            <div>
                                <h2 className="text-muted"><i className="fas fa-user" style={{ color: "#e3174c" }}></i> Applicant <small >{index + 1}</small></h2>
                                {arr.comp}
                                <hr />
                                <button className="b" style={{ border: "none", background: "#e3174c" }} onClick={(e) => window.confirm("Are you sure? All your data will be lost.") && this.deleteComp(index)}>Delete</button>
                                <br />
                                <hr />
                            </div>

                        )
                    })
                }

                <button className="bigB mr-2" style={{ border: "none" }} onClick={() => this.addComp(<MainFace />)}>Face</button>
                <button className="bigB" style={{ border: "none" }} onClick={() => this.addComp(<Finger />)}>Finger</button>
            </div>
        )
    }
}

export default DynamicComp;