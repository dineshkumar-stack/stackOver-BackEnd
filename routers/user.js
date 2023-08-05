const express = require('express');
const router = express.Router()


router.post("/signup", (request, response) => {
    try {
        const user = request.body
        response.send({ data: user })
    } catch (error) {
        console.log(error);
        response
        .status(500)
        .json({Message:"Internal Server Error"})
    }
})


router.post("/login", (request, response) => {
    try {
        const user = request.body
        response.send({ data: user })
    } catch (error) {
        console.log(error);
        response
        .status(500)
        .json({Message:"Internal Server Error"})
    }
})


module.exports = router