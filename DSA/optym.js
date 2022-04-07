var lastStoneWeight = function(stones) {
    let firstBStone = 0
    let secondBStone = 0
    while(stones.length > 1){
        let sorted = stones.sort((a,b) => a - b)
        
        firstBStone = stones[stones.length-1]
        secondBStone = stones[stones.length-2]
      
        stones.splice(stones.length-2,2)
        
        if(firstBStone > secondBStone){
            stones.unshift(firstBStone-secondBStone)
        }else if(firstBStone < secondBStone){
            stones.unshift(secondBStone-firstBStone)
        }
    }

    if (stones.length === 0){
        return 0 
    }else{
       return stones[0] 
    }
    
};

console.log(lastStoneWeight([2,7,4,1,8,1]))