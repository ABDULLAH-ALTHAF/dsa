//print numbers from 1 to n

// function print(n){
//     if(n==0)return 0
//     print(n-1)
//     console.log(n);
// }
// print(10)


//sum of first n numbers

// function sum(n){
//     if(n==0)return 0
//     return n+sum(n-1)
// }
// console.log(sum(5));


//factorial of n

// function factorial(n){
//     if(n==1)return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5));


//fibonacci sequence

// function fibonacci(n){
//     if(n==1)return 1
//     if(n==0)return 0
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(6));


//rverse string

// function reverse(str){
//     if(str == "")return ""
//     return reverse(str.slice(1))+str[0]
// }
// console.log(reverse("olleh"));


//find power of n 

// function pwr(x,n){
//     if(n==0) return 1
//     return x* pwr(x,n-1)
// }
// console.log(pwr(2,3));


//check pallindrome

// function pallindrome (str){
//     if(str.length<=1)return true
//     if(str[0]!=str[str.length-1])return false  
//         return pallindrome(str.slice(1,-1))
// }
// console.log(pallindrome('somalayyalamos'));


//find the gcd

// function gcd(a,b){
//     if(b==0)return a
//     return gcd(b,a%b)
// }
// console.log(gcd(42,18));


//Decimal Binary

// function d2b (n){
//     if(n==0)return ''
//     return d2b(Math.floor(n/2))+(n%2)
// }
// console.log(d2b(10));


//length of str

// function lengthOfString (str){
//     if(str == '') return 0
//     return 1 + lengthOfString(str.slice(1))
// }
// console.log(lengthOfString('alala'));


//sum of digits

// function sumOfDigits(n){
//     if(n==0)return 0
//     return sumOfDigits(Math.floor(n/10))+(n%10)
// }
// console.log(sumOfDigits(1234));


//occurance count

// function occurance(str,char){
//     if(str == '') return 0
//     return (str[0]==char?1:0)+occurance(str.slice(1),char)
// }
// console.log(occurance("hello","l"));


//print array elements

// function printElements(arr){
//     if(arr.length == 0) return 
//     console.log(arr[0])
//     return printElements(arr.slice(1))
// }
// printElements([1,2,3,4,5,6,7])

// function printElements(arr,index = 0){
//     if(index == arr.length) return
//     console.log(arr[index])
//     return printElements(arr,index+1)
// }
// printElements([1,2,3,4,5,6,7,8,10])


//find the max 

// function findTheMax (arr,n=arr.length){
//     if(n==1) return arr[0]
//     return Math.max(arr[n-1],findTheMax(arr,n-1))
// }
// console.log(findTheMax([1,2,11,3,4,5,6,7,8,9]));


//check is that sorted or not

// function sorted (arr,n=arr.length){
//     if (n==1)return true
//     if(arr[n-2]>arr[n-1])return false
//     return sorted(arr,n-1)
// }
// console.log(sorted([1,2,3,4,19,5,6,7,8]));


// function printSubsets(str,current = "",index = 0){
//     if(index === str.length){
//         console.log(current);
//         return
//     }
//     printSubsets(str,current+str[index],index+1)
//     printSubsets(str,current,index + 1)
// }

// printSubsets("althaf")

//neeeeeeeeeeeeeeeddddddddddd more clarity

// function permute(str, l = 0, r = str.length - 1) {
//     if (l === r) {
//         console.log(str); // Base case: Print the string when all positions are fixed.
//         return;
//     }
//     for (let i = l; i <= r; i++) {
//         str = swap(str, l, i); // Swap the current index with the loop index.
//         permute(str, l + 1, r); // Recur for the next level.
//         str = swap(str, l, i); // Backtrack: Undo the swap.
//     }
// }

// function swap(str, i, j) {
//     let arr = str.split(""); // Convert string to array for swapping.
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements.
//     return arr.join(""); // Convert back to string.
// }

// permute("abc");
