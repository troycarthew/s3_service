//required libraries
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var config = require('../../config.json');

exports.deleteFile = function(key){
    return s3.Object(config.S3_UPLOADS_BUCKET_NAME, key).delete();
};