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

    return { append, prepend, getHead, getSize, getTail, at };
}