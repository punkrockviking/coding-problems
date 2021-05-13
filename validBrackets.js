/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.


 * @param {string} s
 * @return {boolean}
 */
var isValid = function(bracketStr) {
    const bracketStack = []
    const bracketPairs = {
      '{': '}',
      '[': ']',
      '(': ')',
    }
    // console.debug(bracketPairs)
    const closeBrackets = ['}',']',')']
    
    const closedBracketSet = new Set(closeBrackets)
    // console.debug(closedBracketSet)
    for(i = 0; i < bracketStr.length; i++) {
      // if you come across a bracket in the string, push it onto the bracketStack
      const character = bracketStr[i]
      // console.debug("character", character)
      if (closedBracketSet.has(character)) {
        // check if it matches syntax
          // if character is in closedBracketSet, does it match with top of stack
        const topOfStack = bracketStack.pop()
        // console.debug("topOfStack", topOfStack)
        if (bracketPairs[topOfStack] !== character) {
          return false
        }
      } else if (character in bracketPairs) {
        bracketStack.push(character)
        // console.debug("bracketStack", bracketStack)
      }
    }
    // console.debug('Congrats, your string is balanced!')
    return bracketStack.length === 0
};