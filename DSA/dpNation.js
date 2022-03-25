let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 500)
})

Promise.race([prom1, prom2]).then(function onComplete(results) {
  console.log(results)
})