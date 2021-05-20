// Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

// Here's a keypad for visualization.

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

function decode(str) {
    const arr = str.split('')
    const solvedArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        solvedArr.push('9')
      } else if (arr[i] == 2 ) {
        solvedArr.push('8')
      } else if (arr[i] == 3 ) {
        solvedArr.push('7')
      } else if (arr[i] == 4 ) {
        solvedArr.push('6')
      } else if (arr[i] == 5 ) {
        solvedArr.push('0')
      } else if (arr[i] == 6 ) {
        solvedArr.push('4')
      } else if (arr[i] == 7 ) {
        solvedArr.push('3')
      } else if (arr[i] == 8 ) {
        solvedArr.push('2')
      } else if (arr[i] == 9 ) {
        solvedArr.push('1')
      } else if (arr[i] == 0 ) {
        solvedArr.push('5')
      }
    }
    return solvedArr.join('')
  }



  describe('Basic tests', function() {
    var phoneNumbers = {
      "4103432323": "6957678787",
      "4103438970": "6957672135",
      "4104305768": "6956750342",
      "4102204351": "6958856709",
      "4107056043": "6953504567",
      "4105753410": "6950307695"
    };
    
    for (var code in phoneNumbers) {
      Test.assertEquals(decode(code), phoneNumbers[code]);
    }
  });