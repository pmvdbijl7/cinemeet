const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema(
	{
		avatar: {
			type: Buffer,
			contentType: String,
		},
		username: {
			type: String,
			minLength: 2,
			maxLength: 255,
			required: true,
			unique: true,
			uniqueCaseInsensitive: true,
		},
		email: {
			type: String,
			maxLength: 255,
			required: true,
			unique: true,
			uniqueCaseInsensitive: true,
		},
		password: {
			type: String,
			minLength: 8,
			maxLength: 1024,
			required: true,
		},
		name: {
			type: String,
			minLength: 2,
			maxLength: 255,
		},
		biography: {
			type: String,
			maxLength: 512,
		},
	},
	{ timestamps: true }
);

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
