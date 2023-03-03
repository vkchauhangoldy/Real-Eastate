import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { idContext } from "../../context/idcontext";

import "./location.css"
const LocateInfo = () => {
    const locationContext = useContext(idContext);
    const generalInfo = locationContext.generalid;

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: "",
    });

    const handleClear = () => {
        setFormData({
            email: "",
            city: "",
            area: "",
            pincode: "",
            address: "",
            landmark: "",
            latitude: "",
            longitude: "",
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = { ...formData, generalInfo };

        fetch("http://localhost:2023/api/location", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        }).then(res => {
            return res.json();
        }).then(data => {
            // console.log(data);
            navigate("/propertylist");
        })
            .catch(error => {
                navigate("/propertylist");
                console.error(error);
            })
    };

    return (
        <>
            {/* <Header />
            <Sidebar /> */}
            <div className="location-info-row">
                <h3>ADD NEW PROPERTY</h3>
                <ul className="location-ul-row">
                    <li >Basic info</li>
                    <li>Property Details</li>
                    <li>General Info</li>
                    <li className="location-li">Location Info</li>
                </ul>
            </div>
            <div className="location-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="location-form-flexbox">
                        <div>
                            <label>
                                Email <span style={{ color: "red" }}>*</span>:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                City <span style={{ color: "red" }}>*</span>:
                                <select name="city" value={formData.city} onChange={handleChange} required>
                                    <option value="">Select city</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="banglore">Banglore</option>
                                    <option value="hyderabad">Hyderabad</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Area:
                                <input
                                    type="text"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Pincode:
                                <input
                                    type="number"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Address:
                                <textarea name="address"
                                    value={formData.address}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                Landmark:
                                <input
                                    type="text"
                                    name="landmark"
                                    value={formData.landmark}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Latitude:
                                <input
                                    type="text"
                                    name="latitude"
                                    value={formData.latitude}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Longitude:
                                <input
                                    type="text"
                                    name="longitude"
                                    value={formData.longitude}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <button onChange={handleClear}>Clear</button>
                        </div>
                        <div>
                            <button type="submit">Add Property</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LocateInfo;
