import React, { Component } from 'react'
import Checkbox from '../Simplified/Reusable/CheckBox'

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
    handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.value;
        if (this.state.checkedItems.has(item)) {
            this.state.checkedItems.delete(item)

            this.setState({

                selectedFeature: Array.from(this.state.checkedItems.keys())
            })

        } else {
            this.setState({
                checkedItems: this.state.checkedItems.set(item, isChecked),
                selectedFeature: Array.from(this.state.checkedItems.keys())
            });

        }
    }

    // ==================End of Multi Check box onChange Method ======================






    render() {
        const { selectedFeature } = this.state
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
                    console.log("Selected Feature==>", selectedFeature)
                }

                <div className="card-header divBg">
                    <h3 className="text-center pt-3">
                        {selectedFeature.map((v, i) => (

                            v === null ? "" : v + ","

                        ))}
                    </h3>




                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        {/* Account Number */}


                        {/* Product and Service */}
                        <div className='form-group'>
                            <label htmlFor="">Select Role Name</label>
                            <select
                                className='custom-select'
                                value={this.state.product}
                                onChange={this.onChange}
                                name="product"
                            >
                                <option value='' disabled>--Select--</option>
                                <option value='Current Account'>Admin</option>
                                <option value='Savings Account'>Super Admin</option>
                                <option value='Credit Account'>Branch User</option>
                                <option value='Debit Card'>Branch Admin</option>
                            </select>
                        </div>



                        <div className="form-group" >


                            {
                                allMenu.map((features, index) => (
                                    <div>
                                        {
                                            features.key % 1 !== 0 ? (
                                                <div className="custom-control custom-checkbox " key={index} >
                                                    <input
                                                        type="checkbox"
                                                        name={features.key}
                                                        checked={this.state.checkedItems.get(features.key)}
                                                        className="custom-control-input" id={index + 1}
                                                        style={{ marginRight: "5px" }}
                                                        onChange={this.handleChange}
                                                        value={features.featureName}
                                                    />
                                                    <label className="custom-control-label" for={index + 1}>{features.featureName}</label>
                                                </div>
                                            ) : ""
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

export default CreateRole
