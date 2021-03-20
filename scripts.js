// alert('hello!')

let itemName = prompt("Please enter the name of the item:");
let basePrice = Number(prompt("What is the base price of the item?"));
let blackFriday = prompt("Is today Black Friday? Answer yes or no.");
let searchEngine = prompt("Did the purchaser find the item through a search engine? Answer yes or no.")
let compareSite = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.")
let message;
let finalPrice;

if (blackFriday === "yes") {
    message = "Since it's Black Friday, we will reduce the price by 25%. ";
    finalPrice = (basePrice - (basePrice * 0.25));
} else {
    message = "It's not Black Friday, so the price didn't change for that. ";
    finalPrice = basePrice
}

console.log(finalPrice)

if (searchEngine === "yes") {
    message += "We will increase the price by 1% to pay the search engine. ";
    finalPrice *= 1.01; 
} else {
    message += "The customer didn't use a search engine, so the price didn't change for that. "
    finalPrice = finalPrice
}

console.log(finalPrice)

if (compareSite === "yes") {
    message += "Since the customer visited a comparison-shopping site, we will reduce the price by 10%."
    finalPrice *= 0.9;
} else {
    message += "The customer didn't visit a comparison-shopping site, so the price didn't change for that."
    finalPrice = finalPrice
}

console.log(finalPrice)
finalPrice = finalPrice.toFixed(2);
console.log(finalPrice)

document.getElementById("message").innerHTML = `The base price for the ${itemName} is $${basePrice}. ${message} The final price is $${finalPrice}.`;
