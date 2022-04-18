//Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.
function newobj(obj){
    let reobj = {}
    let i, j,a,count,index,q = 0;
    
    
    for (i in obj){
        
        let arr = []
        let arrindex = []
        count = 0
        a = obj[i]
        index = -1
        for( j in obj){
            index++
            if (a == obj[j]){
                count++;
                arrindex.push(index)
            }
            
        }
        if (count == 1){
            reobj[obj[i]] = i
        }
        
        
        if (count >= 2){
            if (arrindex[0] == q){
                for (j in obj){
                    if (a == obj[j]){
                        arr.push(j)
                    }
                } 
                reobj[obj[i]] = arr
            }
            
        }
        q++
    }
    for (i in reobj){
        console.log(i)
        console.log(reobj[i])
        
    }
    return reobj
    
    
    }
//Given two objects. Write a function that performs shallow compare.
let obj = {
    a:'1',
    b:'2',
    C: '3',
    d:'1'
}

obj2 = newobj(obj)

function shallowCompare(obj1,obj2){
    let count
    let count1 = 0, count2 = 0
    for (let i in obj1){
        count1 ++
    }
        for (let j in obj2){
            count2 ++
        }
    count = count1
            if (count1 == count2){
                for (let i in obj1 ){
                    for (let j in obj2){
                        if(i==j && obj1[i]==obj2[j]){
                            count--
                        }
                    }
                    
                }
                if (count == 0){
                    return true
                }else{
                    return false
                }
            }else {
                return false
            }
}
let a = {
    a:'1',
    b: '1',
}
let b = {
    b: '2',
    a: '1',
}
shallowCompare(a,b)
//Given an array. Determine whether it consists only from uniques or not.
function uniqueElement(arr)
{
      
    let x = arr[0];
  
    let flag = 1;

    for(let i = 0; i < arr.length; i++)
    {
          
       
        if (arr[i] != x)
        {
            flag = 0;
            break;
        }
    }
  
   
    if (flag == 1)
        console.log("Yes");
    else
        console.log("No");
}
  

 
    let arr = [ 9, 9, 9, 9, 9, 9, 9 ];
  

    uniqueElement(arr);
//Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//word&quot;) is a word or phrase without a repeating letter.
    function is_isogram(str)
    {
       
        str = str.toLowerCase();
        let len = str.length;
  
        let arr = str.split('');
  
        arr.sort();
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] == arr[i + 1])
                return false;
        }
        return true;
    }

//Given an array of integers. All numbers are unique. Find the count of missing numbers
//between minimum and maximum elements to make integers sequence.
let arr = [11,22,0,-1,48,66,222,55,1,3,6,7,255,10,12]
let max,min,i,j,k,m
max = Math.max.apply(null,arr)
min = Math.min.apply(null,arr)
for (i = 0;i<arr.length;i++){
    if (arr[i]==max){
        k = i
    }
}
for (j = 0;j<arr.length;j++){
    if(arr[j]==min){
        m = j     
    }
}
console.log(arr.slice(m,k))