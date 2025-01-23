// class Node {
//     constructor(data){
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
//             return 
//         }
//         let current = this.tail
//         while(current.next){
//             current = current.next
//         }
//         current.next = newNode
//         newNode = this.tail
//         this.tail = newNode
//     }
    
//     display(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//     }
// }
// }

// let ls = new LinkedList()

// ls.add(100)
// ls.add(200)
// ls.add(200)

// ls.display()
