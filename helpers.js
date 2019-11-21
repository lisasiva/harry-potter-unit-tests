const assertEqual = (expected, actual, testName) => {
  if (expected === actual) {
    console.log(`✓ ${testName}`);
  } else {
    console.log(`x ${testName}.\n-- Expected: ${expected}\n-- Actual: ${actual}`);
  }
}

const assertArraysEqual = (expected, actual, testName) => {
  if (expected.length !== actual.length) {
    console.log(`x ${testName} \n-- Expected: ${expected}\n-- Actual: ${actual}`);
  }

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
        console.log(`x ${testName}\n-- Expected: ${expected}\n-- Actual: ${actual}`);
        return;
    }
  }

  console.log(`✓ ${testName}`);
}

module.exports = { assertEqual, assertArraysEqual };
