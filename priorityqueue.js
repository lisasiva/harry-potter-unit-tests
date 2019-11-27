// TO DO: Replace with your own path
const PQ = require('./PATH/TO/PRIORITYQUEUE');
const { assertEqual, assertArraysEqual } = require('../test');

const pq = new PQ();

const getProps = (arrOfObj, prop) => {
  const result = [];
  arrOfObj.forEach(obj => result.push(obj[prop]));
  return result;
}

console.log('\nenqueue()');
pq.enqueue('talk to Bertha', 3);
pq.enqueue('get sword', 2);
pq.enqueue('destroy horcrux', 1);
pq.enqueue('cast protection charms', 4);
pq.enqueue('listen to potterwatch', 5);
assertArraysEqual(['destroy horcrux', 'talk to Bertha', 'get sword', 'cast protection charms', 'listen to potterwatch'], getProps(pq.values, 'val'), 'reorders values according to priority');
assertArraysEqual([1, 3, 2, 4, 5], getProps(pq.values, 'priority'), 'creates a valid min binary heap');

console.log('\ndequeue()');
assertEqual('destroy horcrux', pq.dequeue().val, 'returns highest priority item (i.e. lowest priority number)');
assertArraysEqual(['get sword', 'talk to Bertha', 'listen to potterwatch', 'cast protection charms'], getProps(pq.values, 'val'), 'reorders remaining items according to priority');
assertEqual('get sword', pq.dequeue().val, 'returns highest priority item (i.e. lowest priority number)');
assertEqual('talk to Bertha', pq.dequeue().val, 'returns highest priority item (i.e. lowest priority number)');
pq.dequeue();
pq.dequeue();
assertEqual(undefined, pq.dequeue(), 'returns undefined when heap is empty');
