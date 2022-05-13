const createIncrementor = (startFrom: number) => {
  let currentIndex = startFrom;
  return () => currentIndex++;
};

const increment = createIncrementor(5);

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
