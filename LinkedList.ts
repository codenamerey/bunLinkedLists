import { Node } from "./Node";

export const LinkedList = function() {
    const HEAD = Node(null, null);

    const append = (value: string) => {

        let currentNode: Node = HEAD;

        while(currentNode.next != null) {
            currentNode = currentNode.next
        }

        currentNode.next = Node(value, null); 
    }

    return { append }

}