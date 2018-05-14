const express = require("express");

const app = express();

app.get("/",(req,res)=>{
	var profile = {name:"Ankit"};
	res.send(profile);
})

app.listen(3000);