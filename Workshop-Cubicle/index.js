const database = require("./config/database");

const express = require("express");

const config = require("./config/config");
const routes = require("./config/routes");
const setUpViewEngine = require("./config/viewEngine");

const app = express();
setUpViewEngine(app);

app.use(express.static("./static"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

database()
    .then(() =>
        app.listen(
            config.port,
            console.log(
                `Listening on port ${config.port}! Now its up to you...`,
            ),
        ),
    )
    .catch((err) => console.log(err));
