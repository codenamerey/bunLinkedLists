import { Node } from "./Node";

export const LinkedList = function() {
    let head = Node(null, null);

    const getHead = () => {
        return head;
    }

    const append = (value: string) => {

        let currentNode: Node = head;

        while(currentNode.next != null) {
            currentNode = currentNode.next
        }

        currentNode.next = Node(value, null); 
    }

    const prepend = (value: string) => {
        const pastHead = head;
        let newHead = Node(value, null);
        head = newHead;
        head.next = pastHead;
    }

    const getSize = () => {
        let nodesNumber = 0;
        let currentNode = head;
        nodesNumber++
        while(currentNode.next != null) {
            currentNode = currentNode.next;
            nodesNumber++;
        }
        return nodesNumber;
    }

    const getTail = () => {
        let currentNode = head;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    const at = (index : number) => {
        let currentNode : Node = head;
        for(let i = 0; i < index; i++) {
           currentNode = currentNode.next!;
        }
        return currentNode
    }

    const pop = (index : number) => {
        let currentNode : Node = head;
        for(let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next!;
        }
        let nodeToReplace = currentNode.next;
        currentNode.next = nodeToReplace!.next;
    }

    const contains = (value: string) => {
        let currentNode = head;

        do {
            if(currentNode.value == value) {
                return true
            }
            currentNode = currentNode.next!
        } while (currentNode.next != null);

        if(currentNode.value == value) {
            return true
        }

        return false;
    }

    const find = (value: string) => {
        let index = 0;
        let currentNode = head;
        do {
            if(currentNode.value == value) {
                return index
            }
            currentNode = currentNode.next!
            index++;
        } while (currentNode.next != null);

        if(currentNode.value == value) {
            return index
        }
    }

    return { append, prepend, getHead, getSize, getTail, at, pop, contains, find };
}