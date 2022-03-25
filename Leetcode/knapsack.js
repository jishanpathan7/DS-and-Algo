//fractional knapsack problem

function knapsack(items, capacity) {
  var value = 0;
  var weight = 0;
  var itemsCopy = items.slice();
  console.log(itemsCopy);
  var itemsSorted = itemsCopy.sort(function(a, b) {
    return b.value / b.weight - a.value / a.weight;
  });
  for (var i = 0; i < itemsSorted.length; i++) {
    if (weight + itemsSorted[i].weight <= capacity) {
      value += itemsSorted[i].value;
      weight += itemsSorted[i].weight;
    } else {
      var fraction = (capacity - weight) / itemsSorted[i].weight;
      value += itemsSorted[i].value * fraction;
      weight += itemsSorted[i].weight * fraction;
      break;
    }
  }
  return value
}
    console.log(knapsack([{ value: 60, weight: 10 }, { value: 100, weight: 20 } ,{value:120, weight:30}], 50));