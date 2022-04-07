// Write a program that rolls 2 dices 100 times.
//  It should print out the dices separately as well as the combined result for each roll. 
//  Each time the player rolls a multiple of three it should print "Ore" and each time the player rolls a multiple of four it should print "Sheep" and for multiples of three and four it should print "OreSheep".
//  The print format should be: `RollNo: 1 - Dice1: 4 - Dice2: 5 - Total: 9 - Extra: Ore` *


function rollDice(){
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    let total = dice1 + dice2
    let extra = ""
    if(total % 3 === 0){
        extra = "Ore"
    }else if(total % 4 === 0){
        extra = "Sheep"
    }
    else if(total % 3 === 0 && total % 4 === 0){
        extra = "OreSheep"
    }
    console.log(`RollNo: 1 - Dice1: ${dice1} - Dice2: ${dice2} - Total: ${total} - Extra: ${extra}`)
}

console.log("Rolling the dice 100 times...")
for(let i = 0; i < 100; i++){
    rollDice()
}
