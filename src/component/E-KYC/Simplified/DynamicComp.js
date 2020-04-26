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
                                {arr.comp}
                                <button className="b" style={{ border: "none" }} onClick={() => this.deleteComp(index)}>Delete</button>
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