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
            currentNode.nextNode = newNode
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
            let currentNode = this.headNode
            let previousNode = null

            while(currentNode.nextNode != null){
                previousNode = currentNode
                currentNode = currentNode.nextNode
            }
            previousNode.nextNode = null
            this.length--
            return currentNode
        }
    }

    contains(value){
        let currentNode = this.headNode
        while(currentNode != null){
            if(currentNode.value == value){
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    find(value){
        let currentNode = this.headNode
        let currentIndex = 0
        while(currentNode != null){
            if(currentNode.value == value){
                return currentIndex
            }
            currentNode = currentNode.nextNode
            currentIndex++
        }
        return null
    }

    toString(){
        let result = ""
        let currentNode = this.headNode
        while(currentNode != null){
            result += `(${currentNode.value})->`
            currentNode = currentNode.nextNode
        }
        result+= null
        return result
    }
  }
  

  export default LinkedList