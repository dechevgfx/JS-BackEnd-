const Cube = require("../models/Cube");
const database = require("../config/database.json");
exports.getCreateCube = (req, res) => {
    res.render("create");
};
exports.postCreateCube = (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.save(cube); //
    res.redirect("/");
};

exports.detailsCube = (req, res) => {
    let cubeId = Number(req.params.cubeId);
    if (!cubeId) {
        return res.redirect("/404");
    }
    let cube = database.cubes.find((x) => x.id == cubeId);
    if (!cube) {
        return res.redirect("/404");
    }

    res.render("details", {cube})
};
