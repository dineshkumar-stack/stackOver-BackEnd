const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;


mongoose.set('strictQuery', false);


const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    company: String,
    password: String,
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

// Create model

// const User = mongoose.model('User', userSchema, 'users');


//cleanup__

// Store to DB
// Create object

// const user = new User({
//     userName: "starjlkDinesh",
//     email: "Stardinewh@Star.com",
//     company: "star",
//     password: "kjhbasdkfbag",
// })
// store confirm,

// user.save()
//     .then(result => {
//         console.log("Data stored");
//         mongoose.connection.close();
//     });

// GEt all datas,

// User.find({}, {})
//     .then((users) => {
//         users.forEach((user) => {
//             console.log(user);
//         });
//         mongoose.connection.close();
//     })


userSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject._v
    }
});




module.exports = mongoose.model('User', userSchema);