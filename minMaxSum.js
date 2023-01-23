const sum = [1,3,5,7,9]
minArray = sum.sort()
.reverse()
.slice(1)
.reduce((b, a) => b + a, 0)

maxArray=sum.sort()
  .slice(1)
  .reduce((b, a) => b + a, 0)

console.log(minArray, maxArray)










// Michael's:
// const points = [1, 2, 3, 4, 5];

// function myFunction1(minSum, maxSum) {
//   const sum = points.sort().reduce(function (a, b) {
//  return a + b;
// }, 0);
// const minSum = sum - points[4]
// const maxSum = sum - points[0]
// }

// function myFunction2() {
//   points.sort(function(a, b){return a - b});
// }

// console.log(minSum, maxSum)