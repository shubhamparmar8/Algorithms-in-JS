const partition = (list, start, end) => {
  const pivot = list[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (list[i] <= pivot) {
      [list[i], list[pIndex]] = [list[pIndex], list[i]];
      pIndex++;
    }
  }
  [list[pIndex], list[end]] = [list[end], list[pIndex]];
  return pIndex;
};

const quickSort = (list, start, end) => {
  if (start < end) {
    const pIndex = partition(list, start, end);
    quickSort(list, start, pIndex - 1);
    quickSort(list, pIndex + 1, end);
  }
  return list;
};

const arr = [2, 7, 4, 1, 5, 3];
console.log(quickSort(arr, 0, arr.length - 1));
