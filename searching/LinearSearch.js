const arr = [2, 7, 4, 1, 5, 3];

// using Array.prototype.indexOf
const result = arr.indexOf(1);
if (result === -1) {
  console.log("Element not found");
} else {
  console.log(`Element found at index ${result}`);
}

// using ES6 syntax (High order array function)
const linearSearch = (list, key) => {
  const found = list.find((element) => element === key);

  if (found) {
    console.log("Element found");
  } else {
    console.log("Element not found");
  }
};

// linearSearch(arr, 37);
