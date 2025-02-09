class trieNode{
    constructor(){
        this.child = {}
        this.end = false
    }
}

class trie{
    constructor(){
        this.root = new trieNode()
    }
    insert(word){
        let current = this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in current.child)){
                current.child[word[i]] = new trieNode()
            }
            current = current.child[word[i]]
        }
        current.end = true
    }

    search(word){
        let current = this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in current.child)){
                return false
            }
            current = current.child[word[i]]
        }
        return current.end
    }

    auto(prefix){
        let current = this.root
        
    }

    display(node = this.root,word = ''){
        if(node.end){
            console.log(word);
        }
        for(let char in node.child){
            this.display(node.child[char],word+char)
        }
    }
}

let t1 = new trie()
t1.insert('althaf')
t1.display()
console.log(t1.search('althaf'));