function filterByCity(targetCity, listingCityArray) {
  let indices = [];
  for (let i = 0; i<listingCityArray.length; i++) {
    if (listingCityArray[i] == targetCity) {
      indices.push(i);
    }
  }
  return indices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  // return [...listingPriceArray.keys()]
  let indices = [];
  for (let i = 0; i<listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      indices.push(i);
    }
  }
  return indices;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  // return [...listingTypeArray.keys()]
    let indices = [];
    for (let i = 0; i<listingTypeArray.length; i++) {
      for (let j = 0; j<targetTypes.length; j++) {
        if (listingTypeArray[i] == targetTypes[j]) {
          indices.push(i);
          break;
        }
      }
    }
    return indices;
}