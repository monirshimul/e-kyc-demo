import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Camera extends Component {
  base64Image = "";
  streamObject;

  static propTypes = {
    onConfirm: PropTypes.func.isRequired
  }



  componentDidMount() {
    const constraints = {
      video: true
    };

    const video = document.querySelector('#videoCap');
    const image = document.querySelector('#imageShow');
    const canvas = document.createElement('canvas');
    const capBtn = document.getElementById("capBtn");
    const imageContainer = document.getElementById("imageContainer");

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      //console.log(stream);
      video.srcObject = stream
      this.streamObject = stream
    }).catch(err => console.log(err));

    capBtn.onclick = video.onclick = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      let imageRaw = canvas.toDataURL('image/png');
      this.base64Image = imageRaw.split(',')[1];
      image.src = imageRaw;
      imageContainer.style.display = "block";
    };
  }

  UNSAFE_componentWillUnmount() {
    console.log("*****In unmount*****")
    this.streamObject.getTracks().forEach(function (track) {
      track.stop();
    });
  }

  onConfirm = (e) => {
    this.streamObject.getTracks().forEach(function (track) {
      track.stop();
    });
    this.props.onConfirm(this.base64Image);

  }

  render() {
    return (
      <div className="row text-center">
        <div className="col-sm-6 " style={{ margin: "auto" }} id="videoContainer">
          <video autoPlay width="340px" height="240px" id="videoCap"></video>
          <br />
          <button className="btn btn-info" id="capBtn">Capture</button>
        </div>
        <div className="col-sm-6 animated slideInLeft" style={{ display: "none" }} id="imageContainer">
          <img width="340px" height="240px" src="" style={{ marginBottom: "7px" }} id="imageShow" alt="Please click on video to capture" />
          <br />
          <button className="btn btn-success" id="conBtn" onClick={this.onConfirm} data-dismiss="modal" >Confirm</button>
        </div>


      </div>
    )
  }
}

export default Camera;