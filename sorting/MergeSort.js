const merge = (list, left, right) => {
  let i = 0,
    j = 0,
    k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      list[k] = left[i];
      i++;
    } else {
      list[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    list[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    list[k] = right[j];
    j++;
    k++;
  }

  return list;
};

const mergeSort = (list) => {
  const n = list.length;

  if (n < 2) {
    return list;
  }

  const mid = Math.floor(n / 2);
  const left = new Array(mid);
  const right = new Array(n - mid);

  for (let i = 0; i < mid; i++) {
    left[i] = list[i];
  }

  for (let i = mid; i < n; i++) {
    right[i - mid] = list[i];
  }

  mergeSort(left);
  mergeSort(right);
  merge(list, left, right);

  return list;
};

const arr = [2, 7, 4, 1, 5, 3];
console.log(mergeSort(arr));
