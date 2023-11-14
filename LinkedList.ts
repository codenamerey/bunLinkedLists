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

    return { append, prepend, getHead }

}