class treeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new treeNode(value)

        if(!this.root){
            this.root = newNode
            return
        }
        let current = this.root

        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left = newNode
                    return
                }
                current = current.left
            }else{
                if(!current.right){
                    current.right = newNode
                    return
                }
                current = current.right     
            }
        }
    }

    findMin(){
        let node = this.root
        while(node.left){
            node = node.left
        }
        return node.value
    }
    findMax(){
        let node = this.root
        while(node.right){
            node = node.right
        }
        return node.value
    }

    minValue(root){
        while(root&&root.left) root = root.left
        return root.value
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root)return null
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left) return root.right
            if(!root.right) return root.left

            let minValue = this.minValue(root.right)
            this.root = minValue
            root.right = this.deleteNode(root.right,minValue)
        }
        return root
    }

    search(value){
        let current = this.root
        while(current){
            if(value == current.value) return true
            current = value < current.value ? current.left : current.right
        }
        return false
    }
    preOrder(node = this.root){
        if(!node){
            return
        }
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)
    } 
}


let bst1 = new BST()

bst1.insert(1)
bst1.insert(2)
bst1.insert(3)
bst1.insert(4)
bst1.insert(5)
bst1.insert(6)

// console.log(bst1.search(7));
// console.log(bst1.findMin());
// console.log(bst1.findMax());
console.log(bst1.preOrder());
bst1.delete(4)
console.log('================');
console.log(bst1.preOrder());