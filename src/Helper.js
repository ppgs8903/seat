/**
 * Created by jason on 2016/6/11.
 */
let Helper = {};

( function (_helper) {
  let AutoNum = {};

  _helper.getUniqueId = function (str) {
    AutoNum[str] ? AutoNum[str] = AutoNum[str]+1 : AutoNum[str] = 1;
    return str + '-' + AutoNum[str];
  };

  _helper.getUuid = function (len=32, radix=16) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
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
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };

  _helper.delay = function () {
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
  }();

  //todo 更改实现方式  增加实现方法
  _helper.promiseDelay = function (time) {
    new Promise( (resolve, reject) => {
      setTimeout(function () {
        try {
          cb();
        } catch(e) {
          reject(e);
        }
        resolve();
      }, time);
    });
  };

}(Helper));

export default Helper;
