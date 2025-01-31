// let s = [1,2,1,2,4,6]
//increment
// function quickSort(array){
//     if(array.length<2)return array
//     let pivot  = array[array.length - 1]
//     let left = []
//     let right = []
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]>pivot){
//             right.push(array[i])           
//         }else{
//             left.push(array[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(s));


//decriment
// function quickSort(array){
//     if(array.length<2) return array
//     let pivot = array[array.length-1]
//     let n = array.length
//     let right = []
//     let left = []
//     for(let i=0;i<n-1;i++){
//         if(array[i]<pivot){
//             right.push(array[i])
//         }else{
//             left.push(array[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(s));