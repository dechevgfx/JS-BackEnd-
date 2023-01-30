const express = require("express");
const config = require("./config/config");

const setUpViewEngine = require("./config/viewEngine");

const app = express();
setUpViewEngine(app)

app.use(express.static("./static"))

app.get("/", (req, res) => {
    res.render("index", { layout: false });
});
app.listen(
    config.development.port,
    console.log(`Listening on port ${config.development.port}! Now its up to you...`),
);
