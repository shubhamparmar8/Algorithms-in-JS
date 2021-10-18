const bubbleSort = (arr) => {
  const list = [...arr];

  for (let i = 0; i < list.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        //swap
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;

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
