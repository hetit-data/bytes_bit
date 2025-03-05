import React, { useEffect, useState } from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'
import axios from 'axios'

function Service() {
    const [carservice, setcarservicce] = useState([])

    const getservice = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setcarservicce(res.data)
    }
    useEffect(() => {
        getservice()
    }, [])

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
                    <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Service</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Our Services</h1>
                        <div className="row">
                            {
                                carservice && carservice.map((car, index) => {
                                    console.log(car)
                                    const { id,img, title, desc } = car
                                    return (
                                        <div className="col-lg-4 col-md-6 mb-2">
                                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                                        <img src="{img}" alt="" />
                                                    </div>
                                                  
                                                </div>
                                                <h4 className="text-uppercase mb-3">{title}</h4>
                                                <p className="m-0">{desc}</p>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="bg-banner py-5 px-4 text-center">
                            <div className="py-5">
                                <h1 className="display-1 text-uppercase text-primary mb-4">50% OFF</h1>
                                <h1 className="text-uppercase text-light mb-4">Special Offer For New Members</h1>
                                <p className="mb-4">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                                <a className="btn btn-primary mt-2 py-3 px-5" href>Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
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

export default Service
