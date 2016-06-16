(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_seat"] = factory();
	else
		root["_seat"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Library = __webpack_require__(4);

	var _Library2 = _interopRequireDefault(_Library);

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _Event = __webpack_require__(2);

	var _Event2 = _interopRequireDefault(_Event);

	var _Helper = __webpack_require__(3);

	var _Helper2 = _interopRequireDefault(_Helper);

	//export default {
	//  Library,
	//  Event
	//}
	exports['default'] = {
	  Util: _Util2['default'],
	  Library: _Library2['default'],
	  Event: _Event2['default'],
	  Helper: _Helper2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by jason on 2016/6/10.
	 */

	"use strict";

	exports.__esModule = true;
	var Event = {};

	(function (q) {

	  var topics = {},
	      // 回调函数存放的数组
	  subUid = -1;
	  // 发布方法
	  q.publish = function (topic, args) {
	    if (!topics[topic]) {
	      return false;
	    }
	    setTimeout(function () {
	      var subscribers = topics[topic],
	          len = subscribers ? subscribers.length : 0;

	      while (len--) {
	        subscribers[len].func(topic, args);
	      }
	    }, 0);
	    return true;
	  };

	  //订阅方法
	  q.subscribe = function (topic, func) {
	    if (!topics[topic]) {
	      topics[topic] = [];
	    }
	    var token = (++subUid).toString();
	    topics[topic].push({
	      token: token,
	      func: func
	    });
	    return token;
	  };

	  //退订方法
	  q.unsubscribe = function (token) {
	    for (var m in topics) {
	      if (topics[m]) {
	        for (var i = 0, j = topics[m].length; i < j; i++) {
	          if (topics[m][i].token === token) {
	            topics[m].splice(i, 1);
	            return token;
	          }
	        }
	      }
	    }
	    return false;
	  };
	})(Event);

	exports["default"] = Event;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Util = (function () {
	  function Util() {
	    _classCallCheck(this, Util);
	  }

	  Util.add = function add(a, b) {
	    return a + b;
	  };

	  return Util;
	})();

	exports["default"] = Util;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;