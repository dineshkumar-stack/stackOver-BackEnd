const client  = require("../mongo.js");
// const jwt = require("jsonwebtoken");

function addUser(userData) {
    return client
            .db("StackOverDB")
            .collection("usersOne")
            .insertOne(userData)
        
        .catch((error) => {
            console.error("Error connecting to the database:", error);
            throw error;
        });
}

// function getUser(email) {
//     return client
//         .db("StackOverDB")
//         .collection("usersOne")
//         .findOne({ email: email });
// }

// function generateToken(id) {
//     return jwt.sign(
//         { id },
//         process.env.SECRET_KEY,
//         { expiresIn: "30d" }
//     );
// }

console.log(client);

module.exports = {addUser}
