const prodIds = `abc
                bdj`; // product ids

// Split, map to the URL format, and join back into a single string
const prodIdsStr = prodIds
  .split('\n')
  .map(ele => `  "https://www.amazon.sa/d/${ele}"`)
  .join(',\n');

console.log(`const links = [\n${prodIdsStr}\n];`);