//write a program which returns the current state of a tennis game.
//a tennis game is played as follows:
//first score = 15 points
//second score = 30 points
//third score = 40 points

//after a palyer reaches 40 points, he or she can:
//enter a DEUCE state if both players have scored the same number of times
//enter an ADVANTAGE state if both players scored at least three times and the player scored one time more than his or her opponent.
//WIN the game if he or she has scored at least four times and two times more than the other player.
//implement the function computeGameState(nameP1,nameP2,wins) which returns the current state of the game.
//Parameters:
//nameP1: name of the first player as a string
//nameP2: name of the second player as a string
//wins: an array of strings listing the name of each ball's winner.
//Expected result:
//the current state of the game as a string.:
//P1 0 - P2 0 (with players name in the same orderas given in parameters)
//P1 15 - P2 30
//15a(in case of a 15-15 draw )
//30a(in case of a 30-30 draw)
//P2 WINS
//DEUCE
//P1 ADVANTAGE

//Example:
//Parameters:
//nameP1 = "John"
//nameP2 = "Mary"
//wins = ["John","Mary", "John"]

//Expected result:
//"John 30 - Mary 15"


function computeGameState(nameP1,nameP2,wins) {
    let scoreP1 = 0;
    let scoreP2 = 0;
    let state = "";
    for (let i = 0; i < wins.length; i++) {
        if (wins[i] === nameP1) {
            scoreP1++ ;
        } else {
            scoreP2++;
        }
    }
    if (scoreP1 === scoreP2) {
        state = "DEUCE";
    } else if (scoreP1 > scoreP2 && scoreP1 - scoreP2 >= 2) {
        state = "P1 ADVANTAGE";
    } else if (scoreP2 > scoreP1 && scoreP2 - scoreP1 >= 2) {
        state = "P2 ADVANTAGE";
    } else if (scoreP1 > scoreP2) {
        state = "P1 WINS";
    } else {
        state = "P2 WINS";
    }
   if(state ==="DEUCE"){
         state = `${nameP1} ${scoreP1 * 15} -  ${nameP2} ${scoreP2}`;
    }
    else if(state ==="P1 ADVANTAGE" || state ==="P2 ADVANTAGE"){
        state = `${nameP1} ${scoreP1} - ${scoreP2} ${nameP2}`;
    }
    else if(state ==="P1 WINS" || state ==="P2 WINS"){
        state = `${nameP1} ${scoreP1} - ${scoreP2} ${nameP2}`;
    }
    return state;
}
console.log(computeGameState("P1", "P2", ["P1", "P1", "P1"]));

