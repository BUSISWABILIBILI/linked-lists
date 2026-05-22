import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());

list.insertAt(1, 10, 11);

console.log(list.toString());
