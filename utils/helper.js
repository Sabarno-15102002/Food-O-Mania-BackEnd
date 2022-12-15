const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({
    limits: 1000000,
    fileFilter(req, file, cb) {
        if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|bmp|BMP)$/)) {
            cb(undefined, true);
        }
        else {
            cb(new Error("Please upload only jpg, jpeg or png files"));
            cb(undefined, false);
        }
    }, storage
});

module.exports = {upload};