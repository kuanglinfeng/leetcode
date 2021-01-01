// 实现function(func, times, wait){}，
// 传入func每隔wait时间，执行一次，执行times次

function run(func, times, wait) {
  if (times === 0) return;
  setTimeout(() => {
    func();
    times--;
    run(func, times, wait);
  }, wait);
}

const fn = () => {
  console.log('执行了');
};

run(fn, 9, 1000);
