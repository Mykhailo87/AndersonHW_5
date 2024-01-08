class Node {
    constructor(elem) {
        this.element = elem;
        this.next = null;
    }
}

class Stack {
    constructor(maxElementsAmount = 10) {
        if (!this.isValidNumber(maxElementsAmount)) {
            throw new Error('Value is not a number');
        }
        
        this.maxElementsAmount = maxElementsAmount;
        this.length = 0;
        this.head = null;
    }

    push(elem) {
        if (this.length === this.maxElementsAmount) {
            throw new Error('Stack is full');
        }

        let node = new Node(elem);

        node.next = this.head;
        this.head = node;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Stack is empty');
        }

        let current = this.head;

        if (current) {
            let element = current.element;
            current = current.next;
            this.head = current;
            this.length--;
            return element;
        }

    }

    peek() {
        if(this.length === 0) {
            return null;
        }

        return this.head.element;
    }

    isEmpty() {
        return this.length === 0;
    }

    toArray() {
        let arr = [];
        let current = this.head

        while(current){
            arr.push(current.element);
            current = current.next;
        }

        return arr;
    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Value is not iterable');
        }
        
        let stackFromIterable = new Stack(iterable.length);

        for (const item of iterable) {
            stackFromIterable.push(item);
        }

        return stackFromIterable;
    }

    isValidNumber(num) {
        return typeof num === 'number' && isFinite(num) && !isNaN(num);
    }
} 

module.exports = { Stack };