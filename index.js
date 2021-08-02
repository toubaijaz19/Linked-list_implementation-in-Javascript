/** Class representing a Linked List */

class LinkedList {
  // class constructor
  constructor(value) {
    this.head = { value, next: null}; //node represent start of the list
    this.tail = this.head; //node represent end of the list
  }
  // insertion
   /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) { 
    const tempNode = {value, next: null};
    this.tail.next = tempNode;
    this.tail = tempNode;
  }
  // Deletion
  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
  removeTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */
  remove(value) {
    let currentNode = this.head;
    // if value is equal to head value
    if(this.head.value== value){
      let nextHeadNode = this.head.next;
      this.head.next = null;
      this.head = nextHeadNode;
    } 
    // if value is equal to tail value 
    else if(this.tail.value == value){
      while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    // if value is anywhere between head and tail 
    else {
      // loop for finding the node that's equal to value deletion
      while (currentNode.value !== value) {
        if( currentNode !== this.tail){ 
          currentNode = currentNode.next;
        }
        else{
          break;
        }
      }
      if(currentNode.value === value){
        let prev = currentNode;
        while(currentNode!==this.tail)
        {
          let temp = currentNode.value;
          currentNode.value = currentNode.next.value;
          currentNode.next.value = temp;
          prev = currentNode;
          currentNode = currentNode.next;
        }
        prev.next = null;
        this.tail = prev;
      } else{
        console.log(value," not found in the list!");
      }   
    }

  }
  // Display
  display(){
    let currNode = this.head;
    while(currNode !== this.tail){
      console.log(currNode.value);
      currNode = currNode.next;
    }
    console.log(currNode.value);
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(val) {
    let currentNode = this.head;
    while (currentNode.value !== val) {
      if( currentNode !== this.tail){ 
      currentNode = currentNode.next;
      }
      else{
        break;
      }
    }
    return currentNode.value === val;
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) {
    return node === this.head;
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) {
    return node === this.tail;
  }
}



const myList = new LinkedList(1); //initiate?

// {
//   head: {value: 1, next: null}
//   tail: {value: 1, next: null}
// }
myList.insert(2)
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
myList.insert(3)
// {
//  head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//   tail: {value: 3, next: null}
// }
myList.insert(4)
myList.insert(5)
myList.insert(6)
myList.insert(7)
// console.log(myList);

// Deletion
// myList.removeTail();
// console.log('After removing last node in the list : ');
// console.log(myList);

// console.log('After removing first value in the list : ');
// myList.remove(1);
// console.log(myList);

// console.log('After removing last value in the list : ');
// myList.remove(7);
// console.log(myList);

// console.log(myList);

// console.log('After removing value anywhere in the list : ');
// myList.remove(2);
// console.log(myList);

// console.log('After passing value that did not exist in the list : ');
// myList.remove(8);


// console.log('Linked List values : ');
// myList.display();

// console.log(myList.contains(8));






