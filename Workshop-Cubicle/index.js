const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./config/routes");
const config = require("./config/config");
const authMiddleware = require("./middleware/authMiddleware");
const setupViewEngine = require("./config/viewEngine");
const DB = require("./config/database");

const app = express();
setupViewEngine(app);

app.use(express.static("./static"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware.authentication);
app.use(routes);

DB()
    .then(() =>
        app.listen(config.port, () =>
            console.log(`Server is running on port ${config.port}...`),
        ),
    )
    .catch((err) => console.error(err.message));
