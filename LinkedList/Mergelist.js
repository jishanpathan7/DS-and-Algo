//A sentence is made up of words.
//each word is a sequence of letters,(a-z,A-Z), that may contain one or more hyphensand may end with punctuaton mark:
//. , ? ! ; :
//words will be separated by spaces. hypens join two words into one and should be retained while the other punctuation marks should be stripped.
//note you have to determnine onlythe number of words in a given sentence not numbers

//example:
//"How many eggs are in a hal-dozen, 13?"

// the list of words in the string is ["how", "many", "eggs", "are", "in", "a", "hal-dozen"]  and the number of words is 7.
//notice that the numeric string "13" is not a word and should be ignored.


const howManyWords = (str) => {
    let words = str.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
        count++;
        }
    }
    return count;
    }


