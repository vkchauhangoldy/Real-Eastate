const express = require("express");
const router = express.Router();
const signuptemplate = require("../models/Login")
const bcrypt = require("bcryptjs");


router.post("/signup", async (req, res) => {
    // const saltpassword= await bcrypt.genSalt(10);
    // const securepassword= await bcrypt.hash(req.body.password, saltpassword)

    // const signuser = new signuptemplate({
    // email:req.body.email,
    // password:securepassword,
    // cpassword:securepassword


    // })

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


//Login page fetching data
router.post("/login", async (req, res) => {
    const { email,password } = req.body;
    if (!email || !password) {
        res.status(422).json("Fill the in post login details");
    }
    try {
        // first email database second email user data enter mail
        const uservalid = await signuptemplate.findOne({ email: email });

        if (uservalid) {
            const isfound = await bcrypt.compare(password, uservalid.password);
            if (!isfound) {
                res.status(422).json({ error: "Invalid credentials" })
            }
            else {
                //token generate in shema 
                const token = await uservalid.token_genrate();
                 console.log(token);

                // //cookie genrated
                // res.cookie("usercookie", token, {
                //     expires: new Date(Date.now() + 900000),
                //     httpOnly: true
                // });
                // const result = {
                //     uservalid,
                //     token
                // }
                // res.status(201).json({ status: 201, result })
            }
        }

    } catch (err) {
        res.status(422).json("Error in details")
    }
})


module.exports = router;