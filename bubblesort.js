//ascending order
// let a = [9,1,8,2,7,3,6,4,5]

// function BubbleSort(arr){
//     let n = arr.length - 1    
//     for(let i=0;i<n;i++){
//         let swapped = false
//         for(let j=0;j<n-i;j++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]] 
//                 swapped = true
//             }
//         }
//         if(!swapped){
//             break 
//         }
//     }
//     return arr
// }

// console.log(BubbleSort(a));




//descending order
// let arr = [2,6,1,9,4,9,3,2,6]
// function BubbleSort(a){
//     let n = a.length
//     let swapped = false
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n-1;j++){
//             if(a[j]<a[j+1]){
//                 [a[j],a[j+1]] = [a[j+1],a[j]]
//                 swapped = true
//             }
//         }
//         if(!swapped){
//             break
//         }
//     }
//     return a
// }
// console.log(BubbleSort(arr));