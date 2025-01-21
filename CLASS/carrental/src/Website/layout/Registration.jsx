import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFile,
    MDBRadio
} from 'mdb-react-ui-kit';
import axios from 'axios';

function Registration() {
    const [register, setregister] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: "",
        status: "" 
    });

    const onchangeform = (e) => {
        setregister({
            ...register,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        });
    };

    const onsubmitform = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/user", register);
            console.log(res.data);
            setregister({
                id: "",
                name: "",
                email: "",
                password: "",
                img: "",
                status: ""
            });
        } catch (error) {
            console.log("API error");
        }
    };

    return (
        <MDBContainer fluid>
            <form onSubmit={onsubmitform}>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol lg='9' className='my-5'>

                        <h1 className="text-black mb-4">Register</h1>

                        <MDBCard>
                            <MDBCardBody className='px-4'>

                                {/* Full Name */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Full name</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput value={register.name} name='name' onChange={onchangeform} label='Name' size='lg' id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Email Address */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Email address</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput value={register.email} name='email' onChange={onchangeform} label='example@example.com' size='lg' id='form2' type='email' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Password */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Password</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput value={register.password} name='password' onChange={onchangeform} label='Password' size='lg' id='form1' type='password' />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Upload Image */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Upload image</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBFile size='lg' id='customFile' value={register.img} name='img' onChange={onchangeform} />
                                        <div className="small text-muted mt-2">Upload your Image. Max file size 50 MB</div>
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                {/* Active/Inactive Status */}
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">Status</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5 d-flex'>
                                        <MDBRadio
                                            name='status'
                                            id='active'
                                            label='Active'
                                            value='active'
                                            checked={register.status === "active"}
                                            onChange={onchangeform}
                                            inline
                                        />
                                        <MDBRadio
                                            name='status'
                                            id='inactive'
                                            label='Inactive'
                                            value='inactive'
                                            checked={register.status === "inactive"}
                                            onChange={onchangeform}
                                            inline
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBBtn className='my-4' size='lg'>Send Application</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    );
}

export default Registration;
