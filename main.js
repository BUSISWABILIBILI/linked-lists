import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("cat");
list.append("parrot");

list.prepend("dog");

console.log(list.toString());

console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
