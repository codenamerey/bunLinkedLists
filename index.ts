import { Node } from "typescript";


const Node = function(value: string, next: Node) {
    return { value, next };
};