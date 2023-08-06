const express = require('express');
var bcrypt = require('bcryptjs');
const router = express.Router()
const  {addUser}  = require('../controllers/user.js')

router.post("/signup", async (request, response) => {
    try {
        const userOne = request.body;
        const salt = await bcrypt.genSalt(10);
        //Bcrypt Create
        const hashedPassword = await bcrypt.hash(request.body.password, salt);
        //Body
        const hashedUser = await { ...request.body, password: hashedPassword };
        console.log(hashedUser);
        const result = await addUser(hashedUser);
        return response
            .status(201)
            .json(result)


    } catch (error) {
        console.log(error);
        response
            .status(500)
            .json({ Message: "Internal Server Error" })
    }
})

router.post("/login", (request, response) => {
    try {
        const userOne = request.body
        response.send({ data: userOne })
    } catch (error) {
        console.log(error);
        response
            .status(500)
            .json({ Message: "Internal Server Error" })
    }
})


module.exports = router