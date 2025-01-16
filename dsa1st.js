// class Node {
//     constructor(data){
//         this.prev = null
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     add(data){
//         let newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//             newNode.prev = current
//             this.tail = newNode
//         }
//     }

//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
//         }
//     }

//     printrev(){
//         let current = this.tail
//         while(current){
//             console.log(current.data);
//             current = current.prev
//         }
//     }

//     add1st(data){
//         let newNode = new Node(data)
//         newNode.next = this.head
//         this.head = newNode
//     }

//     addAfter(data,place){
//         let newNode = new Node(data)
//         let current = this.head
//         while(current.data!=place){
//             current = current.next
//         }
//         newNode.next = current.next
//         newNode.prev = current
//         current.next = newNode
//     }

//     delete(value){
//         if(!this.head){
//             return
//         }
//         if(this.head.data==value){
//             this.head = this.head.next
//             return
//         }
//     let current = this.head
//     while(current.next&&current.next.data != value){
//         current = current.next
//     }
//     if(current.next){
//         current.next = current.next.next
//     }
//     }
// }

// let l1 = new LinkedList()

// l1.add(10)
// l1.add(20)
// l1.add(30)
// l1.add(40)
// l1.add(50)
// l1.delete(50)
// l1.add1st(70)
// l1.print()
// console.log("=================");
// l1.printrev()

// l1.addAfter(700,30)
// l1.print()
// console.log("=================");



// class Node{
//     constructor(data){
//         this.prev = null
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }
//     push(data){
//         let newNode = new Node(data)
//         newNode.next = this.top
//         this.top = newNode
//     }
    
//     display() {
//         let current = this.top;
        
//         while (current) {
//             console.log(current.data);
//           current = current.next;
//         }
//       }
// }

  

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     //adding new data
//     add(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//             newNode.prev = current
//             this.tail = newNode
//         }
//     }
//     //printing the linked list
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
//     //printing reverse with doubly linked list
//     printRev(){
//         let current = this.tail
//         while(current){
//             console.log(current.data)
//             current = current.prev
//         }
//     }
//     //adding new data into head or into first position
//    addBeginning(data){
//     let newNode = new Node(data)
//     newNode.next = this.head
//     this.head = newNode
//    }
   
//    afterAdd(x,place){
//     let current = this.head
//     while(current.data!=place){
//         current = current.next
//     }
//     let newNode = new Node(x)
//     newNode.next = current.next
//     current.next = newNode
//    }

//    beforeAdd(x,place){
//     let current = this.head
//     let prev = null
//     while(current.data!=place){
//         prev = current
//         current = current.next
//     }
//     let newNode = new Node(x)
//     prev.next = newNode
//     newNode.next = current
//    }

//    delete(value){
//     if(!this.head)
//         return
//     if(this.head.data === value){
//         this.head = this.head.next
//         return
//     }
//     let current = this.head
//     while(current.next&&current.next.data !== value){
//         current = current.next
//     }
//     if(current.next){
//         current.next = current.next.next
//     }
//    }
  
//    reverse(){
//     let prev = null
//     let current = this.head
//     let next = null
//     while(current){
//         next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }
//     this.head = prev
//    }

//    length(){
//     let count = 0
//     let current = this.head
//     while(current){
//         count++
//         current = current.next
//     }
//     return count
//    }

//    hasCycle (){
//     let slow = this.head
//     let fast = this.head

//     while(fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next

//         if(slow==fast){
//             return true
//         }
//     }
//     return false
//    }

//    findMiddleOne(){
//     let slow = this.head
//     let fast = this.head
//     while(fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return slow.data
//    }

//    removeDuplicates(){
//     if(!this.head){
//         return
//     }
//     let current = this.head
//     while(current&&current.next){
//         if(current.data == current.next.data){
//             current.next = current.next.next
//             if(current.next==null){
//                 this.tail = current
//             }
//         }else{
//             current = current.next     
//         }
//     }
//    }

// removeDuplicates(){
//     if(!this.head){
//         return
//     }
//     let current = this.head
//     while(current&&current.next){
//         if(current.data == current.next.data){

//             current.next = current.next.next
//         }
//         current = current.next
//     }
// }
  
// }


//actons

// const nums = new LinkedList()
// const nums1 = new LinkedList()
// const arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//     nums.add(arr[i])
// }

// nums.add(1)
// nums.add(1)
// nums.add(1)
// nums.add(1)
// nums.add(3)
// nums.add(3)
// nums.add(3)
// nums.add(5)
// nums.add(5)
// nums1.add(2)
// nums1.add(4)
// nums1.add(6)
// nums.addBeginning(99991)
// nums.delete(5)
// nums.afterAdd(445,9)
// nums.beforeAdd(445,445)
// nums.print()  
// console.log("=========================");  
// nums.removeDuplicates()
// nums.print()  
// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// nums.printRev()
// nums1.print()
// nums.reverse()
// console.log("hallo");
// nums.print()
// console.log('uiyyuhui');
// console.log(nums.length());
// console.log(nums.hasCycle());
// console.log(nums.findMiddleOne());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// recursion

