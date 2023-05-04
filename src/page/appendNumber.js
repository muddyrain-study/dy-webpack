import $ from "jquery";
import radColor, { getRandom } from "../utils/radColor";

const divContainer = $("#divContainer");
const divCenter = $("#divCenter");
export default function (n, isPrime) {
  var span = $("<span>").text(n);
  if (isPrime) {
    var color = radColor();
    span.css("color", color);
    createCenterPrimeNumber(n, color);
  }
  divContainer.append(span);
  // 创建中间的数字
  createCenterNumber(n);
}

function createCenterNumber(n) {
  divCenter.text(n);
}

/**
 *
 */
function createCenterPrimeNumber(n, color) {
  var div = $("<div>").addClass("center").css("color", color).text(n);
  $("body").append(div);
  // 加入了div后 强行让div重新渲染
  getComputedStyle(div[0]).left;
  div
    .css(
      "transform",
      `translate(${getRandom(-300, 300)}px, ${getRandom(-300, 300)}px)`
    )
    .css("opacity", 0);
  div[0].addEventListener(
    "transitionend",
    (e) => {
      if (e.propertyName === "transform") {
        $("body").remove(div);
      }
    },
    false
  );
}
