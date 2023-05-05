(() => {
  var o = {
      85: (o) => {
        console.log("module a"), (o.exports = "a");
      },
    },
    e = {};
  function r(l) {
    var n = e[l];
    if (void 0 !== n) return n.exports;
    var s = (e[l] = { exports: {} });
    return o[l](s, s.exports, r), s.exports;
  }
  (() => {
    console.log("index module");
    var o = r(85);
    o.abc(), console.log(o);
  })();
})();
