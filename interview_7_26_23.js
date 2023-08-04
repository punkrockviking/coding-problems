// fidelity interview

/*
  Number N exists in set M
  Problem Statement:
      Given an unsorted array M and an element N, search N in given array M. Write recursive code for this.
      If element is not present, return false. If the element is present, return true.
  Hint: use array pop()
  ## Examples
    Input : 1,[2,3,6,5,4,8]
    Output : false
    Input : 1,[1,2,3,6,5,4,8]
    Output : true
*/
function exists(n: number, list: number[]): boolean {
		//TODO: Implement logic here
    // input array and num
    // output boolean
    // constraints recursive solution
    
    // sort my array
    // SORT MY ARRAY
    // find middle of array and check if target number is less than, equal, or greater than the current index number
    // call function again with new array (the half that the target is in range)
    // recursive goal is when the middle of my input array is equal to my target
    
    // check middle of array
  const findMiddle = (arr) => {
		// middle of array is going to be floor of array.length divided by 2
    // [0,1,2] [0,1,2,3]
    const middle index = Math.floor(arr.length/2)
		return middle
    
}    
// split the array
	const splitArray = () => {
      // if target is < [beg, middle]
    // if target is > [middle, end]
    // if target = middle then return true
  }
  const isTarget = (tar, arr) => {
  	// find middle
    const middle = findMiddle()
    // does middle equal target
    if (middle === tar) {
    return true
    }
    const smallArr = splitArray()
    isTarget(tar, smallArr)
    return false
  	// return boolean
  }
    
    console.log('hello world')
}
function runIt(): void {
    const values = [1, 2, 3, 4, 5];
    if (exists(5, values))
    {
        console.log("Test 1 Pass");
    }
    else
    {
        console.log("Test 1 Fail");
    }
    console.log("All Tests Completed");
}
runIt();