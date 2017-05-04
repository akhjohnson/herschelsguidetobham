// 'use strict'
// const vision = require('./index')
// // init with auth
// vision.init({auth: '346993894176-4mnc5optl7vtv1mdu93c8b7f27kqghl1.apps.googleusercontent.com'})
// // construct parameters
// const req = new vision.Request({
//   image: new vision.Image('/upload/test1.jpg'),
//   features: [
//     new vision.Feature('FACE_DETECTION', 4),
//     new vision.Feature('LABEL_DETECTION', 10),
//   ]
// })
// // send single request
// vision.annotate(req).then((res) => {
//   // handling response
//   console.log(JSON.stringify(res.responses))
// }, (e) => { 
//   console.log('Error: ', e)
// })