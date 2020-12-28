//31 in length
//counter=0
//while pointer !== arr[arr.length-1][arr[arr.length-1]-1]
//x=0, while x<3
let list= ['.#..#...','....#..#','........','........','.......#']
function findTrees(arr, counter, currentColumn) {
  if (!currentColumn) {
    let counter=0;
    let currentColumn=0;
  }
  while (currentColumn<3) {
    if (arr.length===1) {
      return counter
    }
      // if (!arr[0][currentColumn]) {
      //   arr=arr.shift()
      //   findTrees(arr, counter, )
      // }
      if (arr[0][currentColumn]==='#') {
        counter++;
      }
      currentColumn++;
    }
    arr.shift()
    console.log(arr)
    // console.log(arr, counter, currentColumn)
    findTrees(arr, counter, currentColumn)
  // console.log('counter:', counter)
  return counter
}

findTrees(list)