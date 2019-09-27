const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const uuidv1 = require('uuid/v1');

//var currentDate = new Date();

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}

// Creates Sessions Schema
const sessionsSchema = new Schema({
    sessionId: { // Session ID
        type: String
        //default: uuidv1()
    },
    dateStart: { // Date Session Started
        type: String,
        default: getDateTime() //YYYY:MM:DD:HH:MM
        
    },
    professorId: { // ID of Professor Host
        type: String,
        required: true
    },
    
});

module.exports = sessions = mongoose.model('sessions', sessionsSchema);

