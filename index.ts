import { LinkedList } from "./LinkedList";

const linkedList = LinkedList();
linkedList.prepend("Hello, world!");
linkedList.append("Some value");
linkedList.append("Tail value");
linkedList.pop(2);
const thirdNode = linkedList.at(2);
console.log(thirdNode.value); // Tail value

