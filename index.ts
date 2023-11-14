interface Node {
    next: Node | null
    value: string | null
}

const Node = function(value: string | null, next: Node | null) {
    return { value, next };
};

const LinkedList = function() {
    const HEAD = Node(null, null);
}