import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


import { pruneRouteArray, getFlatRouteArray } from '../../flattenObjectTwo';

class CreateRole extends Component {


    state = {
        roleName: "",
        selectedFeature: [],
        createdBy: '',
        createDate: new Date,
        checkedItems: new Map()
    }

    componentDidMount() {

    }


    // ================== Multi Check box onChange Method ==========================
    checkHandleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        if (this.state.checkedItems.has(key)) {
            this.state.checkedItems.delete(key)

            this.setState({

                selectedFeature: Array.from(this.state.checkedItems.entries())
            })

        } else {
            this.setState({
                checkedItems: this.state.checkedItems.set(key, value),
                selectedFeature: Array.from(this.state.checkedItems.entries())
            });

        }
    }

    // ==================End of Multi Check box onChange Method ======================

    onFormSubmit = () => {
        const { roleName, selectedFeature } = this.state
        const data = {
            roleName,
            selectedFeature
        }
        console.log(data)
        localStorage.setItem("Role Data", JSON.stringify(data))
        this.props.history.push("/dashboard/success", data)
    }

    textHandleChange = e => {
        e.preventDefault()
        this.setState({ roleName: e.target.value });
    }





    render() {
        const { selectedFeature, roleName } = this.state
        const firstMenu = pruneRouteArray([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3, 3.1, 3.2, 3.3, 4, 4.1, 5, 5.1, 5.11, 5.12, 5.13, 5.2, 5.21, 5.22, 5.3, 5.4, 6, 6.1, 6.2, 6.3]);
        const allMenu = getFlatRouteArray(firstMenu);
        // allMenu.map((v, i) => {
        //     console.log(v.key.length)

        // })



        // let val = allMenu.map((v, i) => checkedItems.get(v.key))
        // console.log(val)





        return (
            <div className="card col-sm-7" style={{ paddingTop: "25px" }}>
                {
                    // console.log("Selected Feature==>", selectedFeature)
                    selectedFeature.map(v => console.log(v))

                }

                <div className="card-header divBg">
                    <h3 className="text-center pt-3">
                        Create Role
                    </h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onFormSubmit}>

                        <div className="form-group">
                            <label htmlFor="">Role Name</label>
                            <input type="text" value={roleName} onChange={this.textHandleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Role Name" />
                        </div>



                        <div className="form-group"  >




                            <p className="text-muted">Choose Feature From Feature's List</p>
                            {
                                allMenu.map((features, index) => (
                                    <div>
                                        {
                                            features.key % 1 === 0 ? (
                                                <div className="">
                                                    <hr />
                                                    <h1 className="text-center im" >{features.featureName}</h1>
                                                    <hr />

                                                </div>

                                            ) : (
                                                    <div className="custom-control custom-checkbox" style={{ marginLeft: "25px" }} key={index} >
                                                        <input
                                                            type="checkbox"
                                                            name={features.key}
                                                            checked={this.state.checkedItems.get(features.key)}
                                                            className="custom-control-input" id={index + 1}
                                                            style={{ marginRight: "5px" }}
                                                            onChange={this.checkHandleChange}
                                                            value={features.featureName}
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                        <label className="custom-control-label" for={index + 1}>{features.featureName}</label>

                                                    </div>
                                                )
                                        }
                                    </div>

                                ))
                            }


                        </div>


                        <div className="d-flex justify-content-center" >
                            <button className="b" type="submit" style={{ border: "none" }} >Create</button>
                        </div>

                    </form>
                </div>



            </div>
        )
    }
}

export default withRouter(CreateRole)
