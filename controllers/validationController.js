const Joi = require('joi');

const registerValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(2).max(255).required(),
		email: Joi.string().max(255).email().required(),
		password: Joi.string().min(8).max(1024).required(),
	});

	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(2).max(255).required(),
		password: Joi.string().min(8).max(1024).required(),
	});

	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
