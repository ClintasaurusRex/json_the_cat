
const { fetchBreedDescription } = require('./breedFetcher');


const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, catDescripton) => {
  if (error) {
    console.log("Breed not found", error);
    return;
  }
  console.log(catDescripton);
});


// const args = process.argv.slice(2);
// const search = args[0];
// fetchBreedDescription(search);
