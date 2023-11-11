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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(cookieParser());

app.use(express.json());

app.use("/user", user);
app.use("/project", projects);
app.use("/transaction", transactions);

app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000!");
});