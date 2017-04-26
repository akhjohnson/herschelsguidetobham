var config = {
  projectId: 'api-project-346993894176',
  keyFilename: '/server/keyfile.json'
};
 
var datastore = require('@google-cloud/datastore')(config);
var storage = require('@google-cloud/storage')(config);