import React, { Component } from 'react'
import NidImage from './NidImage';
import CaptureImage from './CaptureImage';
import PersonalDetails from './PersonalDetails';
import Signature from './Signature';
import Nominee from './Nominee';
import Confirm from './Confirm';
import Success from './Success';
import { formatDate } from './utils/DateFormat';
import { image } from './images/images';

export class MainFace extends Component {

    state = {
        step: 1,
        //Account

        accountType: '',
        product: '',
        //Step1
        NidFront: "",
        NidFrontType: '',
        NidBack: '',
        NidBackType: '',
        //Step2

        faceImage: "",
        showCamera: false,
        imageFlag: false,
        isEnable: false,
        nidNo: '',
        dob: '',
        loading: false,
        //step3
        applicantName: '',
        motherName: '',
        fatherName: '',
        spouseName: '',
        gender: '',
        profession: '',
        mobileNumber: '',
        presentAddress: '',
        permanentAddress: '',
        //Step 4 
        fields: [{ nominee: '', relation: '', photograph: '' }],
        //Step 5
        signature: '',
        signatureType: '',
        //common for all component
        flag: 'data:image/jpeg;base64,'
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    componentDidMount() {
        try {
            const account = localStorage.getItem("accountInfo");
            const acc = JSON.parse(account);
            this.setState({

                accountType: acc.accountType,
                product: acc.product
            })
            localStorage.removeItem("accountInfo");
        } catch (e) {

        }
    }

    //Handle Fields Change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    //handle state change
    handleState = (input, data) => {
        this.setState({ [input]: data });
    }

    handleDate = (input, date) => {
        this.setState({ [input]: date });
    }

    multiChange = e => {
        if (["nominee", "relation", "photograph"].includes(e.target.name)) {
            let fields = [...this.state.fields]
            fields[e.target.dataset.id][e.target.name] = e.target.value
            this.setState({ fields })
        }
    }

    addFields = e => {
        this.setState((prevState) => ({
            fields: [...prevState.fields, { nominee: '', relation: '', photograph: '' }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            fields: this.state.fields.filter((s, sindex) => index !== sindex),
        });

    }

    render() {

        const { step } = this.state;
        const { NidFront, NidFrontType, NidBack, NidBackType, flag, faceImage, showCamera, imageFlag, isEnable, nidNo, dob, loading, applicantName, motherName, fatherName, spouseName, gender, profession, mobileNumber, presentAddress, permanentAddress, signature, signatureType, fields, accountType, product } = this.state;
        const values = { NidFront, NidFrontType, NidBack, NidBackType, flag, faceImage, showCamera, imageFlag, isEnable, nidNo, dob, loading, applicantName, motherName, fatherName, spouseName, gender, profession, mobileNumber, presentAddress, permanentAddress, signature, signatureType, fields, accountType, product }


        switch (step) {
            case 1:
                return (
                    <NidImage
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleState={this.handleState}
                        values={values}
                    />
                )

            case 2:
                return (
                    <CaptureImage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleState={this.handleState}
                        handleDate={this.handleDate}
                        values={values}
                    />
                )

            case 3:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 4:
                return (
                    <Nominee
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        onChange={this.multiChange}
                        handleState={this.handleState}
                        addFields={this.addFields}
                        deteteRow={this.deteteRow}
                        values={values}
                    />
                )

            case 5:
                return (
                    <Signature
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleState={this.handleState}
                        values={values}
                    />
                )

            case 6:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )

            case 7:
                return <Success />


        }

        return (
            <div>

            </div>
        )
    }
}

export default MainFace;
