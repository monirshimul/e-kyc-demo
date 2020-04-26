import React, { Component } from "react";
import Camera from "./utils/Camera";
import { formatDate } from "./utils/DateFormat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from "./Reusable/Spinner";
import "./utils/Common.css";
import Face from "./images/face.svg";

export class CaptureImage extends Component {
  continue = (e) => {
    const { values } = this.props;
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  onImageConfirm = (base64Image) => {
    //console.log("In image confirm");
    //console.log(base64Image);
    //this.setState({faceImage: base64Image, imageFlag: true});
    this.props.handleState("faceImage", base64Image);
    this.props.handleState("imageFlag", true);
    this.closeCamera();
  };

  showCamera = () => this.props.handleState("showCamera", true);

  closeCamera = () => this.props.handleState("showCamera", false);

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { values, handleState, handleChange, handleDate } = this.props;
    console.log(values.dob);

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="card col-sm-5" style={{ paddingTop: "25px" }}>
            <div className="card-header up">
              <h3>Face Verification</h3>
            </div>
            <div className="card-body d-flex justify-content-center">
              {values.imageFlag ? (
                <img
                  src={values.flag + values.faceImage}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "250px",
                    height: "200px",
                  }}
                  className=" img-thumbnail center animated slideInDown"
                  id="imagePicture"
                  alt="cameraPicture"
                />
              ) : (
                  <img
                    src={Face}
                    style={{
                      margin: "auto",
                      cursor: "pointer",
                      width: "300px",
                      height: "200px",
                    }}
                    className="img-fluid round img-thumbnail im"
                    id="FrontNidPic"
                    alt=""
                  />
                )}


            </div>
            <div className="up "
              style={{ width: "300px", textAlign: "center", margin: "0 auto", marginBottom: "10px" }}
              data-toggle="modal"
              data-target="#cameraModal"
              onClick={this.showCamera}
            >
              Capture Image
            </div>
            <div
              className="card-footer d-flex justify-content-between"
              style={{ background: "#fff" }}
            >

              <span className="b mr-5" onClick={this.back}>Back</span>
              <span className="b" onClick={this.continue}>Next</span>




            </div>
          </div>



          {/* modal for image */}
          <div
            className="modal fade "
            id="cameraModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="cameraModalLabel"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog mw-100 w-75" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="cameraModalLabel">
                    Capture Your Image
                          </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.closeCamera}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {values.showCamera ? (
                    <Camera onConfirm={this.onImageConfirm} />
                  ) : (
                      ""
                    )}
                </div>
              </div>
            </div>
          </div>
          {/* modal for image */}



          {/* End Content*/}
        </div>
      </div>
    );
  }
}

export default CaptureImage;
