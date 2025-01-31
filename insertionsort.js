// let ar = [2,1,6,2,8,6,0,7,14,86,23]

// function insertionSearch(a){
//     let n = a.length
//     for(let i=1;i<n;i++){
//         let current = a[i]
//         let j = i-1
//         while(j>=0&&a[j]>current){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1] = current
//     }
//     return a
// }

// console.log(insertionSearch(ar));



let array = [7,3,9,5,2,8,6,4,3,1]

// function insertionSort(a){
//     let n = a.length
//     for(let i=1;i<n;i++){
//         let current = a[i]
//         let j = i-1
//         while(j>=0&&a[j]<current){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=current
//     }
//     return a
// }

// console.log(insertionSort(array));

function insertionSearch(arr){
    let n = arr.length
    for(let i=1;i<n;i++){
        let current = arr[i]
        let j = i-1
        while(j>=0&&arr[j]>current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

console.log(insertionSearch(array));