// function prn(n){
//     if(n==0){
//         return 0
//     }

//     prn(n-1)
//     console.log(n);
// }

// prn(8)


// function sum(n){
//     if(n==0){
//         return 0
//     }
//     return n + sum(n-1)
// }
// console.log(sum(5));



// function fibno(n){
//     if(n==0)return 0
//     if(n==1)return 1
//     return fibno(n-1)+fibno(n-2)
// }

// console.log(fibno(6));

// function facto(n){
//     if(n==0) return 1
//     return n* facto(n-1)
// }
// console.log(facto(4));


// function sumOfDigits(n){
//     if(n==0)return 0 
//     return (n%10) + sumOfDigits(Math.floor(n/10))
// }

// console.log(sumOfDigits(123));

// function gcd(a,b){
//     if(b==0)return a
//     return gcd(b,a % b)
// }
// console.log(gcd(48,18));

// function power(a,b){
//     if(b==0) return 1
//     return a*power(a,b-1)
// }
// console.log(power(2,3));   

// function pallindrome(data){
//     if(data.length<=1){
//         return true
//     }
//     if(data[0]!==data[data.length-1]){
//         return false
//     }
//     return pallindrome(data.substring(1,data.length-1))
// }

// console.log(pallindrome("ha"));

// function countEach(n){
//     if(n<10){
//         return 1
//     }
//     return 1 + countEach(Math.floor(n/10))
// }
// console.log(countEach(1234));


//from a sorted array
// function findTarget(arr,target,low,high){
//     if(low>high){
//         return "not found"
//     }
//     let mid = Math.floor((low+high)/2)
//     if(arr[mid]==target){
//         return mid
//     }else if(arr[mid]<target){
//         return findTarget(arr,target,mid+1,high)
//     }else{
//         return findTarget(arr,target,low,mid-1)
//     }
// }
// const arr = [1,3,6,9,10,20]

// console.log(findTarget(arr,6,0,arr.length-1));


// function sumArray(arr){
//     if(arr.length==0){
//         return 0
//     }

//     return arr[0] + sumArray(arr.slice(1))
// }

// const arr = [1,2,3,4,5]
// console.log(sumArray(arr));


//binary search only on sorted array
//first occurance

// function fo(arr,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]==target){
//         if(mid == 0||arr[mid-1]!=target){
//             return mid
//         }
//         return fo(arr,target,left,mid-1)
//     }
//     if(arr[mid]>target){
//         return fo(arr,target,left,mid-1)
//     }
//     return fo(arr,target,mid+1,right)
// }

// function sfo(arr,target){
    // return fo(arr,target,0,arr.length-1)
// }

// let arr = [1, 2, 2, 2, 3, 4, 5];
// let target = 2;
// console.log(sfo(arr, target))

//last occurance

// function lo(arr,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]==target){
//         if(arr[mid-1]==target&&arr[mid-2]!=target){
//             return mid
//         }
//         return lo(arr,target,left,mid+1)
//     }
//     if(arr[mid]>target){
//         return lo(arr,target,left,mid-1)
//     }
    
//     return lo(arr,target,mid+1,right)
// }

// function slo(arr,target){
//     return lo(arr,target,0,arr.length-1)
// }

// let arr = [1, 2, 2, 2, 3, 3, 4, 5];
// let target = 3;
// console.log(slo(arr, target))


// function findSq(x,left,right){
//     if(left>right){
//         return right
//     }
//     let mid = Math.floor((left+right)/2)
//     let sq = mid*mid
//     if(sq==x){
//         return mid
//     }else if(sq<x){
//         return findSq(x,mid+1,right)
//     }else{
//         return findSq(x,left,mid-1)
//     }
// }

// function findS(x){
//     if(x<2){
//         return x
//     }
//     return findSq(x,0,x)
// }


// console.log(findS(8));

// string questions

// function rev(str){
//     let char = str.split('')
//     let left = 0
//     let right = char.length-1
//     while(left<right){
//         [char[left],char[right]]=[char[right],char[left]]
//         right--
//         left++
//     }
//     return char.join('')
// }
// console.log(rev('happy'));

// function recRev(str){
//     if(str.length<=1) return str
//     return recRev(str.slice(1))+str[0]
// }
// console.log(recRev("olleh"));

// function recPal(str){
//     if(str.length <=1)return true
//     if(str[0]!==str[str.length-1])return false
//     return recPal(str.slice(1,-1))
// }

// console.log(recPal("madam"));
// console.log(recPal("madamm"));



// function firstNonRepeatingCharacter(str) {
//     let charCount = {}; 
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     for (let char of str) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }
//     return null; 
// }

// console.log(firstNonRepeatingCharacter("swiss")); 
// console.log(firstNonRepeatingCharacter("aabb"));  


// function findMax(arr){
//     let max = arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMax([1,2,3,18,4,5,6,7,8,9]));

// function reverseArray(arr) {
//     let left = 0, right = arr.length - 1;

//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]; 
//         left++;
//         right--;
//     }

//     return arr;
// }

// console.log(reverseArray([1, 2, 3, 4, 5])); 

