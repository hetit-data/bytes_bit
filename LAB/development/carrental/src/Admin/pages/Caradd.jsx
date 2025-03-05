import React, { useState } from 'react';
import AHeader from '../common/AHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Caradd() {
    const redirect = useNavigate();
    const [carlist, setCarlist] = useState({
        id: '',
        title: '',
        carimg: '',
        MFG: '',
        type: '',
        Km: '',
        price: ''
    });
    const [errors, setErrors] = useState({}); // Initialize as an empty object

    const onchangeform = (e) => {
        setCarlist({
            ...carlist,
            id: new Date().getTime().toString(), // Generate unique ID
            [e.target.name]: e.target.value
        });
        console.log(carlist);
    };

    const onsubmitt = async (e) => {
        e.preventDefault();

        // Validation
        const validationErrors = {};
        if (!carlist.title.trim()) {
            validationErrors.title = 'Car name is required';
        }
        if (!carlist.Km.trim()) {
            validationErrors.Km = 'Kilometers (Km) are required';
        }
        if (!carlist.MFG.trim()) {
            validationErrors.MFG = 'Manufacturer (MFG) is required';
        }
        if (!carlist.carimg.trim()) {
            validationErrors.carimg = 'Image URL is required';
        }
        if (!carlist.price.trim()) {
            validationErrors.price = 'Price is required';
        }
        if (!carlist.type.trim()) {
            validationErrors.type = 'Car type is required';
        }

        setErrors(validationErrors);

        // If no validation errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            try {
                await axios.post('http://localhost:3000/carlisting', carlist);
                alert('Car added successfully!');
                setCarlist({
                    id: '',
                    title: '',
                    carimg: '',
                    MFG: '',
                    type: '',
                    Km: '',
                    price: ''
                });
                redirect('/carlistingmanage');
            } catch (error) {
                console.error('API error:', error);
                alert('Failed to add car. Please try again.');
            }
        }
    };

    return (
        <div>
            <AHeader />
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-4 text-uppercase text-center mb-5">Add Car</h1>
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                <form onSubmit={onsubmitt}>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                value={carlist.title}
                                                name="title"
                                                onChange={onchangeform}
                                                placeholder="Car Name"
                                            />
                                            {errors.title && <span className="text-danger">{errors.title}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                value={carlist.carimg}
                                                name="carimg"
                                                onChange={onchangeform}
                                                placeholder="Car Image URL"
                                            />
                                            {errors.carimg && <span className="text-danger">{errors.carimg}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                value={carlist.MFG}
                                                name="MFG"
                                                onChange={onchangeform}
                                                placeholder="Manufacturer (MFG)"
                                            />
                                            {errors.MFG && <span className="text-danger">{errors.MFG}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <select
                                                value={carlist.type}
                                                name="type"
                                                onChange={onchangeform}
                                                className="custom-select px-4 mb-3"
                                                style={{ height: 50 }}
                                            >
                                                <option hidden>Select Type</option>
                                                <option value="Auto">Auto</option>
                                                <option value="Manual">Manual</option>
                                            </select>
                                            {errors.type && <span className="text-danger">{errors.type}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                value={carlist.Km}
                                                name="Km"
                                                onChange={onchangeform}
                                                placeholder="Kilometers Driven"
                                            />
                                            {errors.Km && <span className="text-danger">{errors.Km}</span>}
                                        </div>
                                        <div className="col-6 form-group">
                                            <input
                                                type="number"
                                                className="form-control p-4"
                                                value={carlist.price}
                                                name="price"
                                                onChange={onchangeform}
                                                placeholder="Car Price"
                                            />
                                            {errors.price && <span className="text-danger">{errors.price}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-5" type="submit">
                                            Add Car
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Caradd;
