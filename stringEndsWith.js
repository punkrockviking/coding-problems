// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


function solution(str, ending){
    let startOfEnd = str[str.length - ending.length]
    
    for(let i = 0; i < ending.length; i++) {
      const currStrLetter = str[(str.length - ending.length) + i]
      const currEndLetter = ending[i]
      if (currStrLetter !== currEndLetter) {
        return false
      }
    }
    return true  
  }

//alternatively you could just start at the end of the ending str, then work back. if you get through entire ending str then return true


  Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)