const Cube = require("../models/Cube");
const User = require("../models/User");

exports.getHomePage = async (req, res) => {
    const { search, from, to } = req.query;
    let cubes = await Cube.find().lean();

    if (search) {
        cubes = cubes.filter((cube) =>
            cube.name.toLowerCase().includes(search.toLowerCase()),
        );
    }

    if (from) {
        cubes = cubes.filter(
            (cube) => Number(cube.difficultyLevel) >= Number(from),
        );
    }

    if (to) {
        cubes = cubes.filter(
            (cube) => Number(cube.difficultyLevel) <= Number(to),
        );
    }
    console.log(cubes, req.user);

    res.render("index", { cubes, search, from, to });
};

exports.getAboutPage = (req, res) => {
    res.render("about");
};

exports.getErrorPage = (req, res) => {
    res.render("404");
};
