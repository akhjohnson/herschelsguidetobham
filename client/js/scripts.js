
// var express = require("express");
// var vision = gcloud.vision();
// var fs = require("fs"),

//     json;

$("#myFileField").on('click', function(){
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
 
    var files = [];
    
function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'base64';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}
console.log(JSON.stringify(response, null, 2));
})
