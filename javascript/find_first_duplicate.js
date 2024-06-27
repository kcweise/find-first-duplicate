function findFirstDuplicate(arr) {
  let seen = new Set();

  if (arr.length < 2){
    return -1;
  }
    for (let i = 0; i < arr.length; i +=1) {
       if (seen.has(arr[i])){
        return arr[i];
      }
      seen.add(arr[i]);
    }
  return -1;
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

/* Please add your pseudocode to this file
We have to iterate through array indexes trying to find a match that index number. Starting at index [0].
We have to compare the index to the numbers in subsequent indexes. Nested loop.
After iterating through each index the nested iteration can start at current index + 1.
*/

// And a written explanation of your solution
