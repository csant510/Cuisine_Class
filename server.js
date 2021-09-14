const express = require("express"),
    app = express();
//controlers
homeController = require("./controllers/homeController");
layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json()); 
//app.use(layouts);
app.use(express.static("public"));


//routes
app.get("/", (req,res) =>{
        res.send("Welcome to Cusine Class!");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);



app.listen(app.get("port"), ()=> {
    console.log(`Sever running at http://localhost:${app.get("port")}`);
});