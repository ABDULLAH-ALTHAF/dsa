let array = [1,7,3,89,2,4,6,3,2,8,9,54,5,67,36,32]
// function selectionSort(a){
//     let n = a.length
//     for(let i=0;i<n-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<n;j++){
//             if(a[j]<a[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex!=i){
//             [a[i],a[minIndex]] = [a[minIndex],a[i]]
//         }
//     }
//     return a
// }
// console.log(selectionSort(array));

function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let minIndex = i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!=i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort(array));

