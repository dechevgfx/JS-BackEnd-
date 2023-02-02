const config = {
    development: {
        port: process.env.PORT || 3000,
        DB_URI: "mongodb://localhost:27017/crypto",
        SECRET: 'SOMEPRODSECRET',
    },
    production: {
        port: process.env.PORT || 4200,
        DB_URI: "mongodb://localhost:27017/crypto",
        SECRET: 'SOMEPRODSECRET',
    },
};
module.exports = config[process.env.node_env || "development"];
