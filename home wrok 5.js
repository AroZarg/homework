// Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments ), ms);
    };
  
  }
  
  let f1000 = delay(alert, 1000);

// Implement Debounce decorator
   function ngDebounce(timeout: number, cancelDebounce: CallableFunction) {
 
    let timeoutRef = null;
  
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
      
      
      const original = descriptor.value;
    
  
      descriptor.value = function debounce(...args) {
    
   
        clearTimeout(timeoutRef);
        
        timeoutRef = setTimeout(() => {
  
        
          original.apply(this, args);
  
        }, timeout);
  
      
        Object.defineProperty(debounce, 'cancelDebounce', {
          value: function() {
            clearTimeout(timeoutRef);
          }
        })
      }
  
     
      return descriptor;
    }
  }

//   Write a JavaScript function to get all possible subsets of given length of the given
  function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));
// Create a function that builds a tree.
const treeNodes = [ 
    {id: 'root', children: [1,2]}, 
    {id: 1, children: [3]}, 
    {id: 2, children: [4,5]}, 
    {id: 3, children: [6]}, 
    {id: 4, children: [7]}, 
    {id: 5, children: []}, 
    {id: 6, children: []}, 
    {id: 7, children: [8,9]}, 
    {id: 8, children: []}, 
    {id: 9, children: [10]}, 
    {id: 10, children: []} 
]; 
 
function Node(id, children) { 
    return {value: id, children: children}; 
} 
 
let createTree = function (nodes) { 
    const idMapping = nodes.reduce((acc, el, i) => { 
        acc[el.id] = i; 
        return acc; 
    }, {}); 
    let createTreeInner = function (node) { 
        if ( node.children.length == 0 ) 
        { 
            return Node(node.id, []); 
        } 
        else 
        { 
            return Node(node.id, node.children.map((x) => createTreeInner(nodes[ idMapping[x] ]))); 
        } 
    }; 
    let root; 
    nodes.forEach((el) => { 
        if (el.id === "root") { 
            root = createTreeInner (el); 
        } 
    }); 
    return root; 
}; 
 
let t = createTree(treeNodes); 
console.log (t);