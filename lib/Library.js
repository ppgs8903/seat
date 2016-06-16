"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Library = (function () {
  function Library() {
    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Library);

    this.id = props.id;
  }

  Library.prototype.foo = function foo() {
    return "foo " + this.id;
  };

  return Library;
})();

exports["default"] = Library;
module.exports = exports["default"];
//# sourceMappingURL=Library.js.map