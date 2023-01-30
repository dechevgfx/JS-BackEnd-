const fs = require("fs");
const path = require("path");
const database = require("../config/database.json");

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    static save(cube) {
        if (database.cubes.length == 0) {
            cube.id = 1;
        } else {
            cube.id = database.cubes[database.cubes.length - 1].id + 1;
        }
        database.cubes.push(cube);
        const jsonData = JSON.stringify(database);
        fs.writeFileSync(
            path.resolve(__dirname, "../config/database.json"),
            jsonData,
        ); //
    }
}

module.exports = Cube;
