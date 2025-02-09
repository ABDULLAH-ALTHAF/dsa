// class trieNode{
//     constructor(){
//         this.child = {}
//         this.end = false
//     }
// }

// class trie{
//     constructor(){
//         this.root = new trieNode()
//     }
//     add(word){
//         let current = this.root

//         for(let i=0;i<word.length;i++){
//             if(!(word[i] in current.child)){
//                 current.child[word[i]] = new trieNode()
//             }
//             current = current.child[word[i]]
//         }
//         current.end = true
//     }

//     search(word){
//         let current = this.root
//         for(let i=0;i<word.length;i++){
//             if(!(word[i] in current.child)){
//                 return false
//             }
//             current = current.child[word[i]]
//         }
//         return current.end
//     }

//     autoComplete(prefix){
//         let current = this.root
//         let suggestions = []
//         for(let i=0;i<prefix.length;i++){
//             if(!(prefix[i] in current.child)){
//                 return suggestions
//             }
//             current = current.child[prefix[i]]
//         }
//         this.comp(current,prefix,suggestions)
//         return suggestions
//     }

//     comp(current,prefix,suggestions){
//         if(current.end){
//             suggestions.push(prefix)
//         }
//         for(let char in current.child){
//             this.comp(current.child[char],prefix+char,suggestions)
//         }
//     }

//     display(node = this.root , word = ''){
//         if(node.end){
//             console.log(word);
//         }
//         for(let char in node.child){
//             this.display(node.child[char],word+char)
//         }
//     }
// }

// let t1 = new trie
// t1.add('althaf')
// t1.add('ameena')
// t1.add('sayyid')
// t1.display()
// console.log(t1.search('althaf'));
// console.log(t1.autoComplete('a'));

class trieNode {
  constructor() {
    this.child = {};
    this.end = false;
  }
}

class trie {
  constructor() {
    this.root = new trieNode();
  }

  add(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.child)) {
        current.child[word[i]] = new trieNode();
      }
      current = current.child[word[i]];
    }
    current.end = true;
  }

  serach(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.child)) {
        return false;
      }
      current = current.child[word[i]];
    }
    return current.end;
  }
  autoComplete(prefix) {
    let current = this.root;
    let suggestions = [];
    for (let i = 0; i < prefix.length; i++) {
      if (!(prefix[i] in current.child)) {
        return suggestions;
      }
      current = current.child[prefix[i]];
    }
    this.comp(current, prefix, suggestions);
    return suggestions;
  }

  comp(current, prefix, suggestions) {
    if (current.end) {
      suggestions.push(prefix);
    }
    for (let char in current.child) {
      this.comp(current.child[char], prefix + char, suggestions);
    }
  }

  display(node = this.root, word = "") {
    if (node.end) {
      console.log(word);
    }
    for (let char in node.child) {
      this.display(node.child[char], word + char);
    }
  }
}

let t1 = new trie();
t1.add("althaf");
t1.add("ameena");
t1.add("liya");
t1.add("luthfy");
t1.display();
console.log(t1.serach("liya"));
