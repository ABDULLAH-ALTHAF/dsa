// function mergeCall(arr){
//     if(arr.length<=1)return arr
//     let mid = Math.floor(arr.length/2)
//     let left = mergeCall(arr.slice(0,mid))
//     let right = mergeCall(arr.slice(mid))

//    return mergeSort(left,right)
// }

// function mergeSort(left,right){
//     let result = []
//     let j=0,i=0
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i])
//             i++
//         }else{
//             result.push(right[j])
//             j++
//         }
//     }
//     return [...result,...left.slice(i),...right.slice(j)]
// }

// let arr = [3,7,6,8,3,2,8,9,4,2];
// console.log("Sorted array:", mergeCall(arr));




//




// function mergeCall(arr){
//     if(arr.length<=1) return arr
//     let mid = Math.floor(arr.length/2)
//     let left = mergeCall(arr.slice(0,mid))
//     let right = mergeCall(arr.slice(mid))

//     return mergeSort(left,right)
// }

// function mergeSort(left,right){
//     let result = []
//     let i=0,j=0

//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i])
//             i++
//         }else{
//             result.push(right[j])
//             j++
//         }
//     }
//     return [...result,...left.slice(i),...right.slice(j)]
// }

// console.log("Sorted array:", mergeCall(arr));


