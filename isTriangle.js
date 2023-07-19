// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
    // if ((a + b > c) && (b + c > a) && (c + a > b)) {
    //   return true
    // } else {
    // return false;
    // }
  return ((a + b > c) && (b + c > a) && (c + a > b))
}

console.log(isTriangle(1,2,2))
console.log(isTriangle(7,2,2))
  

// //Test Cases
// Test.describe("PublicTest", function() {
//   Test.assertEquals(isTriangle(1,2,2), true);
//   Test.assertEquals(isTriangle(7,2,2), false);
// });