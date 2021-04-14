var express = require('express');
var bodyParser = require('body-parser');
const img_upload = require('../services/img-upload');
const pdf_upload = require('../services/pdf-upload');
const file_delete = require('../services/file-delete');
var router = express.Router();


const singleImgUpload = img_upload.single('image');
const singlePdfUpload = pdf_upload.single('transcript');

router.post('/img-upload', function(req, res) {
    singleImgUpload(req, res, function(err) {
        
        if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}]})
        }

        return res.json({'imageUrl': req.file.location});
    });
});


router.post('/pdf-upload', function(req, res) {
    singlePdfUpload(req, res, function(err) {
        if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}]})
        }

        return res.json({'transcriptUrl': req.file.location});
    });
});

router.delete('/deletefile', (req, res, next)=> {
    try {
        file_delete(req.query.url);
        res.send("found");
    }catch(err) {
        console.log(err);
    }
});



module.exports = router;