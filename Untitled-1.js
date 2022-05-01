//Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)
function deletElement(arr,arr2){
    if (arr.length <= 1)
        return []
        arr2.push(arr[1])
    if (arr.length !== 2){
        deletElement(arr.slice(1),arr2)
    }
    return arr2;
}
// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
    // that concats arrays).
function goodArr(arr,arr2){
    for (let i of arr){
        if (Array.isArray(i)==false){
            arr2.push(i);
        }else {
            goodArr(i,arr2);
        }
    }
    return arr2;
}
let arr2 = [];
goodArr([1,[2,3,[4,5]],6],arr2);
// Given an array and a number N.  Write a recursive function that rotates an array N places to the
// left. (Hint: to add element to the beginning use arr.unshift())
function changeArr(arr,n){
    let x = arr.shift();
    arr.push(x);
    n-=1;
    if (n!=0){
        changeArr(arr,n);
    }
    return arr;
}
let n = 7;
changeArr([1,2,3,4,5,6,7,8],n);
//Given the list of the following readers:
let booklist = [{book: "Catcher in the Rye", readStatus: true, percent: 40},
                {book: "Animal Farm", readStatus: true, percent: 20},
                {book: "Solaris", readStatus: false, percent: 90},
                {book: "The Fall", readStatus: true, percent: 50 },
                {book: "White Nights", readStatus: false, percent: 60},
                {book: "After Dark", readStatus: true, percent: 70} ]
booklist.sort(function (a,b){
    if (a.readStatus == false || b.readStatus == false){
        return 0
    }
    if(a.percent>b.percent){
        return 1
    }
    if (a.percent<b.percent){
        return -1
    }
})
// Implement “map” method for plain objects (same as Array map method.)
function fakeMap(fn) {
    let result = [] 
    for (let i = 0; i != this.length; i++)
      result[i] = fn(this[i])
        return result
  }