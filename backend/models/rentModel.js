const {Schema, model} = require('../connection');

const myschema = new Schema({
    propertyname : String,
    propertytype : String,
    facilities : String,
    rentprice : Number,
    address : String,
    image : String,
});

module.exports = model( 'rent', myschema );