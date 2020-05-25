(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    3: function (e, t, n) {
      e.exports = n(8);
    },
    8: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        r = n.n(c),
        o = n(2);
      var a = function () {
        return (
          Object(c.useEffect)(function () {
            fetch("/api/home-page").then(function (e) {
              return console.log(e);
            });
          }),
          r.a.createElement(
            "div",
            { style: { background: "green" } },
            "React with typescript"
          )
        );
      };
      n.n(o).a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(a, null)),
        document.getElementById("root")
      );
    },
  },
  [[3, 1, 2]],
]);
//# sourceMappingURL=main.a6a5eaeb.chunk.js.map
