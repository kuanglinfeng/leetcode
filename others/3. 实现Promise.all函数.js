Promise.myAll = promiseList => {
  return new Promise((resolve, reject) => {
    const states = promiseList.map(promise => {
      const state = { data: undefined, isResolved: false };

      promise.then(
        data => {
          state.data = data;
          state.isResolved = true;
          if (states.filter(state => !state.isResolved)) {
            resolve(states.map(state => state.data));
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
