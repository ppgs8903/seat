/**
 * Created by jason on 2016/6/11.
 */
'use strict';

exports.__esModule = true;
var Helper = {};

(function (_helper) {
  var AutoNum = {};

  _helper.getUniqueId = function (str) {
    AutoNum[str] ? AutoNum[str] = AutoNum[str] + 1 : AutoNum[str] = 1;
    return str + '-' + AutoNum[str];
  };

  _helper.getUuid = function () {
    var len = arguments.length <= 0 || arguments[0] === undefined ? 32 : arguments[0];
    var radix = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];

    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };

  _helper.delay = (function () {
    var isDelay = true;
    return function (time, cb) {
      if (isDelay) {
        isDelay = false;
        cb();
        setTimeout(function () {
          isDelay = true;
        }, time);
        return true;
      }
      return false;
    };
  })();
})(Helper);

exports['default'] = Helper;
module.exports = exports['default'];
//# sourceMappingURL=Helper.js.map