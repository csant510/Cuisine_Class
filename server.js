const express = require("express"),
    app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req,res) =>{
        res.send("Welcome to Cusine Class!");
});

app.listen(app.get("port"), ()=> {
    console.log(`Sever running at http://localhost:${app.get("port")}`);
});