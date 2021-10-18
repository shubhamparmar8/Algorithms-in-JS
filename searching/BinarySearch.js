const binarySearch = (list, key) => {
  let lower = 0;
  let upper = arr.length - 1;
  let mid = -1;

  while (lower <= upper) {
    mid = Math.floor((lower + upper) / 2);

    if (list[mid] === key) {
      return mid;
    }

    if (list[mid] > key) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
};

const arr = [
  1, 2, 3, 4, 6, 7, 9, 11, 12, 14, 15, 16, 17, 19, 33, 34, 43, 45, 55, 66,
];

const result = binarySearch(arr, 17);

if (result === -1) {
  console.log("Element not found!");
} else {
  console.log(`Element found at index ${result}`);
}
