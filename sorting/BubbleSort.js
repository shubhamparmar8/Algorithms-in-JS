const bubbleSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        
        //swap
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return list;
};

const arr = [2, 7, 4, 1, 5, 3];
console.log(bubbleSort(arr));
