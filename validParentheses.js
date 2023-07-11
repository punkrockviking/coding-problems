// leetcode no. 20 validParentheses

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function(str) {
  const bracketStack = []
  const bracketPairs = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  }

  const closeBracketSet = new Set()
  closeBracketSet.add('}')
  closeBracketSet.add(']')
  closeBracketSet.add(')')
  // console.log(closeBracketSet)

  for(let i = 0; i < str.length; i++) {
    const character = str[i]
    // if char is close bracket compare it to top of stack
    if (closeBracketSet.has(character)) {
      const stackTop = bracketStack.pop()
      // if not equal to top of stack return false
      if (bracketPairs[stackTop] !== character) {
        return false
      }
    }
    // if character is an open bracket add it to stack
    if (character in bracketPairs) {
      bracketStack.push(character)
    }
  }
  return bracketStack.length === 0
};


console.log(isValid())