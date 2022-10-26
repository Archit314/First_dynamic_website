const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routers')
const Detail = require('./models/Detail');
const slider = require('./models/slider');
const service = require('./models/service');
const about = require('./models/about');


app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static', express.static("public"));
app.use('', routes);


// template engine hbs
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")


//database connection
mongoose.connect("mongodb://localhost/foody_dynamic_website", ()=>{
    console.log("db connected");

    // initial data enter to nav bar just for once while making navbar dynamic and when it is send to the mongodb then we can comment it
    // Detail.create({
    //     brandName: "Foodies",
    //     brandIconUrl:"https://yt3.ggpht.com/9YteXxyfohVNfQYGMeNQlqVy6bQvCDhIUT7ZNVsUvmPV2bKNBZcC1Ptseet5Y5QRHRtlvIIh=s176-c-k-c0x00ffffff-no-rj",
    //     links:[
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/Contact-us"
    //         },
    //     ]
    // })

    // sending initial data to the database 
    // slider.create([
    //     {
    //     title: "Fast Food",
    //     subTitle: "Fast food is tasty but eat it in in limited quantity because it is dangerous for health",
    //     imageUrl: "/static/images/slide1.jpg"
    //     } ,
    //     {
    //     title: "Healthy Food",
    //     subTitle: "Eat healthy food because it is rich in minerals, vitamin, fibers, calcium,etc.",
    //     imageUrl: "/static/images/slide2.jpg"
    //     } ,
    //     {
    //     title: "Light Food",
    //     subTitle: "You should eat light food because it improve your intestine and digestion activity.",
    //     imageUrl: "/static/images/slide3.jpg"
    //     } 
    // ])

    // sending initial data to the database
    // service.create([
    //     {
    //         icon:"fa-solid fa-utensils",
    //         title:"Chinese Food",
    //         description:"We provide different types of chinese food likes chilli potato, manchurian,   chaomin, momos, spring roles, etc.",
    //         linkText:"Check",
    //         link:"https://www.google.com",
    //     },
    //     {
    //         icon:"fa-sharp fa-solid fa-cookie-bite",
    //         title:"Italian Food",
    //         description:"We provide different types of chinese food likes chilli potato, manchurian,   chaomin, momos, spring roles, etc.",
    //         linkText:"Go to",
    //         link:"https://www.facebook.com",
    //     },
    //     {
    //         icon:"fa-sharp fa-solid fa-cookie-bite",
    //         title:"Indian Food",
    //         description:"We provide different types of chinese food likes chilli potato, manchurian,   chaomin, momos, spring roles, etc.",
    //         linkText:"Learn",
    //         link:"https://www.youtube.com",
    //     },
    // ])

    //initial data for about section
    // about.create({
    //     title:"About Us",
    //     para:"this is our site where we provide different categories of food. Our chiefs are hygenic and make food with lots of love. Our first service is to fill our customer stomach with lots of love and tasty food.",
    //     linkText:"Contact Us"
    // })
});


app.listen(port, ()=>{
    console.log("app is ready to work");
})