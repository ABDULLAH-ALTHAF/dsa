class heap{
    constructor(){
        this.heap = []
    }

    insert(data){
        this.heap.push(data)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parent = Math.floor((index-1)/2)
        if(index>0 && this.heap[index]>this.heap[parent]){
            [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]]
            this.heapifyUp(parent)
        }
    }

    extract(){
        if(this.heap.length == 0 ) return null
        if(this.heap.length == 1 ) return this.heap.pop()
            this.root = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifyDown(0)
    }

    heapifyDown(i){
        let left = 2*i+1
        let right = 2*i+2
        let smaller = i

        if(left<this.heap.length && this.heap[left]>this.heap[smaller]){
            smaller = left
        }
        if(right<this.heap.length && this.heap[right]>this.heap[smaller]){
            smaller = right
        }

        if(i!=smaller){
            [this.heap[i],this.heap[smaller]] = [this.heap[smaller],this.heap[i]]
            this.heapifyDown(smaller)
        }


    }

    display(){
        console.log(this.heap);
    }
}

let h1 = new heap()
h1.insert(2)
h1.insert(4)
h1.insert(3)
h1.insert(1)
h1.insert(5)

h1.display()
h1.extract()
h1.display()