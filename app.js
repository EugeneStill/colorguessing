var  express = require("express"),
     app = express(),
     bodyParser = require("body-parser");
    

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//REQUIRING ROUTES     
var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Home Page Has Started!");
});