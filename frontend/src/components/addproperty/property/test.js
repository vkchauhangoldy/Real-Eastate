import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { idContext } from "../../context/idcontext";
import Sidebar from '../../sidebar/Sidebar'

import "./general.css";

const GenInfo = () => {
    const navigate = useNavigate();

    const generalContext = useContext(idContext);
    //extra part
    // function nextPage() {
    //     navigate("/location");
    // }
    function lastPage() {
        navigate("/prodetail");
    }
    ///

    const [generalData, setGeneralData] = useState({
        username: "",
        mobile: "",
        postedby: "owner",
        saletype: "",
        feature: "",
        PPDpackage: ""
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGeneralData({ ...generalData, [name]: value });
    };
    // let propertyInfo1 = generalContext.propertyid;

    // const [username, setUsername] = useState("");
    // const [mobile, setMobile] = useState("");
    // const [postedby, setPostedBy] = useState("owner");
    // const [saletype, setSaleType] = useState("");
    // const [feature, setFeature] = useState("");
    // const [PPDpackage, setPPDPackage] = useState("");
    // // const [image, setImage] = useState(null);
    // const [propertyInfo, setpropertyInfo] = useState("");

    // useEffect(() => {
    //     // setpropertyInfo(propertyInfo1)
    // }, [])

    // extra part if we want to clear the form
    // const handleClear = () => {
    //     setUsername("")
    //     setMobile("")
    //     setPostedBy("owner")
    //     setSaleType("")
    //     setFeature("")
    //     setPPDPackage("")
    //     setImage(null)
    // }


    const handleSubmit = async (event) => {
        const formData = { ...generalData, };
        event.preventDefault();
        // const formData = new FormData();
        // formData.append("username", username);
        // formData.append("mobile", mobile);
        // formData.append("postedby", postedby);
        // formData.append("saletype", saletype);
        // formData.append("feature", feature);
        // formData.append("PPDpackage", PPDpackage);
        // // formData.append("image", image);
        // formData.append("propertyInfo", propertyInfo);

        await fetch("http://localhost:2023/api/general", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            // generalContext.setgeneralid(data.generaldetails._id);
            navigate("/location")
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <Sidebar />

            <div className="general-info-row">
                <h3>ADD NEW PROPERTY</h3>
                <ul className="general-ul-row">
                    <li>1.Basic info</li>
                    <li >2.Property Details</li>
                    <li className="general-li">3.General Info</li>
                    <li>4.Location Info</li>
                </ul>
            </div>
            <div className="general-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="genral-form-flexbox">
                        <div>
                            <label>
                                Username<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="text"
                                    value={generalData.username}
                                    onChange={handleInputChange}
                                    // required
                                />
                            </label>
                            <label>
                                Mobile<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="number"
                                    value={generalData.mobile}
                                    onChange={handleInputChange}
                                    // required
                                    minLength="10"
                                    maxLength="12"
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Posted By:
                                <select value={generalData.postedby} 
                                onChange={handleInputChange}>
                                    <option value="owner">Owner</option>
                                    <option value="dealer">Dealer</option>
                                </select>
                            </label>

                            <label>
                                Sale Type:
                                <input
                                    type="text"
                                    value={generalData.saletype}
                                    onChange={handleInputChange}
                                    placeholder="example.."
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Feature <span style={{ color: "red" }}>*</span>:
                                <select value={generalData.feature}
                                 onChange={handleInputChange} required>
                                    <option value="gym">Gym</option>
                                    <option value="pool">Pool</option>
                                    <option value="garden">Garden</option>
                                </select>
                            </label>

                            <label>
                                PPD Package:
                                <input
                                    type="text"
                                    value={generalData.PPDpackage}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            {/* <label>
                                Image <span style={{ color: "red" }}>*</span>:
                                <input type="file"
                                    accept=".jpeg, .jpg, .png, .mp4"
                                    onChange={(event) => setImage(event.target.files[0])} required />
                            </label> */}
                        </div>
                        <div className="general-btn">
                            <div>
                                {/* <button onChange={handleClear}>Previous</button> */}
                                <button onClick={lastPage}>Previous</button>
                            </div>
                            <div>
                                <button type="submit">save & continue </button>
                                {/* <button type="submit" onClick={nextPage}>save & continue </button> */}
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default GenInfo;