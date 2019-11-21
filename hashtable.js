// TO DO: Replace with your own path
const HashTable = require('./PATH/TO/HASHTABLE');
const { assertEqual, assertArraysEqual } = require('./helpers');

const table = new HashTable();
table.set('serpensortia', 'summons snakes');
table.set('wingardium leviosa', 'levitates an object');
table.set('accio', 'summons an object');
table.set('avada kedavra', 'unforgivable');
table.set('crucio', 'unforgivable');
table.set('imperio', 'unforgivable');
table.set('repairo', 'repairs an object');
table.set('sectumsempra', 'for enemies');
table.set('lumos', 'lights tip of wand');
table.set('nox', 'extinguishes light from wand');
table.set('alohomora', 'picks locks');
table.set('expelliarmus', 'disarms opponent');
table.set('riddikulus', 'dispels a boggart');
table.set('expecto patronum', 'produces a patronus');
table.set('obliviate', 'wipes memory');
table.set('aguamenti', 'produces water from water');
table.set('finite incantatum', 'stops current spells');
table.set('avis', 'produces birds');
table.set('confundus', 'used to confuse opponents');
table.set('petrificus totalus', 'temporarily petrifies opponent');
table.set('incendio', 'starts a fire');
table.set('legilimens', 'reads minds');
table.set('impedimenta', 'slows an advancing opponent');
table.set('rictusempra', 'tickles opponent');
table.set('sonorus', 'amplifies voice');
table.set('quietus', 'diminishes voice');
table.set('stupefy', 'stuns opponent');
table.set('morsmorde', 'conjures dark mark');

// Collisions:
// 29 - crucio, morsmorde
// 33 - sectumsempra, avis
// 39 - avada kedavra, stupefy

console.log('\nget(key)')
assertEqual('lights tip of wand', table.get('lumos'), 'returns correct pair from index with no collisions');
assertEqual('conjures dark mark', table.get('morsmorde'), 'returns correct pair from index with collisions');
assertEqual(undefined, table.get('tarantallegra'), 'returns undefined if key is not found');

// Optional
//assertEqual('slows an advancing opponent', table.get('iMpedimEnta'), 'works with differently cased key');

console.log('\nkeys()');
const keys = table.keys();
assertEqual(28, keys.length, 'returns correct number of keys with no extra spaces');
assertEqual(true, keys.indexOf('expecto patronum') !== -1, 'returns key at index with only one pair');
assertEqual(true, keys.indexOf('crucio') !== -1, 'returns all keys at index with multiple pairs');
assertEqual(true, keys.indexOf('morsmorde') !== -1, 'returns all keys at index with multiple pairs');

console.log('\nvalues()');
const values = table.values();
assertEqual(true, values.indexOf('levitates an object') !== -1, 'returns value at index with only one pair');
assertEqual(true, values.indexOf('unforgivable') !== -1, 'returns all values at index with multiple pairs');
assertEqual(true, values.indexOf('conjures dark mark') !== -1, 'returns all values at index with multiple pairs');
assertEqual(26, values.length, 'returns correct number of values with no extra spaces, no repeats');

// If returning all values, including repeats
//assertEqual(28, values.length, 'returns correct number of keys with no extra spaces');
