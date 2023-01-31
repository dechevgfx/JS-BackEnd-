// const fs = require("fs");
// const path = require("path");
// const database = require("../config/database");

// class Cube {
//     constructor(name, description, imageUrl, difficultyLevel) {
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.difficultyLevel = difficultyLevel;
//     }

//     static save(cube) {
//         if (database.cubes.length == 0) {
//             cube.id = 1;
//         } else {
//             cube.id = database.cubes[database.cubes.length - 1].id + 1;
//         }
//         database.cubes.push(cube);
//         const jsonData = database;
//         fs.writeFileSync(
//             path.resolve(__dirname, "../config/database.json"),
//             jsonData,
//         ); //
//     }
// }

// module.exports = Cube;

const { Schema, model } = require("mongoose");

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        //add https
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
});

const Cube = model("Cube", cubeSchema);
module.exports = Cube;
