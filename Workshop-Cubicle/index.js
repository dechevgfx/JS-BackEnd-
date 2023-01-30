const express = require("express");
const config = require("./config/config");
const routes = require("./config/routes");
const setUpViewEngine = require("./config/viewEngine");

const app = express();
setUpViewEngine(app);

app.use(express.static("./static"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(
    config.development.port,
    console.log(
        `Listening on port ${config.development.port}! Now its up to you...`,
    ),
);
