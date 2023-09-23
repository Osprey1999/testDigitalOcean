//returning a static JSON file as a response Body 

function main(args) {
    const fs = require("fs");

    //reading the json file using fs 
    fs.readFile("sample.json", (error,data)=>{
      if(error){
        console.error(error);
        return;
      }

      //parse the json data
      let jsonData  = JSON.parse(data);

      //response 
      const responseData = {
          statusCode : 200,
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(jsonData)  //converting the jsonData into JSON
      }

      //printing the JSON response into the console
      console.log(responseData);

      return(responseData);
    })
    

  }

const _main = main;
