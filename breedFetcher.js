
const needle = require("needle");

// create a function request

const fetchBreedDescription = (breedName, callback) => {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error); // Print the error if one occurred
      return;
    }
    
    if (body.length < 1) {
      callback("Cat not found");
      return;
    }
    
    const cat = body[0];
    callback(null, cat.description);
  });
};



// const args = process.argv.slice(2);
// const search = args[0];
// fetchBreedDescription(search);



module.exports = { fetchBreedDescription };