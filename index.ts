import { LinkedList } from "./LinkedList";

const linkedList = LinkedList();
linkedList.append("Hello world");
let head = linkedList.getHead();
console.log(head.next!.value); // Hello, world!

