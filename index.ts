import { LinkedList } from "./LinkedList";

const linkedList = LinkedList();
linkedList.prepend("Hello, world!");
linkedList.append("Some value");
const tail = linkedList.getTail();
console.log(tail.value); // Some value

