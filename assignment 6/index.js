
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// Using forEach() to print all products
console.log("-- All Products (forEach) --");

products.forEach((product) => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// Using filter() to find products priced below $50
console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter((product) => product.price < 50);

console.log(filteredProducts);

// Using map() to create formatted product tags
console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(
    (product) => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(productTags);
