// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    if ((arr[0] !== arr[1]) && (arr[0] !== arr[2])) {
        return arr[0]
    } else if ((i = (arr.length - 1)) && (arr[i] !== arr[i-1]) && (arr[i] !== arr[i-2])) {
        return arr[i]
    } else 
    for (i = 1; i < arr.length; i++) {
      if ((arr[i] !== arr[i-1]) && (arr[i] !== arr[i+1])) {
        return arr[i]  
      } 
    }
  }

  
  //Tests
  Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
Test.assertEquals(findUniq([ 11, 0, 0 ]), 11);
Test.assertEquals(findUniq([ 0, 0, 12 ]), 12);
Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);