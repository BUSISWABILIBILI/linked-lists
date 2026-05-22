import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");

console.log(list.toString());

console.log("Removed:", list.removeAt(2));

console.log(list.toString());
