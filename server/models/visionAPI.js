var vision = require('@google-cloud/vision');//ADD TO INDEX.JS

var visionClient = vision({
  projectId: 'api-project-346993894176',
  keyFilename: '/path/to/keyfile.json'//make path to config.json
});
 
// Read the text from an image. 
visionClient.detectText('./image.jpg', function(err, text) {
  text = [ 
    'This was text found in the image', 
    'This was more text found in the image' 
  ] 
});

vision.detectText('image.jpg', function(err, text, apiResponse) {
  // text = [
  //   'This was text found in the image'
  // ]
});