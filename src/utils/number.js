import isPrime from "./isPrime";

export default class NumberTimer {
  constructor(duration = 500) {
    this.duration = duration;
    // 当前数字
    this.number = 1;
    // 当一个数字产生的时候，要调用的回调函数
    this.onNumberCreaed = null;
    this.timerId = null;
  }
  start() {
    if (this.timerId) return;
    this.timerId = setInterval(() => {
      // 数字是什么?
      this.onNumberCreaed &&
        this.onNumberCreaed(this.number, isPrime(this.number));
      this.number++;
    }, this.duration);
  }
  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  }
}
