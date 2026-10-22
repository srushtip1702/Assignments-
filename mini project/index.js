
console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Function to get valid product input
function getNewProduct() {
    const nameInput = prompt("Enter the new product name:");
    
    if (nameInput === null || nameInput.trim() === "") {
        console.log("Invalid or missing product name. No product added.");
        return null;
    }

    const priceInput = prompt("Enter the product price:");
    
    if (priceInput === null || priceInput.trim() === "") {
        console.log("Invalid or missing price. No product added.");
        return null;
    }

    const price = Number(priceInput);

    if (!Number.isFinite(price) || price < 0) {
        console.log("Invalid price. Please enter a non-negative number.");
        return null;
    } else {
        return {
            name: nameInput.trim(),
            price: price
        };
    }
}

// Add user-entered product
const newProduct = getNewProduct();

if (newProduct !== null) {
    inventory.push(newProduct);
    console.log(
        `[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`
    );
}

// Arrow function to assign category using switch
const getCategory = (price) => {
    switch (true) {
        case price < 100:
            return "Budget";
        case price < 500:
            return "Standard";
        default:
            return "Premium";
    }
};

// Function to calculate total inventory value
function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        if (typeof item.price !== "number" || !Number.isFinite(item.price)) {
            continue;
        }

        total += item.price;
    }

    return total;
}

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((item) => {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
    );
});

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

// Filter affordable products
const affordableItems = inventory.filter((item) => item.price < 200);
console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableItems.map((item) => item.name))
);

// Create formatted report using map()
const report = inventory.map(
    (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", JSON.stringify(report));

// Example of custom discount and tax parameters
const calculateFinalPrice = (price, discount = 0, tax = 0) => {
    const discountedPrice = price * (1 - discount / 100);
    return discountedPrice * (1 + tax / 100);
};

console.log(
    "Laptop price with 10% discount and 5% tax:",
    `$${calculateFinalPrice(800, 10, 5).toFixed(2)}`
);
