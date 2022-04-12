//Itas almst the summer sales.
//you work for a shop that wishes to give a discount to the most expensive item purchased by given customer
//during the sales period. only one product can benifit from the discount.
//you are tasked by the shop owner to implement the function calculateTotalPrice(prices,discount)which takes the list of prices of the products.
//purchased by tthe customer and the percentage discount as a parameter and return the total purchase price as an integer(rounded down if the total is a float number)
//constraints:
//0 <= discount <= 100
//0 < price of product < 100000
//0 < number of products < 100

//sample input:
// prices= [100,400,200]
//discount= 20%

//sample output:
//620

function calculateTotalPrice(prices, discount) {
   if(prices.length === 0) return 0;
   let expensive = 0;
  prices.sort((a, b) => a - b);
  let totalSum = 0;
  expensive = prices[prices.length - 1] - prices[prices.length - 1] * discount / 100;
    for (let i = 0; i < prices.length; i++) {
        totalSum += prices[i];
        totalSum += expensive;
    }
   
    if(Math.abs(totalSum - Math.floor(totalSum)) > 0) {
        return Math.floor(totalSum);

    }
    return totalSum;
}

console.log(calculateTotalPrice([100, 400, 200], 20));