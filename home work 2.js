// Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.
function findTheIndex (arr){
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return i
        }
    }
     return -1
}
// Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array
function creatArr(arr){
    let newarr = [],sum = 0
    for (let i of arr){
        sum = 0
        for (let j of i ){
            sum += j
        }
        newarr.push(sum)
    }
    return newarr
}
// Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length
let arr = [1,2,3,4,6,7,89,10,-9,11,-5,-4,-3]
let X
X = arr.filter(function (i){
    
        if (i%2!==0){
            return true
    
    }else {
            return false
    }
})
X = X.map(x=>x*X.length)
// Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.
function sumOfDigits(numb){
    let sum = 0
    
    while (numb){
        sum += numb%10
        numb = Math.trunc(numb/10)
    }
    if (sum>9){
        return sumOfDigits(sum)
    }
    return sum

}
//2rd exanak
function sumOfDigits(numb){
    let sum = 0
    
    while (numb){
        sum += numb%10
        numb = Math.trunc(numb/10)
    }
   
    return sum

}

let x = 5

x = sumOfDigits(x)
while (x>9){

    x = sumOfDigits(x)
}
// 5. Write a recursive function which receives  a number as arguments and returns the
// fibonacci sequence as array.
function fibonachiArray(n){
    let arr = []
    if (n==0){
        return arr 
    }else{
        if(n==1){
            return arr.push(n)
        }else {
            let a = 1,b = 1
            arr = [1,1]
            for (let i = 2 ; i < n ;i++){
                let temp = b
                b = a + b
                a = temp
                arr.push(b)
            }
        }return arr
    }
}