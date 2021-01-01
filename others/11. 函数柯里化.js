function curry(...args1) {
  const x = args1.reduce((prev, cur) => prev + cur);
  return (...args2) => {
    if (args2.length === 0) return x;
    const y = args2.reduce((prev, cur) => prev + cur);
    return curry(x, y);
  };
}

console.log(curry(1, 2, 3)(4, 5)());
