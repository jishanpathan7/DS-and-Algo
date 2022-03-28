// Himanshu the CR of class wants to spread some news about an event to every group of students of the college.
// He will have to miss Professor DK classes to spread the news to every student, 
// so he came up with a plan,Instead of meeting every student in person he decided to meet few people such that the person to whom he pass the news will spread it to all his friends in a group.
// And those friends will pass it to other friends and so on.
// Your task is to find minimum number of persons he need to meet to spread the news of the event.
// Input:
// First line of input contains number of test cases T.
// First line of each test case contains number of students N.
//The next line will contain 'e', the number of friend descriptions 'e'.
//The next 'e' lines are the descriptions of type "a b" denoting 'a' friends with 'b'. If 'a' is friends with 'b' then 'b' is friends with 'a'.
//Output:
//Output contains T lines, the number of persons he need to meet to spread the news of the event.
//Constraints:
//1<=T<=10
//2<=N<=10^4
//0<=e<=N/2
//0<=a,b<=N-1
//Example:
//Input:
//2
//4
//2
//0 1
//1 2
//3
//0 

//Output:
//2
//3

function spreadNews(n, e, arr) {
    let friends = new Array(n).fill(0);
  
    let count = 0;
    for (let i = 0; i < e; i++) {
        let [a, b] = arr[i].split(' ').map(Number);
        friends[a]++;
        friends[b]++;
    }

    for (let i = 0; i < n; i++) {
        if (friends[i] == 0) {
            count++;
        }
    }
    return count;
}
console.log(spreadNews(4, 2, ['0 1', '1 2']));



