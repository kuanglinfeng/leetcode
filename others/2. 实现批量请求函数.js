// 要求：

// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出
let a = 'https://dog.ceo/api/breeds/image/random';
let b = 'https://dog.ceo/api/breeds/image/random';
let c = 'https://dog.ceo/api/breeds/image/random';
let d = 'https://dog.ceo/api/breeds/image/random';
let e = 'https://dog.ceo/api/breeds/list';
let f = 'https://dog.ceo/api/breeds/image/random';

let urls = [a, b, c, d, e, f];

const fetch = url => {
  return new Promise((resolve, reject) => {
    console.log('请求了');
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
};

function multiRequest(urls, maxNum) {
  let i = 0; // 执行任务的下标
  let result = [];
  return new Promise(resolve => {
    while (i < maxNum) {
      addTask();
      i++;
    }
    function addTask() {
      result[i] = fetch(urls[i]);
      result[i].then(() => {
        if (i >= urls.length) {
          resolve();
        } else {
          addTask();
          i++;
        }
      });
    }
  }).then(() => Promise.all(result));
}
multiRequest(urls, 5).then(res => {
  console.log(res);
});
