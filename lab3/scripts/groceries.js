// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "Corn",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
  },
  {
    name: "Frozen Chicken Broccoli Cheese Cutlet",
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 15.0,
  },
  {
    name: "Frozen Alaskan Sole",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 20.99,
  },
  {
    name: "Peanut Butter (2kg)",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 10.88,
  },
  {
    name: "Jam",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 5.99,
  },
  {
    name: "Spring Mix",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 3.99,
  },
  {
    name: "Frozen Buffalo Chicken Wings",
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 20.0,
  },
  {
    name: "Blueberry Muffins",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 9.99,
  },
  {
    name: "Chicken Breasts",
    vegetarian: false,
    glutenFree: true,
    organic: true,

    price: 30.0,
  },
  {
    name: "Panini Ham",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 9.99,
  },
  {
    name: "Rotisserie Chicken",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 7.99,
  },
  {
    name: "Broccoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "Bread",
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 2.35,
  },
  {
    name: "Salmon",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 10.0,
  },
];

function compareByPrice(p1, p2) {
  return p1.price - p2.price;
}

products.sort(compareByPrice);


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (prods[i].organic && organic == "NonOrganic") {
      continue
    } else if (!prods[i].organic && organic == "Organic") {
      continue
    }
    if (restriction == "Vegetarian" && prods[i].vegetarian == true) {
      product_names.push(prods[i]);
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {
      product_names.push(prods[i]);
    } else if ((restriction == "GFVeg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)) {
      product_names.push(prods[i]);
    } else if (restriction == "None") {
      product_names.push(prods[i]);
    }

  }
  console.log(product_names)
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}


function getProductPriceByName(name) {
  try {
    return products.filter((element) => { return name === element['name'] })[0].price;
  }
  catch {
    return 0;
  }
}