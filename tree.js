class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    add(value){
        let newNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode
            return
        }
        let queue = [this.root]
        while(queue.length){
            let current = queue.shift()

            if(!current.left){
                current.left = newNode
                return
            }else if(!current.right){
                current.right = newNode
                return
            }

            queue.push(current.left)
            queue.push(current.right)

        }

    }
    //style of output will be (left,root,right) 
    inOrderTraversal(node = this.root){
        if(!node){
            return  
        }
        this.inOrderTraversal(node.left)
        console.log(node.value);
        this.inOrderTraversal(node.right)
    }
    //style of output will be (root,left,right)
    preOrder(node = this.root){
        if(!node){
            return
        }
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)
    } 
    //style of output will be (left,right,root)
    postOrder(node = this.root){
        if(!node){
            return
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value);
    }
    
    //style of output will be (1 by 1 as per order)
    levelOrder(){
        if(!this.root) return
        let queue = [this.root]

        while(queue.length){
            let node = queue.shift()
            console.log(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    


}

let tree = new BinaryTree()

tree.add(1)
tree.add(2)
tree.add(3)
tree.add(4)
tree.add(5)

console.log('in order :') 
tree.inOrderTraversal()
console.log('pre order :')
tree.preOrder()
console.log('post order :')
tree.postOrder()
console.log('level order :')
tree.levelOrder()
