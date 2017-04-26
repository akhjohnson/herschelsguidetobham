'use strict'
const vision = require('./index')
// Must Add var require("googlecloud")
// init with auth
vision.init({auth: '346993894176-4mnc5optl7vtv1mdu93c8b7f27kqghl1.apps.googleusercontent.com'})
// construct parameters
// 1st image of request is load from local
const req1 = new vision.Request({
  image: new vision.Image({
    path: '/upload'
  }),
  features: [
    new vision.Feature('FACE_DETECTION', 4),
    new vision.Feature('LABEL_DETECTION', 10),
  ]
})
// 2nd image of request is load from Web
const req2 = new vision.Request({
  image: new vision.Image({
    url: 'https://scontent-nrt1-1.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12353236_1220803437936662_68557852_n.jpg'
  }),
  features: [
    new vision.Feature('FACE_DETECTION', 1),
    new vision.Feature('LABEL_DETECTION', 10),
  ]
})
// send multi requests by one API call
vision.annotate([req1, req2]).then((res) => {
  // handling response for each request
  console.log(JSON.stringify(res.responses))
}, (e) => { 
  console.log('Error: ', e)
})