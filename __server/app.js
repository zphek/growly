const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const user = require("./api/routes/user.routes");
const projects = require("./api/routes/projects.routes");
const transactions = require("./api/routes/transaction.routes");

app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(cookieParser());

app.use(express.json());

app.use("/user", user);
app.use("/project", projects);
app.use("/transaction", transactions);

app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000!");
});