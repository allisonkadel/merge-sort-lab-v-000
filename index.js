function mergeSort(array){
  // divide the array into half until only 1-element arrays are left
  array.slice(array.length/2)
}

function findMinAndRemoveSorted(array){
  return array.shift();
}

function merge(array1, array2){
  let sorted = [];
  while (array1.length > 0 && array2.length > 0){
    if (array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1));
    }
    else {
      sorted.push(findMinAndRemoveSorted(array2));
    }
  }
  return sorted.concat(array1, array2);
}