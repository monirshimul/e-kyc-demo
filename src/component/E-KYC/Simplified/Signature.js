import React, { Component } from 'react'
import Sign from './images/sign.svg'

export class Signature extends Component {
    continue = e => {
        const { values } = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    fileSelectedHandler = event => {
        if (event.target.files[0]) {
            let file = event.target.files[0];
            //console.log(file.type);
            var reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = () => {
                // console.log(typeof reader.result);
                // console.log(btoa(reader.result));
                let base64Image = btoa(reader.result);
                // this.setState({
                //   profilePic: base64Image,
                //   profilePicType: file.type

                //   //nidImage: URL.createObjectURL(event.target.files[0])
                // });
                this.props.handleState('signature', base64Image);

                this.props.handleState('signatureType', file.type)
            };
            reader.onerror = () => {
                console.log('there are some problems');
                alert('File can not be read');
            };
        }
    };


    render() {
        const { values } = this.props;
        console.log(values.signature);
        return (


            <div className="col-sm-12 d-flex justify-content-center" >
                <div className="card col-sm-5" style={{ paddingTop: "25px" }}>
                    <div className="card-header up">
                        <h3>Provide Signature</h3>
                    </div>
                    <div className="card-body d-flex justify-content-center">

                        <img

                            src={values.signature ? (values.flag + values.signature) : Sign}
                            style={{

                                width: "300px",
                                height: "200px",
                            }}
                            className=" img-fluid img-thumbnail im"
                            id='SignaturePic'
                            alt=""
                        />



                    </div>
                    <div
                        className="card-footer d-flex justify-content-around"
                        style={{ background: "#fff" }}
                    >

                        <div class="input-group mb-3 ">
                            <div class="custom-file">
                                <input type="file"
                                    onChange={this.fileSelectedHandler}

                                    class="form-control-file" id="input-file" />
                                <label class="custom-file-label" for="input-file">Choose Image</label>
                            </div>

                        </div>


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






        )
    }
}

export default Signature
