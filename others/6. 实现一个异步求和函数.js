// 提供一个异步add方法如下，需要实现一个await sum(...args)函数

function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}

asyncAdd(1, 4, (error, addResult) => {
  // 5
  console.log(addResult);
});

async function sum(...args) {
  if (args.length <= 1) return args[0];

  const addResult = await new Promise(resolve => {
    asyncAdd(args[0], args[1], (error, value) => {
      if (!error) {
        resolve(value);
      }
    });
  });

  return sum(addResult, ...args.splice(2));
}

// sum(1, 2, 3, 4, 5).then(data => {
//   console.log(data);
// });

// 加强版，可以缩短运行时长
function addPlus(a, b = 0) {
  return new Promise(resolve => {
    asyncAdd(a, b, (error, result) => {
      if (!error) {
        resolve(result);
      }
    });
  });
}

async function sumPlus(...args) {
  if (args.length <= 1) return args[0];
  const result = [];
  for (let i = 0; i < args.length; i = i + 2) {
    result.push(addPlus(args[i], args[i + 1]));
  }
  return sumPlus(...(await Promise.all(result)));
}

sumPlus(1, 2, 3, 4, 5).then(data => {
  console.log(data);
});
