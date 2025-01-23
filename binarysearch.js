//search for a target in sorted array

// function search(arr,target,left = 0,right = arr.length - 1){
//     if(left>right) return -1
//     let mid = Math.floor((left+right)/2)

//     if(arr[mid]==target){
//         return mid
//     }else if(arr[mid]>target){
//         return search(arr,target,left,mid-1)
//     }else{
//         return search(arr,target,mid+1,right)
//     }
// }
// console.log(search([1, 3, 5, 7, 9], 1))


