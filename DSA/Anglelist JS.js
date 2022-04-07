// function processUser(users) {
//     return users.map(user => user.name).reduce((a,b) => {
//         a[b] = (a[b] || 0) + 1;
//         return a;
//     }, {});
// }
// console.log(processUser([{name: 'John'}, {name: 'John'}, {name: 'Mary'}]));


// function fo(x) {
//     return function() {
//         x++;
//         console.log(x);
//     }
// }
// var x =0;
// var bar = fo(x);
// var bip = fo(x);
// bar();
// bar();
// bip();