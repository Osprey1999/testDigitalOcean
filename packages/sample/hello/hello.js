//returning a static JSON file as a response Body 

function main(args) {

  const jsonFile = require('./sample.json')

  const responseData = {
    statusCode : 200,
    headers : {
      'content-type' : 'application/json'
    },
    body : {
      "name": "abheek",
      "data": jsonFile
    }
  }  

  return responseData
}

exports.main = main;
