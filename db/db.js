const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_URL;

if(!dbUrl) {
    console.error('Mongo url not set in env file');
    return new Error('Mongo url not set in env file');
}

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
}, err =>{
    if(err) {
        console.error(`failed to connect mongoose ${err}`);
    }else {
        console.log(`connected to db server`);
    }
});

module.exports = mongoose;