const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) =>{
    // res.send("Welcome John Doe");
    res.render("home");
})

//Set Template Engine
app.use(expressLayout);
app.set('views',path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.listen(PORT , ()=> {
    console.log(`Driving on port ${PORT}`);
});