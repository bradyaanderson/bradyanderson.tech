var express   = require("express"),
    app       = express();

// sets view engine as ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// routes
app.get("/*", function(req,res){
    res.render("index");
});

app.get("/", function(req,res){
    res.render("index");
});


// start listener
app.listen(process.env.PORT, process.env.IP, function(){
	   console.log("Server started");
	});
