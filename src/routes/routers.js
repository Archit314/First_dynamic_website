const express = require("express");
const routes = express.Router();
const Detail = require("../models/Detail");
const slider = require("../models/slider");
const servicers = require("../models/service");
const contact = require("../models/contact");
const { response } = require("express");


routes.get("/", async (req, res)=>{
    const details = await Detail.findOne({"_id": "6351241217742540c7788128"});
    const sliders = await slider.find();
    const services = await servicers.find();

    // console.log(details);
    // console.log(sliders);

    res.render("index", {
        details: details,
        slides:sliders,
        services:services,
    });
})
routes.get("/gallery", async (req, res)=>{
    const details = await Detail.findOne({"_id": "6351241217742540c7788128"});
    // console.log(details);
    res.render("gallery", {
        details:details
    });
})
//process contact form
routes.post("/process-contact-form", async (req, res)=>{
    console.log("form is submited");
    console.log(req.body);
    //Saving the data when form is submited in the database
    try{
        const data = await contact.create(req.body);
        console.log(data);
        res.redirect("/");
    }catch(e)
    {
        console.log(e);
        res.redirect("/");
    }
})


module.exports = routes;