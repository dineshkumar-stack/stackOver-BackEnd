const Note = require("../models/Question");


const getRecentQ = async (req, res) => {
    try {
        const recentData = await Note.find().exec();
        res.status(200).json({ recentData });
    } catch (error) {
        console.error("Error fetching scores:", error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { getRecentQ }




