import React, { Component } from 'react'
import Face from "./images/face.svg";

export class Nominee extends Component {


    continue = e => {
        const { values } = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    fileSelectedHandler = (event) => {
        if (event.target.files[0]) {
            let file = event.target.files[0];
            // console.log(file);
            //  console.log(idx);
            var reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = () => {
                let base64Image = btoa(reader.result);
                this.props.handleState(this.props.values.fields['photograph'], base64Image);
            };
            reader.onerror = () => {
                console.log('there are some problems');
                alert('File can not be read');
            };
        }
    };


    handleSubmit = e => {
        e.preventDefault()

        console.log(this.props.values.fields);

    }


    render() {
        const { values, fields, addFields, deteteRow } = this.props;
        console.log(values.fields[0].photograph);
        return (
            <div>
                <div className="row d-flex justify-content-center">
                    <div className="card col-sm-12" style={{ paddingTop: "25px" }}>
                        <div className="card-header up">
                            <h3>Nominee's Information</h3>
                        </div>
                        <div className="card-body d-flex justify-content-center">
                            <form onSubmit={this.handleSubmit} onChange={this.props.onChange}>


                                {
                                    values.fields.map((val, idx) => {
                                        let nomineeId = `nominee-${idx}`, relationId = `relation-${idx}`, photographId = `photograph-${idx}`
                                        return (
                                            <div>



                                                <div className='d-flex justify-content-center'>
                                                    <div className='card mb-3' style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
                                                        <div className='card-body'
                                                        // style={{ paddingLeft: "140px" }}
                                                        >
                                                            <h4 className="text-muted text-center">Nominee <small>{idx + 1}</small></h4>

                                                            <div className="form-group col-sm-4"
                                                                style={{ marginTop: "10px" }}
                                                            >
                                                                <label htmlFor={nomineeId}>Nominee's Name</label>
                                                                <input
                                                                    type="text"
                                                                    name="nominee"
                                                                    data-id={idx}
                                                                    id={nomineeId}
                                                                    value={values.fields[idx].nominee}
                                                                    className="form-control"
                                                                    placeholder="Enter Nominee's Name"
                                                                    style={{ width: "400px", height: "40px", paddingLeft: "10px" }}

                                                                />
                                                            </div>


                                                            <div className=" form-group col-sm-4"
                                                                style={{ marginTop: "10px" }}
                                                            >
                                                                <label htmlFor={relationId}>Relation</label>
                                                                <input
                                                                    type="text"
                                                                    name="relation"
                                                                    data-id={idx}
                                                                    id={relationId}
                                                                    value={values.fields[idx].relation}
                                                                    className="form-control"
                                                                    placeholder="Enter Relation"
                                                                    style={{ width: "400px", height: "40px", paddingLeft: "10px" }}

                                                                />

                                                            </div>
                                                            <div className=" form-group col-sm-4"
                                                                style={{ marginTop: "10px" }}
                                                            >
                                                                <label htmlFor="">Nominee's Photo</label>
                                                                <input
                                                                    type='file'
                                                                    name="photograph"
                                                                    onChange={this.fileSelectedHandler}
                                                                    className=""
                                                                    data-id={idx}
                                                                    id={photographId}
                                                                    aria-describedby='fileHelp'
                                                                ></input>
                                                            </div>

                                                        </div>
                                                        <div className="card-footer d-flex justify-content-center"
                                                            style={{ paddingLeft: "50px" }}
                                                        >
                                                            <span className="b mr-5" onClick={addFields}>Add More</span>
                                                            {idx !== 0 ? (<span className="b mr-5" style={{ background: "#e3174c" }} onClick={() => deteteRow(idx)}>Delete</span>) : ""}

                                                            <span className="b">Submit</span>


                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        )
                                    })

                                }

                            </form>


                        </div>

                        <div
                            className="card-footer d-flex justify-content-between"
                            style={{ background: "#fff" }}
                        >

                            <span className="b mr-5" onClick={this.back}>Back</span>
                            <span className="b" onClick={this.continue}>Next</span>




                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Nominee;
