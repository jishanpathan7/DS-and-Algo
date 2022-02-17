//Lets buy some houses.
//You just won a lottery and you want to spend some money. So, you want to buy some houses.
//
//To buy two houses, you need to buy the road connecting those two houses. Now, you are given the list of roads, bought by you.
//you need to tell how many houses will you end up buying ?

// Input:
//Input format:
// First line contains an integer T, denoting the number of test cases. 
// The first line of each test case contains an integer E, denoting the number of roads.
//  The next E lines contain two space separated integers X and Y, denoting that there is a road between house X and house Y.

//Output format:
//For each test case, print the number of houses you will end up buying.


//Input:
//1
//3
//1 2
//2 3
//1 3
//Output:
//3
//Explanation:
//You can buy the first house by buying the road between 1 and 2.
//You can buy the second house by buying the road between 2 and 3.
//You can buy the third house by buying the road between 1 and 3.
//So, you will end up buying 3 houses.

function buyHouses(roads) {
  let houses = 0;
  let visited = new Set();
  
  for(let road of roads) {
    let [house1, house2] = road;
    
    if(!visited.has(house1)) {
      houses++;
      visited.add(house1);
    }
    
    if(!visited.has(house2)) {
      houses++;
      visited.add(house2);
    }
  }
  
  return houses;
}
console.log(buyHouses([[1,2],[2,3],[1,3]]));