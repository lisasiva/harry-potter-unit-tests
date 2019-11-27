// TO DO: Replace with your own path
const Heap = require('./PATH/TO/MAXBINARYHEAP');
const { assertEqual, assertArraysEqual } = require('./helpers');

const heap = new Heap();

console.log('\ninsert()');
heap.build([41, 39, 33, 18, 27, 12]);
heap.insert(55);
assertArraysEqual([55, 39, 41, 18, 27, 12, 33], heap.values, 'bubbles up element to top');
heap.insert(1);
assertArraysEqual([55, 39, 41, 18, 27, 12, 33, 1], heap.values, 'leaves correctly-placed item at end');
heap.insert(45);
assertArraysEqual([55, 45, 41, 39, 27, 12, 33, 1, 18], heap.values, 'bubbles up element to middle');

console.log('\nextractMax()');
assertEqual(55, heap.extractMax(), 'returns max value from heap');
assertArraysEqual([45, 39, 41, 18, 27, 12, 33, 1], heap.values, 'reorders remaining elements in heap');
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
assertEqual(undefined, heap.extractMax(), 'returns undefined when list is empty');
assertArraysEqual([], heap.values, 'empties array when all items have been extracted');


//[55, 45, 41, 39, 27, 12, 33, 1, 18]
//[45, 39, 41, 18, 27, 12, 33, 1]
