const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
        default: new Date()
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta'],
        required: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    depart: {
        type: Date,
        default: function() {
            const aYearFromNow = new Date();
            aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
            return aYearFromNow;
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);