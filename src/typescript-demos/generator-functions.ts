const createIncrement = function* (startFrom: number) {
  yield startFrom++;
  yield startFrom++;
  yield startFrom++;
  yield startFrom++;
};

const incrementor = createIncrement(5);

console.log(incrementor.next());
console.log(incrementor.next());
console.log(incrementor.next());
console.log(incrementor.next());
console.log(incrementor.next());
