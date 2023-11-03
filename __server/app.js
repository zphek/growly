const express = require("express");
const app = express();
const user = require("./api/routes/user.routes");
const projects = require("./api/routes/projects.routes");

app.use(express.json());
app.use("/user", user);
app.use("/project", projects);

app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000!");
});