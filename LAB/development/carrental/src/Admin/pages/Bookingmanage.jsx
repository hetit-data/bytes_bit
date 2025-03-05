
import AHeader from '../common/AHeader'
import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from 'axios';
function Bookingmanage() {
    const [booking, setbooking] = useState([]);

    const getbooking = async () => {
        const res = await axios.get("http://localhost:3000/booking");
        setbooking(res.data);

    };

    useEffect(() => {
        getbooking();
    }, []);

    return (
        <div>
            <AHeader />
            <div className="container">
                <h1 className="text-center py-4">Car Listing Management</h1>



                {/* Car Listing Table */}
                <div className="list-group">
                    {booking && booking.map((book, index) => {
                        const { id, Email, LastName, FirstName, Payment, SpecialRequest, SelectChild, SelectAdult, PickupTime, PickupDate, DropLocation, PickupLocation, MobileNumber } = book;
                        return (
                            <div key={id} className="list-group-item list-group-item-action">
                        
                                   
                                    <span className="badge bg-primary">ID : {id}</span>
                                
                                <div className="mb-2">
                                        <strong>FirstName</strong> {FirstName}
                                    </div>
                                    <div className="mb-2">
                                        <strong>LastName:</strong> {LastName}
                                    </div>

                                <div className="mb-2">
                                    <strong>Email:</strong> {Email}
                                </div>
                                <div className="mb-2">
                                    <strong>Phone:</strong> {MobileNumber}
                                </div>
                                <div className="mb-2">
                                    <strong>Pickup Location:</strong> {PickupLocation}
                                    <span className="ml-2"><strong>Date:</strong> {PickupDate}</span>
                                    <span className="ml-2"><strong>Time:</strong> {PickupTime}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>Drop Location:</strong> {DropLocation}
                                </div>
                                <div className="mb-2">
                                    <strong>Adults:</strong> {SelectAdult} <strong>Children:</strong> {SelectChild}
                                </div>
                                <div className="mb-2">
                                    <strong>Special Request:</strong> {SpecialRequest || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Payment Method:</strong> {Payment}
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <MDBBtn color='primary' rounded size='sm'>
                                        View
                                    </MDBBtn>
                                    <MDBBtn color='success' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                    <MDBBtn color='danger' rounded size='sm'>
                                        Delete
                                    </MDBBtn>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

export default Bookingmanage
