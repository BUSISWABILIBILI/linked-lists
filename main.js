import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");

console.log(list.toString());

console.log("At index 2:", list.at(2));

console.log("Contains cat:", list.contains("cat"));

console.log("Contains snake:", list.contains("snake"));

console.log("Find parrot:", list.findIndex("parrot"));

console.log("Find turtle:", list.findIndex("turtle"));
