// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "Clementine",
    category: 'f',
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 2.99,
    imgSrc: "imgs/clementine.png"
  },
  {
    name: "Corn",
    category: 'v',
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
    imgSrc: "imgs/corn.jpg"
  },
  {
    name: "Frozen Chicken Broccoli Cheese Cutlet",
    category: 'm',
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 15.0,
    imgSrc: "imgs/cbc.png"
  },
  {
    name: "Milk 2%",
    category: 'd',
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 2.99,
    imgSrc: "imgs/milk.png"
  },
  {
    name: "Frozen Alaskan Sole",
    category: 'm',
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 20.99,
    imgSrc: "imgs/sole.png"
  },
  {
    name: "Peanut Butter (2kg)",
    category: 'o',
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 10.88,
    imgSrc: "imgs/peanut_butter.webp"
  },
  {
    name: "Jam",
    category: 'o',
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 5.99,
    imgSrc: "imgs/jam.jpg"
  },
  {
    name: "Spring Mix",
    category: 'v',
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 3.99,
    imgSrc: "imgs/spring_mix.jpg"
  },
  {
    name: "Frozen Buffalo Chicken Wings",
    category: 'm',
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 20.0,
    imgSrc: "imgs/frozen_buffalo_chicken_wings.jpg"
  },
  {
    name: "Blueberry Muffins",
    category: 'o',
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 9.99,
    imgSrc: "imgs/muffins.jpg"
  },
  {
    name: "Chicken Breasts",
    category: 'm',
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 30.0,
    imgSrc: "imgs/chicken_breasts.jpg"
  },
  {
    name: "Cookie Dough Ice Cream",
    category: 'd',
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 2.99,
    imgSrc: "imgs/icecream.jpg"
  },
  {
    name: "Panini Ham",
    category: 'm',
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 9.99,
    imgSrc: "imgs/panini_ham.jpg"
  },
  {
    name: "Rotisserie Chicken",
    category: 'm',
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 7.99,
    imgSrc: "imgs/rotisserie_chicken.jpg"
  },
  {
    name: "Broccoli",
    category: 'v',
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
    imgSrc: "imgs/broccoli.png"
  },
  {
    name: "Bread",
    category: 'o',
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 2.35,
    imgSrc: "imgs/bread.jpg"
  },
  {
    name: "Salmon",
    category: 'm',
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 10.0,
    imgSrc: "imgs/salmon.jpg"
  },
];

function compareByPrice(p1, p2) {
  return p1.price - p2.price;
}

products.sort(compareByPrice);


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic, minPrice, maxPrice) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (prods[i].organic && organic == "NonOrganic") {
      continue
    } else if (!prods[i].organic && organic == "Organic") {
      continue
    }
    if (restriction == "Vegetarian" && prods[i].vegetarian == true) {

      if(prods[i].price >= minPrice && prods[i].price <= maxPrice){
        product_names.push(prods[i]);
      }    
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {

        if(prods[i].price >= minPrice && prods[i].price <= maxPrice){
          product_names.push(prods[i]);
        } 
    } else if ((restriction == "GFVeg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)) {

        if(prods[i].price >= minPrice && prods[i].price <= maxPrice){
          product_names.push(prods[i]);
        } 
    } else if (restriction == "None") {

        if(prods[i].price >= minPrice && prods[i].price <= maxPrice){
          product_names.push(prods[i]);
        } 
    }

  }
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