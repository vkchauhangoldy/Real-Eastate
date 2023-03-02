const express = require("express");
const router = express.Router();
const signuptemplate = require("../models/Login")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");//added

router.post("/signup", async (req, res) => {
    const { email, password, cpassword } = req.body;
    if (!email || !password || !cpassword) {
        res.status(422).json("Fill the details");
    }
    try {
        const pre_user = await signuptemplate.findOne({ email: email });
        if (pre_user) {
            res.status(422).json("User already registered");
        }
        else if (password != cpassword) {
            res.status.json("error:Password and confirm password");
        }
        else {
            const finaluser = new signuptemplate({
                email, password, cpassword
            });
            //hash password here before in schema
            const storedata = await finaluser.save()
            // console.log(storedata);
            res.status(201).json(storedata);
        }
    }
    catch (err) {
        res.status(422).json("Error catch");
        console.log(err);
    }
});


// sending the data of login page here
router.post("/login", async (req, res) => {  // url in postman to check 4000/reg/login
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json("Fill the Login details");
        }
        // first email database second email user data enter mail
        const uservalid = await signuptemplate.findOne({ email: email });
        if (uservalid) {
            const isMatch = await bcrypt.compare(password, uservalid.password);

            token = await uservalid.genrateAuthtoken()
              console.log(token)
            if (!isMatch) {
                res.status(422).json({ error: "Invalid credentials" })
            }
            else {

                res.status(201).json("Login successfully in third page");

            }
        } else {
            res.status(422).json("Invalid form");
        }

    } catch (err) {
        res.status(422).json("Error in details")
    }
})


module.exports = router;