import NumberTimer from "../utils/number";
import appendNumber from "../page/appendNumber";

var n = new NumberTimer(100);

n.onNumberCreaed = function (n, isPrime) {
  appendNumber(n, isPrime);
};

var isStart = true;
n.start();
window.onclick = function () {
  if (isStart) {
    n.stop();
    isStart = false;
  } else {
    n.start();
    isStart = true;
  }
};
