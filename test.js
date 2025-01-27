let str1 = "abc"
let str2 = "pqrs"

let result 
let ar = []


for(let i=0;i<str2.length;i++){
    
    ar.push(str1[i],str2[i])
   
}
result = ar.join('')
// console.log(ar);
console.log(result);


//apbqcrs