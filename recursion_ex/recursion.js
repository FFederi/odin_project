function sumRange(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumRange(n - 1);
}

function power(b, e) {
  if (e === 0) {
    return 1;
  }
  return b * power(b, e - 1);
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function all(arr, f) {
  if (arr.length === 0) return true;
  if (f(arr[0])) {
    return all(arr.splice(1), f);
  } else {
    return false;
  }
}

function arrayProduct(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * arrayProduct(arr.splice(1));
}
