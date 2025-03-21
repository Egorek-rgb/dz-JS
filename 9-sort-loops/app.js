arr = [1, 40, -5, 10, 0, 1, 2, 3, 4, 5, 0, -1, -2, -3];

function mySort(array, typeOfSort) {
  isChange = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (isChange) {
      i--;
    }
    for (let j = i + 1; j < array.length; j++) {
      if (typeOfSort === "По возрастанию") {
        if (array[j] < array[i]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      } else if (typeOfSort === "По убыванию") {
        if (array[j] > array[i]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}

console.log(mySort(arr, "По убыванию"));
