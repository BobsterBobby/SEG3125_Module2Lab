	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli 1.99$",
		vegetarian: true,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread 2.35$",
		vegetarian: true,
		glutenFree: false,
		sugarFree: false,
		lactoseFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "baguette 3.15$",
		vegetarian: true,
		glutenFree: false,
		sugarFree: false,
		lactoseFree: true,
		organic: false,
		price: 3.15
	},
	{
		name: "7UP 7.11$",
		vegetarian: true,
		glutenFree: true,
		sugarFree: false,
		lactoseFree: true,
		organic: false,
		price: 7.11
	},
	{
		name: "dozen eggs 8.99$",
		vegetarian: false,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 8.99
	},
	{
		name: "salmon 10.00$",
		vegetarian: false,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "lady's fingers 14.40$/g",
		vegetarian: true,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 14.40
	},
	{
		name: "coffee beans 15.50$",
		vegetarian: true,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 15.50
	},
	{
		name: "dairy & sugar free cake 29.99$",
		vegetarian: false,
		glutenFree: false,
		sugarFree: true,
		lactoseFree: true,
		organic: false,
		price: 29.99
	},
	{
		name: "sugar free candy pack 54.05$",
		vegetarian: false,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: false,
		organic: false,
		price: 54.05
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (isElemOf (prods[i], product_names)){
			//ignore duplicates
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "SugarFree") && (prods[i].sugarFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function isElemOf (prod, prodsList){
	for (let i=0; i<prodsList.length; i+=1) {
		if (prod.name == prodsList[i].name){
			return true;
		}
	}
	return false;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}