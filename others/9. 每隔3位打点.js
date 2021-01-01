// 123456790  ->   1,234,567,890   每千位加个" , "

function format(str) {
  const arr = [];
  let temp = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    arr.unshift(str[i]);
    if (temp === 2) {
      temp = 0;
      arr.unshift(',');
    } else {
      temp++;
    }
  }
  return arr.join('');
}
