const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const dotenv = require('dotenv').config();

const ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
const ACCESS_ID = process.env.S3_ACCESS_KEY;
 
aws.config.update({
    secretAccessKey: ACCESS_KEY,
    accessKeyId: ACCESS_ID,
    region: 'us-east-2'
})
const s3 = new aws.S3();
 
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid mime type, only PDF'), false);
  }
}


const pdf_upload = multer({
    fileFilter,
    storage: multerS3({
      s3: s3,
      bucket: 'it-project-pdf-2020',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: 'TESTING_PDF'});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString() + ".pdf")
      }
    })
  })

module.exports = pdf_upload;