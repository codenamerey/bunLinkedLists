interface Node {
    next: Node | null
    value: string | null
}

const Node = function(value: string | null, next: Node | null) {
    return { value, next };
};

const LinkedList = function() {
    const HEAD = Node(null, null);

    const append = (value: string) => {

        let currentNode: Node = HEAD;

        while(currentNode.next != null) {
            currentNode = currentNode.next
        }

        currentNode.next = Node(value, null); 
    }

}