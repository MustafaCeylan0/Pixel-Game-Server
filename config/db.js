const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;