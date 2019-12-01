// TO DO: Replace with your own path
const LinkedList = require('./PATH/TO/LINKEDLIST');
const { assertEqual, assertArraysEqual } = require('./helpers');

function resetList(list) {
  list.push('Gryffindor');
  list.push('Ravenclaw');
  list.push('Hufflepuff');
  list.push('Slytherin');
}

const list = new LinkedList();
resetList(list);

// Testing push()
console.log('\npush()');
assertEqual(4, list.length, 'adds items to list without overriding ');
assertEqual('Gryffindor', list.head.val, 'maintains correct head value');
assertEqual('Slytherin', list.tail.val, 'maintains correct tail value');

// Testing pop()
console.log('\npop()');
assertEqual('Slytherin', list.pop().val, 'returns the tail when list has length 4');
assertEqual(3, list.length, 'decreases length by one');
assertEqual('Hufflepuff', list.tail.val, 'sets new tail');
list.pop();
list.pop();
assertEqual('Gryffindor', list.pop().val, 'returns the tail when list has length 1');
assertEqual(null, list.pop(), 'returns null when list is empty');

// Testing shift()
resetList(list);

console.log('\nshift()');
assertEqual('Gryffindor', list.shift().val, 'returns the head when list has length 4');
assertEqual(3, list.length, 'decreases length by one');
list.shift();
list.shift();
assertEqual('Slytherin', list.shift().val, 'returns the head when list has length 1');
assertEqual(null, list.shift(), 'returns null when list is empty');
assertEqual(null, list.tail, 'sets tail to null when all items have been shifted out');

// Testing unshift()
list.unshift('Slytherin');

console.log('\nunshift()');
assertEqual('Slytherin', list.head.val, 'creates new head when list is empty');
assertEqual('Slytherin', list.tail.val, 'creates new tail when list is empty');

list.unshift('Hufflepuff');
assertEqual('Hufflepuff', list.head.val, 'adds to head when list has length 1');

list.unshift('Ravenclaw');
assertEqual('Ravenclaw', list.head.val, 'adds to head when list has length 2');
list.unshift('Gryffindor');
assertEqual(4, list.length, 'increments length by 1 with each unshift');

// Testing get()
console.log('\nget()');
assertEqual(null, list.get(12), 'returns null when index is out of bounds');
assertEqual('Gryffindor', list.get(0).val, 'returns head when index is 0');
assertEqual('Ravenclaw', list.get(1).val, 'returns item at some middle index');
assertEqual('Slytherin', list.get(3).val, 'returns tail when index is length - 1');

// Testing set()
console.log('\nset()');
assertEqual(false, list.set(12, 'Gryffinclaw'), 'returns false if index is not found');
assertEqual(true, list.set(0, 'Gryffinclaw'), 'returns true if index is found');
assertEqual('Gryffinclaw', list.get(0).val, 'updates the value of the item at index 0');

list.set(1, 'Ravendor');

assertEqual('Ravendor', list.get(1).val, 'updates the value of the item at middle index');
list.set(0, 'Gryffindor');
list.set(1, 'Ravenclaw');

// Testing insert()
console.log('\ninsert()');
assertEqual(false, list.insert(12, 'Hufflepuff'), 'returns false if index > length');
assertEqual(true, list.insert(1, 'Gryffinclaw'), 'returns true if successfully inserted in the middle');
assertEqual('Gryffinclaw', list.get(1).val, 'inserts value at correct index when length is 3');
assertEqual('Ravenclaw', list.get(2).val, 'does not override node previously at that index');
assertEqual(5, list.length, 'increments length by one each insertion');
assertEqual(true, list.insert(5, 'Ravendor'), 'returns true if successfully pushed at the end');
assertEqual('Ravendor', list.get(5).val, 'inserts value at the end when index === length');


// Testing remove() - currently, list is Gryffindor -> Gryffinclaw -> Ravenclaw -> Hufflepuff -> Slytherin -> Ravendor
console.log('\nremove()');
assertEqual('Ravendor', list.remove(5).val, 'works on the last node in the list');
assertEqual(5, list.length, 'decrements length of list by one');
assertEqual('Gryffinclaw', list.remove(1).val, 'works on a middle node in the list');
assertEqual(4, list.length, 'decrements length of list by one');
assertEqual('Ravenclaw', list.get(1).val, 'leaves no gap in the list');


// Testing reverse()
console.log('\nreverse()');

list.reverse();

assertEqual('Slytherin', list.get(0).val, 'tail becomes head');
assertEqual('Hufflepuff', list.get(1).val, 'middle nodes are reversed');
assertEqual('Ravenclaw', list.get(2).val, 'middle nodes are reversed');
assertEqual('Gryffindor', list.get(3).val, 'head becomes tail');
