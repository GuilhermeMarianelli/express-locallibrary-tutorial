var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
	first_name: {type: String, required: true, max: 100},
	family_name: {type: String, required: true, max: 100},
	date_birth: {type: Date},
	date_death: {type: Date}
});

//Virtual for author's full name
AuthorSchema.virtual('name')
.get(function(){
	return this.family_name + ", " + this.first_name;
});

//virtual for author's URL
AuthorSchema.virtual('url')
.get(function(){
	return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author',AuthorSchema);

