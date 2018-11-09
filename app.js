var express=require("express");
var app=express();
app.get("/",function(req,res){
res.send("this will be our landing page soon!")
});
app.listen(3000,function()
{
console.log("the yelp project has started");
});