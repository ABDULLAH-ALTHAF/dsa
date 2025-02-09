// // class HashTable {
// //     constructor(size = 10) {
// //         this.table = new Array(size);
// //     }

// //     _hash(key) {
// //         return key.length % this.table.length; // Simple hash function
// //     }

// //     set(key, value) {
// //         let index = this._hash(key);
// //         if (!this.table[index]) this.table[index] = [];
// //         this.table[index].push([key, value]);
// //     }

// //     get(key) {
// //         let index = this._hash(key);
// //         if (!this.table[index]) return undefined;
// //         for (let pair of this.table[index]) {
// //             if (pair[0] === key) return pair[1];
// //         }
// //         return undefined;
// //     }

// //     remove(key) {
// //         let index = this._hash(key);
// //         if (!this.table[index]) return false;
// //         this.table[index] = this.table[index].filter(pair => pair[0] !== key);
// //         return true;
// //     }
// // }

// // // Usage
// // const myHashTable = new HashTable();
// // myHashTable.set("John", 25);
// // myHashTable.set("Emma", 30);

// // console.log(myHashTable.get("Emma")); // Output: 30
// // // myHashTable.remove("Emma");
// // console.log(myHashTable.get("John")); // Output: undefined



// class Hash {
//     constructor(size){
//        this.table = new Array(size)
//        this.size = size
//     }
 
//     hash(key){
//        let total = 0
//        for(let i =0;i<key.length;i++){
//              total+=key.charCodeAt(i)
//        }
//        return total%this.size
//     }
 
//     set(key,value){
//        let index = this.hash(key)
//        if(!this.table[index]){
//           this.table[index]=[]
//        }
 
     
//        for(let pair of this.table[index]){
//           if(pair[0]==key){
//              pair[1]=value
//              return
//             }
//           }
       
 
//        this.table[index].push([key,value])
//     }
 
//     get(key){
//        let index = this.hash(key)
//        if(this.table[index]){
//           for(let pair of this.table[index]){
//              if(pair[0]===key){
//                 return pair[1]
//              }
//           }
//        }
//        return undefined
//     }
 
//  remove(key){
//     let index = this.hash(key)
//     if(!this.table[index]) return
//     this.table[index] = this.table[index].filter(pair => pair[0]!==key)
//     if(this.table[index]==0){
//        this.table[index] = undefined
//     }
//  }
 
//  print(){
//     for(let i=0;i<this.table.length;i++){
//        if(this.table[i]){
//           this.table[i].forEach(pair => {
//              console.log(pair[0],pair[1])
//           })
//        }
//     }
//   }
//  }
 
//  let ha = new Hash(40)
//  ha.set('safa','sdfghjk')
//  ha.set('a','sdfghjk')
//  console.log(ha.get('a'));
//  ha.print()


// class HashTable{
//     constructor(size = 101){
//         this.table = new Array(size)
//     }
//     hash(key){
//         return key.length % this.table.length
//     }
//     set(key,value){
//         let index = this.hash(key)
//         if(!this.table[index]) this.table[index] = []
//         this.table[index].push([key,value])
//     }
//     get(key){
//         let index = this.hash(key)
//         if(!this.table[index]) return undefined
//         for(let pair of this.table[index]){
//             if(pair[0]==key) return pair[0],pair[1]
//         }
//         return undefined
//     }
//     print(){
//         if(!this.table)return "no table"
//         for(let tm of this.table){
//             if(tm != undefined){
//                 console.log(tm);
//             }
//         }
//     }
//     remove(key){
//         let index = this.hash(key)
//         if(!this.table[index]) return false
//         this.table[index] = this.table[index].filter(pair => pair[0]!==key)
//     }
// }


// let h1 = new HashTable()
// h1.set("althaf",1500)
// h1.set("sadhik",2500)
// h1.set("vishnav",3500)

// console.log(h1.get("althaf"));
// console.log(h1.get("sadhik"));
// console.log(h1.get("vishnav"));
// console.log('======================');
// h1.remove("sadhik")

// console.log(h1.get("althaf"));
// console.log(h1.get("sadhik"));
// console.log(h1.get("vishnav"));
// h1.print()
