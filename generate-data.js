const fs = require("fs");
const faker = require("faker");

console.log(generateCategories);

// Set locale to use English
faker.locale = "en";

// Random Categories
function generateCategories(n) {
  if (n <= 0) return [];
  const categoryList = [];
  for (let i = 0; i < n; i++) {
    const category = {
      id: faker.random.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    categoryList.push(category);
  }
  return categoryList;
}

// Randome Products
function generateProducts(categoryList, numberOfProduct) {
  const productList = [];
  for (const category of categoryList) {
    for (let i = 0; i < numberOfProduct; i++) {
      const product = {
        categoryId: category.id,
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: Number.parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        thumbnailUrl: faker.image.imageUrl(400, 400),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      productList.push(product);
    }
  }
  return productList;
}

// random data
(() => {
  const categoryList = generateCategories(4);
  const productList = generateProducts(categoryList, 10);
  const db = {
    categories: categoryList,
    products: productList,
    profile: {},
  };

  // Write db Object to db.json file
  fs.writeFile("./db.json", JSON.stringify(db), successfullCallback);

  function successfullCallback() {
    console.log("Generate data successfully");
  }
})();
