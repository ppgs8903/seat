/**
 * Created by jason on 2016/6/11.
 */
let Helper = {};

(function(_helper) {
  let AutoNum = {};

  _helper.getUuid = function(str) {
    AutoNum[str] ? AutoNum[str] = AutoNum[str]+1 : AutoNum[str] = 1;
    return str + "-" + AutoNum[str];
  }

}(Helper));

export default Helper;
