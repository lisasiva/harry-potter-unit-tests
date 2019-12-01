// TO DO: Replace with your own path
const DoublyLinkedList = require('./PATH/TO/LINKEDLIST');
const { assertEqual, assertArraysEqual } = require('./helpers');

const list = new DoublyLinkedList();

console.log('\npush()')
list.push('Gryffindor');
assertEqual('Gryffindor', list.head.val, 'creates head when list is empty');
list.push('Ravenclaw');
list.push('Hufflepuff');
list.push('Slytherin');
assertEqual('Slytherin', list.tail.val, 'maintains correct order of elements');
assertEqual(4, list.length, `increments length when called`);
assertEqual('Ravenclaw', list.head.next.next.prev.val, 'correctly sets previous pointer on middle element');

console.log('\npop()');
assertEqual('Slytherin', list.pop().val, 'pops tail when list has length 4');
assertEqual('Hufflepuff', list.tail.val, 'updates tail');
assertEqual(3, list.length, 'decrements length when called');
list.pop();
list.pop();
assertEqual('Gryffindor', list.pop().val, 'pops head when list has length 1');
assertEqual(null, list.head, 'reassigns head to null when list has length 1');
assertEqual(null, list.tail, 'reassigns tail to null when list has length 1');
assertEqual(undefined, list.pop(), 'returns undefined when list is empty');

console.log('\nshift()');
list.push('Gryffindor');
list.push('Ravenclaw');
list.push('Hufflepuff');
list.push('Slytherin');
assertEqual('Gryffindor', list.shift().val, 'removes head when list has length 4');
assertEqual(3, list.length, 'decrements length when called');
list.shift();
assertEqual('Hufflepuff', list.head.val, 'reassigns head');
assertEqual(null, list.head.prev, 'severs connection to old head');
list.shift();
assertEqual('Slytherin', list.shift().val, 'works when list has length 1');
assertEqual(null, list.tail, 'reassigns tail to null when list has length 1');
assertEqual(undefined, list.shift(), 'returns undefined when list is empty');

console.log('\nunshift()');
list.pop();
list.pop();
list.pop();
list.pop();
list.unshift('Slytherin');
assertEqual('Slytherin', list.head.val, 'works when list is empty');
assertEqual('Slytherin', list.tail.val, 'sets tail equal to head when list is empty');
list.unshift('Hufflepuff');
list.unshift('Ravenclaw');
list.unshift('Gryffindor');
assertEqual('Hufflepuff', list.tail.prev.val, `updates old head's prev pointer`);
assertEqual('Ravenclaw', list.head.next.val, `updates new head's next pointer`);

console.log('\nget()');
assertEqual('Ravenclaw', list.get(1).val, 'works when index is in first half of list');
assertEqual('Hufflepuff', list.get(2).val, 'works when index is in second half of list');
assertEqual(null, list.get(33), 'returns when index is out of bounds');

console.log('\nset()');
assertEqual(true, list.set(1, 'Ravendor'), 'returns true when set is successful');
assertEqual('Ravendor', list.get(1).val, 'updates value of node at given index');
assertEqual(4, list.length, 'does not change length of list');
assertEqual(false, list.set(5, 'Slytherclaw'), 'returns false if node is not found');
list.set(1, 'Ravenclaw');

console.log('\ninsert()');
assertEqual(true, list.insert(4, 'Slytherpuff'), 'returns true when insert is successful');
assertEqual('Slytherpuff', list.tail.val, 'inserts new tail when index is length');
list.insert(0, 'Gryffinclaw')
assertEqual('Gryffinclaw', list.head.val, 'inserts new head when index is 0');
// Gryffinclaw Gryffindor Ravenclaw Hufflepuff Slytherin Slytherpuff
list.insert(3, 'Ravenpuff');
assertEqual('Ravenpuff', list.get(3).val, 'inserts new node at middle index');
assertEqual('Ravenpuff', list.get(2).next.val, 'node at index - 1 points to new node');
assertEqual('Ravenpuff', list.get(4).prev.val, 'node at index + 1 points to new node');
// Gryffinclaw Gryffindor Ravenclaw Ravenpuff Hufflepuff Slytherin Slytherpuff
assertEqual(7, list.length, 'increments length');

console.log('\nremove()');
assertEqual('Gryffinclaw', list.remove(0).val, 'returns head when index is 0');
assertEqual('Slytherpuff', list.remove(list.length - 1).val, 'returns tail when index is length - 1');
assertEqual(null, list.remove(2).next, 'sets next property on removed node to null');
assertEqual(4, list.length, 'decrements length');
assertEqual(null, list.remove(-1), 'returns null when index is out of bounds');

console.log('\nreverse()');
assertEqual(4, list.reverse().length, 'maintains same number of nodes');
assertEqual('Slytherin', list.get(0).val, 'tail becomes head');
assertEqual('Gryffindor', list.get(3).val, 'head becomes tail');
assertEqual('Hufflepuff', list.get(1).val, 'switches middle nodes');
assertEqual('Ravenclaw', list.get(2).val, 'switches middle nodes');
