
const needle = require("needle");

// create a function request

const fetchBreedDescription = (breedName) => {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }
    
    if (body.length < 1) {
      console.log("Cat not found");
      return;
    }
    
    const cat = body[0];
    console.log(cat.description);
  });
  
  
  
  
};



const args = process.argv.slice(2);
const search = args[0];
fetchBreedDescription(search);