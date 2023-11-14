export interface Node {
    next: Node | null
    value: string | null
}

export const Node = function(value: string | null, next: Node | null) {
    return { value, next };
};