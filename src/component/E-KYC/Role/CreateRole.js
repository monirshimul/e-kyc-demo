import React, { Component } from 'react'

class CreateRole extends Component {

    state = {
        selectedFeature: [],
        createdBy: '',
        createDate: new Date
    }
    render() {
        return (
            <div className="card col-sm-7" style={{ paddingTop: "25px" }}>

                <div className="card-header divBg">

                    <h3 className="text-center pt-3">Create Role</h3>

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
                        {/* Account Type */}
                        <div className='form-group'>
                            <label htmlFor="">Select Role's Feature</label>
                            <select
                                className='custom-select'
                                value={this.state.accountType}
                                onChange={this.onChange}
                                name="accountType"
                            >
                                <option value='' disabled>--Select--</option>
                                <option value='Single'>Single Account</option>
                                <option value='Joint'>Joint Account</option>

                            </select>
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
