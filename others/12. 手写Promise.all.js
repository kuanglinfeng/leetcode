Promise.myAll = function (promiseList) {
  return new Promise((resolve, reject) => {
    const states = promiseList.map(promise => {
      const state = { value: undefined, isResolved: false };
      promise.then(
        value => {
          state.value = value;
          state.isResolved = true;
          if (!states.find(state => !state.isResolved)) {
            resolve(states.map(state => state.value));
          }
        },
        reason => {
          reject(reason);
        }
      );
      return state;
    });
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, Math.random() * 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2');
  }, Math.random() * 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3');
  }, Math.random() * 1000);
});

Promise.myAll([p1, p2, p3]).then(value => {
  console.log(value);
});
