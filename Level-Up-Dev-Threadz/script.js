function showAllProducts(products) {
  // forEach
  products.forEach((product) => newProductCard(product));
}

function getFilteredProducts(productNames, query) {
  // filter
  let matches = productNames.filter((product) => product.toLowerCase() === query.toLowerCase())
  return matches
}

function getConvertedPrices(productPrices, currency) {
  // map
  if (currency === "usd") {
    return productPrices
  } else if (currency === "gbp") {
    let newPrices = productPrices.map((price) => price * 0.78)
    return newPrices
  } else if (currency === "jpy") {
    let newPrices = productPrices.map((price) => price * 153.74)
    return newPrices
  } else {
    alert("Invalid value for currency")
    return undefined
  }
}

function getCartTotal(cartPrices) {
  // reduce
  // template and variable names same as from MDN example
  let initialValue = 0;
  let sumPrice = cartPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  return sumPrice
}

showAllProducts(PRODUCTS);
