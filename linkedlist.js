class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;     
      this.nextNode = nextNode;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null; 
      this.length = 0;     
    }

    append(value){
        const newNode = new Node(value);
        if(this.headNode == null){
            this.headNode = newNode
        }
        else{
            let currentNode = this.headNode
            while(currentNode.nextNode !== null){
                currentNode = currentNode.nextNode
            }
            currentNode.newNode = newNode
        }
        this.length++
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.nextNode = this.headNode
        this.headNode = newNode 
        this.length++
    }

    size(){
        return this.length
    }

    head(){
        return this.headNode
    }

    tail(){
        if(this.headNode == null) return
        else{
            let currentNode = this.headNode
            while(currentNode.nextNode != null){
                currentNode = currentNode.nextNode
            }
            return currentNode
        }
    }

    at(index){
        let currentIndex = 0
        while(currentIndex<index){
            currentNode = currentNode.nextNode
            currentIndex ++
        }
        return currentNode
    }

    pop(){
        if(this.headNode == null) return null
        else{
            currentNode = this.headNode
            while(currentNode.nextNode != null){
                currentNode = currentNode.nextNode
            }
        }
    }
  }
  