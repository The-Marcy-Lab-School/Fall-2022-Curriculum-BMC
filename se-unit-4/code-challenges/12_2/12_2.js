function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}
