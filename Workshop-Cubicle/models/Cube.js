const fs = require("fs")
const path = require("path");
const database = require("../config/database.json");

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

   static save(cube){
    database.cubes.push(cube);
    const jsonData = JSON.stringify(database);
    console.log(jsonData);
    fs.writeFileSync(path.resolve(__dirname, "../config/database.json"), jsonData)//
   }
}

module.exports = Cube;
