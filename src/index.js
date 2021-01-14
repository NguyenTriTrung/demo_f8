const express= require("express");
const app= express();
const path= require("path");
const handerbars= require("express-handlebars");
const morgan=require("morgan");
const port=3000;
//app.get("/",(req,res)=>res.send("Hello World!"));
app.use(express.static(path.join(__dirname,"public")))

app.use(morgan("combined"));

app.engine(".hbs",handerbars({
    extname:".hbs"
}));

app.set("view engine",".hbs");

app.set("views",path.join(__dirname,"sources/views"));

app.get("/",(req,res)=>{
    res.render("home");
});
app.listen(port,()=> console.log(`Example app listening at http://localhost:${port}`));