const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Buenas tarde");
});

app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000!");
});