const { mongo } = require("mongoose");

const express = require("express"),
  app = express(),

  //controllers
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/confetti_cusine",
  {useNewUrlParser: true});
  
  //this wiill be taking out later
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
  });

  //for promises
  mongoose.Promise = global.Promise;
  

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

//routes 
app.get("/", (req, res) => {
  res.render("index");
});


app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);


//error handlig rotues
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
