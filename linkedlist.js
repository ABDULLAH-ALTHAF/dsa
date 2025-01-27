// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//     }

//     add(data){
//         let newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
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
//         current.next = newNode
//     }

//     delete(value){
//         if(!this.head){
//             return
//         }
//         if(this.head.data == value){
//             this.head = this.head.next
//             return
//         }
//         let current = this.head
//         while(current.next&&current.next.data!=value){
//             current = current.next
//         }
//         if(current.next){
//             current.next = current.next.next
//         }
//     }

//     display(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// let n1 = new LinkedList

// n1.add(10)
// n1.add(20)
// n1.add(30)
// n1.add1st(700)
// n1.addAfter(100,20)
// n1.delete(100)

// n1.display()


// class Node{
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
//         let newNode = new Node (data)
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
    
//     display(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
//         }
//     }
    
//     revPrint(){
//         let current = this.tail
//         while(current){
//             console.log(current.data);
//             current = current.prev
//         }
//     }

//     addBefore(data,place){
//         let newNode = new Node(data)
//         let current = this.head
//         let prev = null
//         while(current.data!=place){
//             prev = current
//             current = current.next
//         }
//         prev.next = newNode
//         newNode.next = current
//     }

//     reverse(){
//         let prev = null
//         let current = this.head
//         let next = null

//         while(current){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.head = prev
//     }
//     length(){
//         let count = 0
//         let current = this.head
//         while(current){
//             count++
//             current = current.next
//         }
//         return count
//     }

//     hasCycle(){
//         let slow = this.head
//         let fast = this.head
//         while(fast&&fast.next){
//             slow = slow.next
//             fast = fast.next.next

//             if(slow == fast){
//                 return true
//             }
//         }
//         return false

//     }

//     findMiddle(){
//         let slow = this.head
//         let fast = this.head

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.data
//     }

//     removeDup(){
//         if(!this.head){
//             return
//         }
//         let current = this.head
//         while(current&&current.next){
//             if(current.data == current.next.data){
//                 current.next = current.next.next
//                 if(current.next == null){
//                     this.tail = current
//                 }
//             }else{
//                 current = current.next
//             }
//         }
//     }
// }

// let n2 = new LinkedList
// n2.add(10)
// n2.add(20)
// n2.add(30)
// n2.add(30)
// n2.add(30)
// n2.add(40)
// n2.add(50)
// n2.addBefore(675685,30)
// n2.display()
// console.log(n2.findMiddle());
// console.log(n2.length());
// console.log(n2.hasCycle());
// console.log("======================");

// n2.removeDup()
// n2.display()
// n2.reverse()
// n2.display()
// n2.revPrint()





// recursion

// function print(n){
//     if(n==0)return 0
//     return print(n-1) + console.log(n);
// }
// print(10)

// function sum(n){
//     if(n==0)return 0
//     return n+sum(n-1)
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
//     return n*facto(n-1)
// }
// console.log(facto(5));

// function sumOfDigits(n){
//     if(n==0)return 0
//     return (n%10)+sumOfDigits(Math.floor(n/10))
// }
// console.log(sumOfDigits(123));

// function gcd(a,b){
//     if(b==0)return a
//     return gcd(b,a%b)
// }
// console.log(gcd(48,18));

// function power(a,x){
//     if(x==0)return 1
//     return a*power(a,x-1)
// }
// console.log(power(2,3));

// function pallindrome(str){
//     if(str.length<=1) return true
//     if(str[0]!==str[str.length-1]) return false
//     return pallindrome(str.substring(1,str.length-1))
// }
// console.log(pallindrome("hooh"));

// function countEach(n){
//     if(n<10)return 1
//     return 1+ countEach(Math.floor(n/10))
// }
// console.log(countEach(12345));

// function findTarget(arr,target,left,right){
//     if(left>right){
//         return "not Found"
//     }
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]==target){
//         return mid
//     }else if(arr[mid]<target){
//         return findTarget(arr,target,mid+1,right)
//     }else{
//         return findTarget(arr,target,left,mid-1)
//     }
// }

// const arr = [1,3,6,9,10,20]

// console.log(findTarget(arr,1,0,arr.length-1));