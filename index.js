function mergeSort(array){
  
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