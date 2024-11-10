const express = require("express");
const app = express();
 
const port = process.env.PORT || 8080;
const path = require('path');
//  const cookieParser=require('cookie-parser');
 
 





//set view engin and path of view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended:  true }));
app.use(express.json());

//basicpage render
app.get("/basic", (req, res) => {
    console.log("req received from basic page");
    
    res.render("basic.ejs");
});


app.get("/lecture", (req, res) => {
    console.log("req received from lecture page");
    
    res.render("lecture.ejs");
});



app.get("/note", (req, res) => {
    console.log("req received from basic page");
    
    res.render("note.ejs");
});



app.get("/previous", (req, res) => {
    console.log("req received from basic page");
    
    res.render("previous.ejs");
});


 

 
 
 
  
  
//signup render
 

//reset password render










app.listen(port, () => {
    console.log(`server is listening port no. is ${port}`);
})

