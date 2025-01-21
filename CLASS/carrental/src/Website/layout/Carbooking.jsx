import React, { useState } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import { MDBInput } from "mdb-react-ui-kit";
import axios from 'axios';
function Carbooking() {
    const [booking, setbooking] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        MobileNumber: "",
        PickupLocation: "",
        DropLocation: "",
        PickupDate: "",
        PickupTime: "",
        SelectAdult: "",
        SelectChild: "",
        SpecialRequest: "",
        Payment: ""
    })

    const changeform = (e) => {
        setbooking({
            ...booking,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(booking)
    }
    const onsubmitt = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/booking", booking)
            console.log(res.data)
            setbooking({
                FirstName: "",
                LastName: "",
                Email: "",
                MobileNumber: "",
                PickupLocation: "",
                DropLocation: "",
                PickupDate: "",
                PickupTime: "",
                SelectAdult: "",
                SelectChild: "",
                SpecialRequest: "",
                Payment: ""
            })
        }
        catch (error) {
            console.log("api error")

        }
    }
    return (
        <div>
            <Header />
            <div>
                {/* Search Start */}
                <div className="container-fluid bg-white pt-3 px-lg-5">
                    <div className="row mx-n2">
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                <option selected>Pickup Location</option>
                                <option value={1}>Location 1</option>
                                <option value={2}>Location 2</option>
                                <option value={3}>Location 3</option>
                            </select>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                <option selected>Drop Location</option>
                                <option value={1}>Location 1</option>
                                <option value={2}>Location 2</option>
                                <option value={3}>Location 3</option>
                            </select>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <div className="date mb-3" id="date" data-target-input="nearest">
                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Date" data-target="#date" data-toggle="datetimepicker" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <div className="time mb-3" id="time" data-target-input="nearest">
                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Time" data-target="#time" data-toggle="datetimepicker" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                <option selected>Select A Car</option>
                                <option value={1}>Car 1</option>
                                <option value={2}>Car 1</option>
                                <option value={3}>Car 1</option>
                            </select>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <button className="btn btn-primary btn-block mb-3" type="submit" style={{ height: 50 }}>Search</button>
                        </div>
                    </div>
                </div>
                {/* Search End */}
                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Car Booking</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Car Booking</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Detail Start */}
                <div className="container-fluid pt-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase mb-5">Mercedes Benz R3</h1>
                        <div className="row align-items-center pb-2">
                            <div className="col-lg-6 mb-4">
                                <img className="img-fluid" src="img/bg-banner.jpg" alt />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <h4 className="mb-2">$99.00/Day</h4>
                                <div className="d-flex mb-3">
                                    <h6 className="mr-2">Rating:</h6>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star-half-alt text-primary mr-1" />
                                        <small>(250)</small>
                                    </div>
                                </div>
                                <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt</p>
                                <div className="d-flex pt-1">
                                    <h6>Share on:</h6>
                                    <div className="d-inline-flex">
                                        <a className="px-2" href><i className="fab fa-facebook-f" /></a>
                                        <a className="px-2" href><i className="fab fa-twitter" /></a>
                                        <a className="px-2" href><i className="fab fa-linkedin-in" /></a>
                                        <a className="px-2" href><i className="fab fa-pinterest" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-n3 mt-lg-0 pb-4">
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-car text-primary mr-2" />
                                <span>Model: 2015</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-cogs text-primary mr-2" />
                                <span>Automatic</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-road text-primary mr-2" />
                                <span>20km/liter</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-eye text-primary mr-2" />
                                <span>GPS Navigation</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-car text-primary mr-2" />
                                <span>Model: 2015</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-cogs text-primary mr-2" />
                                <span>Automatic</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-road text-primary mr-2" />
                                <span>20km/liter</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-eye text-primary mr-2" />
                                <span>GPS Navigation</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-car text-primary mr-2" />
                                <span>Model: 2015</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-cogs text-primary mr-2" />
                                <span>Automatic</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-road text-primary mr-2" />
                                <span>20km/liter</span>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <i className="fa fa-eye text-primary mr-2" />
                                <span>GPS Navigation</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Detail End */}
                {/* Car Booking Start */}
                <div className="container-fluid pb-5">
                    <div className="container">
                        <form onSubmit={onsubmitt}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2 className="mb-4">Personal Detail</h2>
                                    <div className="mb-5">
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <input type="text" name='FirstName' value={booking.FirstName} onChange={changeform} className="form-control p-4" placeholder="First Name" required="required" />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input type="text" name='LastName' value={booking.LastName} onChange={changeform} className="form-control p-4" placeholder="Last Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <input type="email" name='Email' value={booking.Email} onChange={changeform} className="form-control p-4" placeholder="Your Email" required="required" />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input type="text" name='MobileNumber' value={booking.MobileNumber} onChange={changeform} className="form-control p-4" placeholder="Mobile Number" required="required" />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="mb-4">Booking Detail</h2>
                                    <div className="mb-5">
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <select className="custom-select px-4" style={{ height: 50 }} name='PickupLocation' value={booking.PickupLocation} onChange={changeform}>
                                                    <option selected>Pickup Location</option>
                                                    <option value={1}>Location 1</option>
                                                    <option value={2}>Location 2</option>
                                                    <option value={3}>Location 3</option>
                                                </select>
                                            </div>
                                            <div className="col-6 form-group">
                                                <select className="custom-select px-4" style={{ height: 50 }} name='DropLocation' value={booking.DropLocation} onChange={changeform}>
                                                    <option selected>Drop Location</option>
                                                    <option value={1}>Location 1</option>
                                                    <option value={2}>Location 2</option>
                                                    <option value={3}>Location 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                        <div className="col-6 form-group">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <input type="text"  name='PickupDate' value={booking.PickupDate} onChange={changeform} className="form-control p-4 datetimepicker-input" placeholder="Pickup Date" data-target="#date2" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                        <div className="col-6 form-group">
                                            <div className="time" id="time2" data-target-input="nearest">
                                                <input type="text"  name='PickupTime' value={booking.PickupTime} onChange={changeform}  className="form-control p-4 datetimepicker-input" placeholder="Pickup Time" data-target="#time2" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                    </div> */}
                                        <div className="row">
                                            {/* Date Picker */}
                                            <div className="col-6 form-group">
                                                <label htmlFor="pickupDate" className="form-label">
                                                    Pickup Date
                                                </label>
                                                <MDBInput
                                                    type="date"
                                                    id="pickupDate"
                                                    name="PickupDate"
                                                    value={booking.PickupDate}
                                                    onChange={changeform}
                                                    className="form-control"
                                                />
                                            </div>

                                            {/* Time Picker */}
                                            <div className="col-6 form-group">
                                                <label htmlFor="pickupTime" className="form-label">
                                                    Pickup Time
                                                </label>
                                                <MDBInput
                                                    type="time"
                                                    id="pickupTime"
                                                    name="PickupTime"
                                                    value={booking.PickupTime}
                                                    onChange={changeform}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <select className="custom-select px-4" style={{ height: 50 }} name='SelectAdult' value={booking.SelectAdult} onChange={changeform}>
                                                    <option selected>Select Adult</option>
                                                    <option value={1}>Adult 1</option>
                                                    <option value={2}>Adult 2</option>
                                                    <option value={3}>Adult 3</option>
                                                </select>
                                            </div>
                                            <div className="col-6 form-group">
                                                <select className="custom-select px-4" style={{ height: 50 }} name='SelectChild' value={booking.SelectChild} onChange={changeform} >
                                                    <option selected>Select Child</option>
                                                    <option value={1}>Child 1</option>
                                                    <option value={2}>Child 2</option>
                                                    <option value={3}>Child 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control py-3 px-4" rows={3} placeholder="Special Request" name='SpecialRequest' value={booking.SpecialRequest} onChange={changeform} required="required" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-secondary p-5 mb-5">
                                        <h2 className="text-primary mb-4">Payment</h2>
                                        <div className="form-group">
                                            <div className="custom-control custom-radio">
                                                <input
                                                    type="radio"
                                                    className="custom-control-input"
                                                    name="Payment"
                                                    id="paypal"
                                                    value="Paypal"
                                                    onChange={changeform}
                                                />
                                                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-radio">
                                                <input
                                                    type="radio"
                                                    className="custom-control-input"
                                                    name="Payment"
                                                    id="directcheck"
                                                    value="Direct Check"
                                                    onChange={changeform}
                                                />
                                                <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="custom-control custom-radio">
                                                <input
                                                    type="radio"
                                                    className="custom-control-input"
                                                    name="Payment"
                                                    id="banktransfer"
                                                    value="Bank Transfer"
                                                    onChange={changeform}
                                                />
                                                <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-block btn-primary py-3"
                                            onClick={onsubmitt}
                                        >
                                            Reserve Now
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                {/* Car Booking End */}
                {/* Vendor Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="owl-carousel vendor-carousel">
                            <div className="bg-light p-4">
                                <img src="img/vendor-1.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-2.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-3.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-4.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-5.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-6.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-7.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-8.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Vendor End */}
            </div>

            <Footer />
        </div>
    )
}

export default Carbooking
