var AWS = require('aws-sdk');
var fs = require('fs');
var formidable = require('formidable');

const s3 = new AWS.S3({
    accessKeyId: "AKIAS35HU4QAVZF3OYE4",
    secretAccessKey: "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"
});

const fileName = 'aaaa.txt';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'mynews3bucket33', // pass your bucket name
         Key: 'aaaa.txt', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

uploadFile();