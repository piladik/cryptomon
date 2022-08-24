const express = require("express");
const app = express();
const port = 1234;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs"); // By default our templates need to be in "views" directory (it can be changed with app.set)
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/search", (req, res) => {
    res.render("search.ejs")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
