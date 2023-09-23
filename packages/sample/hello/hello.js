//returning a static JSON file as a response Body 

function main(args) {
  const responseData = {
    statusCode : 200,
    headers : {
      'content-type' : 'application/json'
    },
    body : {
      "name": "abheek"
    }
  }  

  return responseData
}

exports.main = main;
