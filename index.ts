import { LinkedList } from "./LinkedList";

const linkedList = LinkedList();
linkedList.prepend("Hello, world!");
linkedList.append("Some value");
linkedList.append("Tail value");
console.log(linkedList.toString()); // ( Hello, world! ) -> ( null ) -> ( Some value ) -> ( Tail value )

