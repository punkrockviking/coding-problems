//is the integer a perfect square?

var isSquare = function(n){
    const product = null
    for(i = 0; (i*i) <= n; i++) {
      const product = (i * i)
      if (product === n) {
        return true
      }
    }
    return false; // fix me
  }