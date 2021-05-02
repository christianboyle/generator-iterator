const arr = [1, 2, 3];

function* myFunciton(array) {
  for (let v of array) {
    yield v;
  }
}

const res = myFunciton(arr);

console.log(res.next()); // { value: 1, done: false }
console.log(res.next()); // { value: 2, done: false }
console.log(res.next()); // { value: 3, done: false }
console.log(res.next()); // { value: undefined, done: true }