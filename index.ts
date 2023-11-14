import { LinkedList } from "./LinkedList";

const linkedList = LinkedList();
linkedList.prepend("Hello, world!");
linkedList.append("Some value");
linkedList.append("Tail value");

const thirdNode = linkedList.at(2);
console.log(thirdNode.value); // Some value

