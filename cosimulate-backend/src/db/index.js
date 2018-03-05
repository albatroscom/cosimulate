const mongoose = require('mongoose');

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function () {
    mongoose.Promise = global.Promise;

    return {
        connect () {
            // MongoDB Configuration
            mongoose.connect(mongoURI).then(
                () => {
                    console.log('Succesfully connected to mongodb!!');
                }
            ).catch(e => {
                console.error(e);
            });
        }
    };
})();