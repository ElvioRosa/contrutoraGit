const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ObraSchema = new Schema({
    name: {type: String},
    type: {type: String},
    status: {type: String},
    dateStart: {type: Date},
    dateEnd: {type: Date}
});


// Export the model
module.exports = mongoose.model('Obra', ObraSchema);