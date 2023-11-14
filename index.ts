import { Node } from "typescript";


const Node = function(value: string | null, next: Node | null) {
    return { value, next };
};

const LinkedList = function() {
    const HEAD = Node(null, null);
}