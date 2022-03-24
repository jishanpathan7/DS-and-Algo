// A thief is stealing from a jewellery store and wants to steal the greatest value of gems possible. However, the getaway car he brought with him can only fit a maximum weight ofC. All the gems in the store have a value and a weight associated with them such that gem ihas a value v(i)and a weight w(i).

// Your task is to figure out the maximum valueVof gems he can steal given the weight limit of the car. You can break a given gem into any fraction of itself.

// NOTE: Maximum value vshould be rounded to the nearest integer

// For example:

// Let Total Weight C = 50

// Number of gems = 3

// The Value of gems: 60 100 120

// The Weight of gems: 10 20 30

// The total value of the gems he can carry is = 240

// The fraction of each item taken is: 1 1 0.66666666666

// Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function knapSack(totalW, weight, values, n) {
    let max = 0;
    ///sort 


    for(var i =0; i < n; i++) {
        for(var j =i; j < n-i; j++){
            if(values[j]/weight[j] < values[j+1]/weight[j+1]){
                swap(values[j], values[j+1]);
                swap(weight[j], weight[j+1]);
            }
        }
    }
    for(var i =0; i < n-1; i++) {
        if( weight[i] <= totalW ) {
            max = Math.max(max, values[i]);
            totalW -= weight[i];
        } else {
            max = Math.max(max, values[i]*totalW/weight[i]);
            break;
        }
    }
    return Math.round(max);
}
console.log(knapSack(50, [10, 20, 30], [60, 100, 120], 3));