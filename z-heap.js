class MinHeap {
    constructor() {
        this.heap = [];
    }


    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }


    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }


    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }


    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        let left = this.getLeftChildIndex(index);
        let right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }


    getMin() {
        return this.heap.length ? this.heap[0] : null;
    }


    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }


    heapSort() {
        let sorted = [];
        while (this.heap.length) {
            sorted.push(this.extractMin());
        }
        return sorted;
    }


    printHeap() {
        console.log(this.heap);
    }
}


let heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(3);
heap.insert(8);

console.log("Heap Elements:");
heap.printHeap();

console.log("Extracted Min:", heap.extractMin());
console.log("Heap after Extraction:");
heap.printHeap();

console.log("Heap Sort Output:", heap.heapSort());
