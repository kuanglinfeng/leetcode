// 4. 实现一个函数a，使其奇数次调用时返回1，偶数次调用时返回2（不能使用全局变量）
const a = (() => {
  var index = 0;
  function inner() {
    return (index++ % 2) + 1;
  }
  return inner;
})();

console.log(a());
console.log(a());
console.log(a());
console.log(a());
