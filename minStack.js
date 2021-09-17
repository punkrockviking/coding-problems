
const MinStack = function() {
    this.stack = []

  MinStack.prototype.push = function(val) {
    this.stack[this.stack.length] = val
    // console.log(this.stack)
  };

  MinStack.prototype.pop = function() {
    // console.log('stack before pop', this.stack)
    this.stack.splice(this.stack.length - 1, 1)
    // console.log('stack AFTER pop', this.stack)
  };

  MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
  };

  MinStack.prototype.getMin = function() {
    let sortedStack = this.stack.slice()
    sortedStack.sort(function(a, b) {
      return a - b;
    })
    // console.log('sorted stack is ', sortedStack)
    return sortedStack[0]
  };

};

 var obj = new MinStack()
 obj.push(-2)
 obj.push(0)
 obj.push(-3)
 obj.getMin()
 obj.pop()
 obj.top()
 obj.getMin()
