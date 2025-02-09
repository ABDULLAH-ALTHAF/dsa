class stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()) return "stack is empty"
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()) return "stack is empty"
        console.log(this.items[this.items.length-1]);
    }
    isEmpty(){
        return this.items.length === 0 
    }
    size(){
        return this.items.length
    }
    delete(){
        let mid = Math.floor(this.size()/2)
        this.midHelper(mid)
    }
    midHelper(index,current = 0){
        if(index == current){
            this.pop()
            return
        }
        let temp = this.pop()
        this.midHelper(index,current + 1)
        this.push(temp)
    }
    reverse(){
        if(this.isEmpty()) return 
        let temp = this.pop()
        this.reverse()
        this.insertBottom(temp)
    }
    insertBottom(element){
        if(this.isEmpty()){
            this.push(element)
            return
        }
        let temp = this.pop()
        this.insertBottom(element)
        this.push(temp)
    }
    print(){
        console.log(this.items.toString());
    }
}

let s1 = new stack()
s1.push("a")
s1.push("b")
s1.push("c")
s1.push("d")
s1.push("e")
s1.push("f")
s1.push("g")
s1.print()
console.log('--------------------------');
// s1.delete()
s1.reverse()
s1.print()
// s1.pop()
// s1.pop()
// s1.pop()
// s1.print()
// console.log('--------------------------');
// console.log(s1.peek());