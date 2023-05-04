/**
 * 判断 n 是否是质数
 * 质数: 仅能被1和自身整除
 * @param {*} n
 */
export default function (n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      // 发现 2 到 n-1 之间有一个数可以整除 n
      return false;
    }
  }
  return true;
}
