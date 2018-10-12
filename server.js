var express = require("express");

var app = express();

const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log("app is running at " + port );
});

app.get("/" , (req, res)=>{
    res.send("Hello express");
});