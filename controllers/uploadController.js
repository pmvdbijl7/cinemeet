const multer = require('multer');
const path = require('path');

// Set Uploads Folder
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/uploads');
	},
	filename: (req, file, cb) => {
		console.log(file);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

// Make File Filter
const fileFilter = (req, file, cb) => {
	if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

// Set Upload Options
const upload = multer({ storage: storage, fileFilter: fileFilter });

exports.uploadProfilePicture = upload.single('avatar');
