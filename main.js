import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");

console.log(list.toString());

console.log("Removed:", list.pop());

console.log(list.toString());
