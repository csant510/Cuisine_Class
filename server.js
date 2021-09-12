const express = require("express"),
    app = express();
//controlers
homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());

app.get("/", (req,res) =>{
        res.send("Welcome to Cusine Class!");
});

app.listen(app.get("port"), ()=> {
    console.log(`Sever running at http://localhost:${app.get("port")}`);
});