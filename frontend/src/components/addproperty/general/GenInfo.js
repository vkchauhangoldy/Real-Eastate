import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { idContext } from "../../context/idcontext";

import "./general.css";

const GenInfo = () => {
    const navigate = useNavigate();

    const generalContext = useContext(idContext);

    let propertyInfo1 = generalContext.propertyid;

    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [postedby, setPostedBy] = useState("owner");
    const [saletype, setSaleType] = useState("");
    const [feature, setFeature] = useState("");
    const [PPDpackage, setPPDPackage] = useState("");
    const [image, setImage] = useState(null);
    const [propertyInfo, setpropertyInfo] = useState("");

    useEffect(() => {
        setpropertyInfo(propertyInfo1)
    }, [])


    const handleClear = () => {
        setUsername("")
        setMobile("")
        setPostedBy("owner")
        setSaleType("")
        setFeature("")
        setPPDPackage("")
        setImage(null)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("mobile", mobile);
        formData.append("postedby", postedby);
        formData.append("saletype", saletype);
        formData.append("feature", feature);
        formData.append("PPDpackage", PPDpackage);
        formData.append("image", image);
        formData.append("propertyInfo", propertyInfo);

        fetch("http://localhost:2023/api/general", {
            method: "POST",
            body: formData,
        }).then((response) => {
            return response.json()
        }).then((data) => {
            // console.log(data, "generalinfo");
            generalContext.setgeneralid(data.generaldetails._id);
            navigate("/locationinfo")
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <>
            {/* <Header />
            <Sidebar /> */}
            <div className="general-info-row">
                <h3>ADD NEW PROPERTY</h3>
                <ul className="general-ul-row">
                    <li>Basic info</li>
                    <li >Property Details</li>
                    <li className="general-li">General Info</li>
                    <li>Location Info</li>
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
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Mobile<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="number"
                                    value={mobile}
                                    onChange={(event) => setMobile(event.target.value)}
                                    required
                                    minLength="10"
                                    maxLength="12"
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Posted By:
                                <select value={postedby} onChange={(event) => setPostedBy(event.target.value)}>
                                    <option value="owner">Owner</option>
                                    <option value="dealer">Dealer</option>
                                </select>
                            </label>

                            <label>
                                Sale Type:
                                <input
                                    type="text"
                                    value={saletype}
                                    onChange={(event) => setSaleType(event.target.value)}
                                    placeholder="eg. transaction, loan,etc.."
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Feature <span style={{ color: "red" }}>*</span>:
                                <select value={feature} onChange={(event) => setFeature(event.target.value)} required>
                                    <option value="gym">Gym</option>
                                    <option value="pool">Pool</option>
                                    <option value="garden">Garden</option>
                                    <option value="auditorium">Auditorium</option>
                                </select>
                            </label>

                            <label>
                                PPD Package:
                                <input
                                    type="text"
                                    value={PPDpackage}
                                    onChange={(event) => setPPDPackage(event.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Image <span style={{ color: "red" }}>*</span>:
                                <input type="file"
                                    accept=".jpeg, .jpg, .png, .mp4"
                                    onChange={(event) => setImage(event.target.files[0])} required />
                            </label>
                        </div>
                        <div className="general-btn">
                            <div>
                                <button onChange={handleClear}>Clear</button>
                            </div>
                            <div>
                                <button type="submit">save & continue </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default GenInfo;