const aws = require('aws-sdk');
const AmazonS3URI = require('amazon-s3-uri');

const ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
const ACCESS_ID = process.env.S3_ACCESS_KEY;
 
aws.config.update({
    secretAccessKey: ACCESS_KEY,
    accessKeyId: ACCESS_ID,
    region: 'ap-southeast-1'
})
const s3 = new aws.S3();


const file_delete = (props) => {
    const {region, bucket, key} = AmazonS3URI(props);

    var params = {
        Bucket : bucket,
        Key : key
    }

    s3.deleteObject(params, function(err, data) {
        if (err) console.log(err, err.stack);  // error
        else     console.log();                 // deleted
        return data;
    }).promise();
}

module.exports = file_delete;