import { LinkedList } from "./LinkedList";

const linkedList = LinkedList();
linkedList.prepend("Hello, world!");
let head = linkedList.getHead();
console.log(head.value); // Hello, world!

