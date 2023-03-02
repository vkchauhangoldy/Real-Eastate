const express = require("express");
const router = express.Router();
const signuptemplate = require("../models/Login")


//Login page fetching data
router.get("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json("Fill the details");
    }
    try {
        // first email database second email user data enter mail
        const uservalid = await signuptemplate.findOne({ email: email, password: password });
        if(uservalid){
            console.log(uservalid);
        }
        else{
            res.status(422).json("data not found");
        }
         

    } catch (err) {
      res.status(422).json("Error in loading")
    }
})
module.exports = router;