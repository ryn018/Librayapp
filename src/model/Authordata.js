const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ryn:ryn@cluster0.2acskxk.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    book: String,
    dob: String,
    image: String
 });
 
 var Authordata = mongoose.model('authordata',AuthorSchema);
 
 module.exports = Authordata;
 