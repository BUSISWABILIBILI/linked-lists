import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log("Size:", list.size());

console.log("Head:", list.head());

console.log("Tail:", list.tail());

console.log("At index 2:", list.at(2));

console.log("Contains hamster:", list.contains("hamster"));

console.log("Find snake:", list.findIndex("snake"));

console.log("Pop:", list.pop());

console.log(list.toString());

list.insertAt(2, "lion", "elephant");

console.log(list.toString());

console.log("Removed:", list.removeAt(3));

console.log(list.toString());
