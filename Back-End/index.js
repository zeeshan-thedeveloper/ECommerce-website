const express = require('express');
const path = require("path");
const app = express();
var cookieParser = require('cookie-parser');
const routes = require("./routes/routes")
const db = require('./database-connector/database-connector')
var cors = require('cors');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.status(200).send("This is basic template.");
});

app.use(cors());
app.use("/db-api",routes);
//Replace with your.

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
