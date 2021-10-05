// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@popperjs/core/lib/enums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierPhases = exports.afterWrite = exports.write = exports.beforeWrite = exports.afterMain = exports.main = exports.beforeMain = exports.afterRead = exports.read = exports.beforeRead = exports.placements = exports.variationPlacements = exports.reference = exports.popper = exports.viewport = exports.clippingParents = exports.end = exports.start = exports.basePlacements = exports.auto = exports.left = exports.right = exports.bottom = exports.top = void 0;
var top = 'top';
exports.top = top;
var bottom = 'bottom';
exports.bottom = bottom;
var right = 'right';
exports.right = right;
var left = 'left';
exports.left = left;
var auto = 'auto';
exports.auto = auto;
var basePlacements = [top, bottom, right, left];
exports.basePlacements = basePlacements;
var start = 'start';
exports.start = start;
var end = 'end';
exports.end = end;
var clippingParents = 'clippingParents';
exports.clippingParents = clippingParents;
var viewport = 'viewport';
exports.viewport = viewport;
var popper = 'popper';
exports.popper = popper;
var reference = 'reference';
exports.reference = reference;
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
exports.variationPlacements = variationPlacements;
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

exports.placements = placements;
var beforeRead = 'beforeRead';
exports.beforeRead = beforeRead;
var read = 'read';
exports.read = read;
var afterRead = 'afterRead'; // pure-logic modifiers

exports.afterRead = afterRead;
var beforeMain = 'beforeMain';
exports.beforeMain = beforeMain;
var main = 'main';
exports.main = main;
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

exports.afterMain = afterMain;
var beforeWrite = 'beforeWrite';
exports.beforeWrite = beforeWrite;
var write = 'write';
exports.write = write;
var afterWrite = 'afterWrite';
exports.afterWrite = afterWrite;
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
exports.modifierPhases = modifierPhases;
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeName;

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.isShadowRoot = isShadowRoot;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElement(node) {
  var OwnElement = (0, _getWindow.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0, _getWindow.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/modifiers/applyStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
exports.default = _default;
},{"../dom-utils/getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/utils/getBasePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBasePlacement;

var _enums = require("../enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingClientRect;

// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLayoutRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"}],"node_modules/@popperjs/core/lib/dom-utils/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _instanceOf = require("./instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputedStyle;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComputedStyle(element) {
  return (0, _getWindow.default)(element).getComputedStyle(element);
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTableElement;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentElement;

var _instanceOf = require("./instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0, _instanceOf.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParentNode;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParentNode(element) {
  if ((0, _getNodeName.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElement.default)(element) // fallback

  );
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetParent;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTrueOffsetParent(element) {
  if (!(0, _instanceOf.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0, _getComputedStyle.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0, _instanceOf.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0, _getComputedStyle.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0, _getParentNode.default)(element);

  while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
    var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0, _getWindow.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./isTableElement.js":"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js"}],"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMainAxisFromPlacement;

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
},{}],"node_modules/@popperjs/core/lib/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.min = exports.max = void 0;
var max = Math.max;
exports.max = max;
var min = Math.min;
exports.min = min;
var round = Math.round;
exports.round = round;
},{}],"node_modules/@popperjs/core/lib/utils/within.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = within;

var _math = require("./math.js");

function within(min, value, max) {
  return (0, _math.max)(min, (0, _math.min)(value, max));
}
},{"./math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFreshSideObject;

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergePaddingObject;

var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
}
},{"./getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js"}],"node_modules/@popperjs/core/lib/utils/expandToHashMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandToHashMap;

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
},{}],"node_modules/@popperjs/core/lib/modifiers/arrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0, _getLayoutRect.default)(arrowElement);
  var minProp = axis === 'y' ? _enums.top : _enums.left;
  var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0, _within.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("development" !== "production") {
    if (!(0, _instanceOf.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../utils/mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","../utils/expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/utils/getVariation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVariation;

function getVariation(placement) {
  return placement.split('-')[1];
}
},{}],"node_modules/@popperjs/core/lib/modifiers/computeStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToStyles = mapToStyles;
exports.default = void 0;

var _enums = require("../enums.js");

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0, _math.round)((0, _math.round)(x * dpr) / dpr) || 0,
    y: (0, _math.round)((0, _math.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums.left;
  var sideY = _enums.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0, _getOffsetParent.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0, _getWindow.default)(popper)) {
      offsetParent = (0, _getDocumentElement.default)(popper);

      if ((0, _getComputedStyle.default)(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums.top || (placement === _enums.left || placement === _enums.right) && variation === _enums.end) {
      sideY = _enums.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums.left || (placement === _enums.top || placement === _enums.bottom) && variation === _enums.end) {
      sideX = _enums.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("development" !== "production") {
    var transitionProperty = (0, _getComputedStyle.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0, _getBasePlacement.default)(state.placement),
    variation: (0, _getVariation.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/eventListeners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0, _getWindow.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};
exports.default = _default;
},{"../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScroll;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScroll(node) {
  var win = (0, _getWindow.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScrollBarX;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewportRect;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportRect(element) {
  var win = (0, _getWindow.default)(element);
  var html = (0, _getDocumentElement.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0, _getWindowScrollBarX.default)(element),
    y: y
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentRect;

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0, _getDocumentElement.default)(element);
  var winScroll = (0, _getWindowScroll.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
  var y = -winScroll.scrollTop;

  if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
    x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
},{"./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScrollParent;

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0, _getComputedStyle2.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
},{"./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js"}],"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollParent;

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
    return node;
  }

  return getScrollParent((0, _getParentNode.default)(node));
}
},{"./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listScrollParents;

var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0, _getScrollParent.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0, _getWindow.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
}
},{"./getScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/rectToClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rectToClientRect;

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClippingRect;

var _enums = require("../enums.js");

var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));

var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));

var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _contains = _interopRequireDefault(require("./contains.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerBoundingClientRect(element) {
  var rect = (0, _getBoundingClientRect.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element)) : (0, _instanceOf.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;

  if (!(0, _instanceOf.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0, _math.max)(rect.top, accRect.top);
    accRect.right = (0, _math.min)(rect.right, accRect.right);
    accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _math.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","./getViewportRect.js":"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js","./getDocumentRect.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js","./listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../utils/rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/computeOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeOffsets;

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
  var variation = placement ? (0, _getVariation.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
},{"./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","./getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/detectOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectOverflow;

var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));

var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));

var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
  var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0, _getBoundingClientRect.default)(state.elements.reference);
  var popperOffsets = (0, _computeOffsets.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
},{"../dom-utils/getClippingRect.js":"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js","./rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","./expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js"}],"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeAutoPlacement;

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
  var variation = (0, _getVariation.default)(placement);
  var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
    return (0, _getVariation.default)(placement) === variation;
  }) : _enums.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0, _getBasePlacement.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
},{"./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","./detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js"}],"node_modules/@popperjs/core/lib/modifiers/flip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));

var _enums = require("../enums.js");

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function getExpandedFallbackPlacements(placement) {
  if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
    return [];
  }

  var oppositePlacement = (0, _getOppositePlacement.default)(placement);
  return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0, _getBasePlacement.default)(placement);

    var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;

    var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    }

    var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
exports.default = _default;
},{"../utils/getOppositePlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getOppositeVariationPlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/computeAutoPlacement.js":"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js"}],"node_modules/@popperjs/core/lib/modifiers/hide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0, _detectOverflow.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0, _detectOverflow.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js"}],"node_modules/@popperjs/core/lib/modifiers/offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0, _getBasePlacement.default)(placement);
  var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;

  var data = _enums.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = (0, _computeOffsets.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
exports.default = _default;
},{"../utils/computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js"}],"node_modules/@popperjs/core/lib/utils/getAltAxis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAltAxis;

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
},{}],"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0, _detectOverflow.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var variation = (0, _getVariation.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var altAxis = (0, _getAltAxis.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
    var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0, _within.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0, _within.default)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;

      var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0, _within.default)(tether ? (0, _math.min)(_min, tetherMin) : _min, _offset, tether ? (0, _math.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/getAltAxis.js":"node_modules/@popperjs/core/lib/utils/getAltAxis.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyles", {
  enumerable: true,
  get: function () {
    return _applyStyles.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "computeStyles", {
  enumerable: true,
  get: function () {
    return _computeStyles.default;
  }
});
Object.defineProperty(exports, "eventListeners", {
  enumerable: true,
  get: function () {
    return _eventListeners.default;
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function () {
    return _flip.default;
  }
});
Object.defineProperty(exports, "hide", {
  enumerable: true,
  get: function () {
    return _hide.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "popperOffsets", {
  enumerable: true,
  get: function () {
    return _popperOffsets.default;
  }
});
Object.defineProperty(exports, "preventOverflow", {
  enumerable: true,
  get: function () {
    return _preventOverflow.default;
  }
});

var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));

var _arrow = _interopRequireDefault(require("./arrow.js"));

var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));

var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));

var _flip = _interopRequireDefault(require("./flip.js"));

var _hide = _interopRequireDefault(require("./hide.js"));

var _offset = _interopRequireDefault(require("./offset.js"));

var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));

var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTMLElementScroll;

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeScroll;

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _instanceOf = require("./instanceOf.js");

var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeScroll(node) {
  if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
    return (0, _getWindowScroll.default)(node);
  } else {
    return (0, _getHTMLElementScroll.default)(node);
  }
}
},{"./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getHTMLElementScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCompositeRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0, _instanceOf.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0, _getDocumentElement.default)(offsetParent);
  var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _getNodeName.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0, _isScrollParent.default)(documentElement)) {
      scroll = (0, _getNodeScroll.default)(offsetParent);
    }

    if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
      offsets = (0, _getBoundingClientRect.default)(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getNodeScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/orderModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderModifiers;

var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
},{}],"node_modules/@popperjs/core/lib/utils/validateModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateModifiers;

var _format = _interopRequireDefault(require("./format.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0, _format.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
},{"./format.js":"node_modules/@popperjs/core/lib/utils/format.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/uniqueBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueBy;

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/mergeByName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeByName;

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
},{}],"node_modules/@popperjs/core/lib/createPopper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperGenerator = popperGenerator;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _detectOverflow.default;
  }
});
exports.createPopper = void 0;

var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));

var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));

var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));

var _getComputedStyle2 = _interopRequireDefault(require("./dom-utils/getComputedStyle.js"));

var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));

var _debounce = _interopRequireDefault(require("./utils/debounce.js"));

var _validateModifiers = _interopRequireDefault(require("./utils/validateModifiers.js"));

var _uniqueBy = _interopRequireDefault(require("./utils/uniqueBy.js"));

var _getBasePlacement = _interopRequireDefault(require("./utils/getBasePlacement.js"));

var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));

var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));

var _instanceOf = require("./dom-utils/instanceOf.js");

var _enums = require("./enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
          popper: (0, _listScrollParents.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("development" !== "production") {
          var modifiers = (0, _uniqueBy.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0, _validateModifiers.default)(modifiers);

          if ((0, _getBasePlacement.default)(state.options.placement) === _enums.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0, _getComputedStyle2.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
          popper: (0, _getLayoutRect.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0, _debounce.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./dom-utils/getCompositeRect.js":"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js","./dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","./dom-utils/listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./utils/orderModifiers.js":"node_modules/@popperjs/core/lib/utils/orderModifiers.js","./utils/debounce.js":"node_modules/@popperjs/core/lib/utils/debounce.js","./utils/validateModifiers.js":"node_modules/@popperjs/core/lib/utils/validateModifiers.js","./utils/uniqueBy.js":"node_modules/@popperjs/core/lib/utils/uniqueBy.js","./utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./utils/mergeByName.js":"node_modules/@popperjs/core/lib/utils/mergeByName.js","./utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/popper-lite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js"}],"node_modules/@popperjs/core/lib/popper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createPopper: true,
  defaultModifiers: true,
  popperGenerator: true,
  detectOverflow: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

var _offset = _interopRequireDefault(require("./modifiers/offset.js"));

var _flip = _interopRequireDefault(require("./modifiers/flip.js"));

var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));

var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));

var _hide = _interopRequireDefault(require("./modifiers/hide.js"));

var _popperLite = require("./popper-lite.js");

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./modifiers/offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./modifiers/flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./modifiers/preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js","./modifiers/arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./modifiers/hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js"}],"node_modules/@popperjs/core/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  popperGenerator: true,
  detectOverflow: true,
  createPopperBase: true,
  createPopper: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperBase", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _popper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});

var _enums = require("./enums.js");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _createPopper = require("./createPopper.js");

var _popper = require("./popper.js");

var _popperLite = require("./popper-lite.js");
},{"./enums.js":"node_modules/@popperjs/core/lib/enums.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js","./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./popper.js":"node_modules/@popperjs/core/lib/popper.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js"}],"node_modules/bootstrap/js/dist/dom/data.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap data.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Data = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const elementMap = new Map();
  var data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  return data;

})));


},{}],"node_modules/bootstrap/js/dist/dom/event-handler.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap event-handler.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.EventHandler = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    let typeEvent = originalTypeEvent.replace(stripNameRegex, '');
    const custom = customEvents[typeEvent];

    if (custom) {
      typeEvent = custom;
    }

    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = event.replace(stripNameRegex, '');
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }

          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  return EventHandler;

})));


},{}],"node_modules/bootstrap/js/dist/dom/manipulator.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap manipulator.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Manipulator = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },

    offset(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },

    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }

  };

  return Manipulator;

})));


},{}],"node_modules/bootstrap/js/dist/dom/selector-engine.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap selector-engine.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SelectorEngine = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const NODE_TEXT = 3;
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }

  };

  return SelectorEngine;

})));


},{}],"node_modules/bootstrap/js/dist/base-component.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap base-component.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Base = factory(global.Data));
}(this, (function (Data) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.0.0-beta3';

  class BaseComponent {
    constructor(element) {
      element = typeof element === 'string' ? document.querySelector(element) : element;

      if (!element) {
        return;
      }

      this._element = element;
      Data__default['default'].set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data__default['default'].remove(this._element, this.constructor.DATA_KEY);
      this._element = null;
    }
    /** Static */


    static getInstance(element) {
      return Data__default['default'].get(element, this.DATA_KEY);
    }

    static get VERSION() {
      return VERSION;
    }

  }

  return BaseComponent;

})));


},{"./dom/data.js":"node_modules/bootstrap/js/dist/dom/data.js"}],"node_modules/bootstrap/js/dist/dropdown.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap dropdown.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core'), require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core', './dom/data', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dropdown = factory(global.Popper, global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
}(this, (function (Popper, Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = '#' + hrefAttr.split('#')[1];
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const isElement = obj => (obj[0] || obj).nodeType;

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: ` + `Option "${property}" provided type "${valueType}" ` + `but expected type "${expectedTypes}".`);
      }
    });
  };

  const isVisible = element => {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      const elementStyle = getComputedStyle(element);
      const parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  const noop = () => function () {};

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'dropdown';
  const DATA_KEY = 'bs.dropdown';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const SPACE_KEY = 'Space';
  const TAB_KEY = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY}`);
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK = `click${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_DISABLED = 'disabled';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_NAVBAR = 'navbar';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]';
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const Default = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  const DefaultType = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get DATA_KEY() {
      return DATA_KEY;
    } // Public


    toggle() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) {
        return;
      }

      const isActive = this._element.classList.contains(CLASS_NAME_SHOW);

      Dropdown.clearMenus();

      if (isActive) {
        return;
      }

      this.show();
    }

    show() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      const parent = Dropdown.getParentFromElement(this._element);
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (this._inNavbar) {
        Manipulator__default['default'].setDataAttribute(this._menu, 'popper', 'none');
      } else {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        let referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } else if (typeof this._config.reference === 'object') {
          referenceElement = this._config.reference;
        }

        const popperConfig = this._getPopperConfig();

        const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator__default['default'].setDataAttribute(this._menu, 'popper', 'static');
        }
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler__default['default'].on(elem, 'mouseover', null, noop()));
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.toggle(CLASS_NAME_SHOW);

      this._element.classList.toggle(CLASS_NAME_SHOW);

      EventHandler__default['default'].trigger(this._element, EVENT_SHOWN, relatedTarget);
    }

    hide() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.toggle(CLASS_NAME_SHOW);

      this._element.classList.toggle(CLASS_NAME_SHOW);

      Manipulator__default['default'].removeDataAttribute(this._menu, 'popper');
      EventHandler__default['default'].trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }

    dispose() {
      EventHandler__default['default'].off(this._element, EVENT_KEY);
      this._menu = null;

      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _addEventListeners() {
      EventHandler__default['default'].on(this._element, EVENT_CLICK, event => {
        event.preventDefault();
        this.toggle();
      });
    }

    _getConfig(config) {
      config = { ...this.constructor.Default,
        ...Manipulator__default['default'].getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME, config, this.constructor.DefaultType);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _getMenuElement() {
      return SelectorEngine__default['default'].next(this._element, SELECTOR_MENU)[0];
    }

    _getPlacement() {
      const parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    } // Static


    static dropdownInterface(element, config) {
      let data = Data__default['default'].get(element, DATA_KEY);

      const _config = typeof config === 'object' ? config : null;

      if (!data) {
        data = new Dropdown(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
      });
    }

    static clearMenus(event) {
      if (event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
          return;
        }

        if (/input|select|textarea|form/i.test(event.target.tagName)) {
          return;
        }
      }

      const toggles = SelectorEngine__default['default'].find(SELECTOR_DATA_TOGGLE);

      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Data__default['default'].get(toggles[i], DATA_KEY);
        const relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        const dropdownMenu = context._menu;

        if (!toggles[i].classList.contains(CLASS_NAME_SHOW)) {
          continue;
        }

        if (event) {
          // Don't close the menu if the clicked element or one of its parents is the dropdown button
          if ([context._element].some(element => event.composedPath().includes(element))) {
            continue;
          } // Tab navigation through the dropdown menu shouldn't close the menu


          if (event.type === 'keyup' && event.key === TAB_KEY && dropdownMenu.contains(event.target)) {
            continue;
          }
        }

        const hideEvent = EventHandler__default['default'].trigger(toggles[i], EVENT_HIDE, relatedTarget);

        if (hideEvent.defaultPrevented) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          [].concat(...document.body.children).forEach(elem => EventHandler__default['default'].off(elem, 'mouseover', null, noop()));
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        dropdownMenu.classList.remove(CLASS_NAME_SHOW);
        toggles[i].classList.remove(CLASS_NAME_SHOW);
        Manipulator__default['default'].removeDataAttribute(dropdownMenu, 'popper');
        EventHandler__default['default'].trigger(toggles[i], EVENT_HIDDEN, relatedTarget);
      }
    }

    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

    static dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
        return;
      }

      const parent = Dropdown.getParentFromElement(this);
      const isActive = this.classList.contains(CLASS_NAME_SHOW);

      if (event.key === ESCAPE_KEY) {
        const button = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine__default['default'].prev(this, SELECTOR_DATA_TOGGLE)[0];
        button.focus();
        Dropdown.clearMenus();
        return;
      }

      if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
        const button = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine__default['default'].prev(this, SELECTOR_DATA_TOGGLE)[0];
        button.click();
        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
        return;
      }

      const items = SelectorEngine__default['default'].find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

      if (!items.length) {
        return;
      }

      let index = items.indexOf(event.target); // Up

      if (event.key === ARROW_UP_KEY && index > 0) {
        index--;
      } // Down


      if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
        index++;
      } // index is -1 if the first keydown is an ArrowUp


      index = index === -1 ? 0 : index;
      items[index].focus();
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler__default['default'].on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  EventHandler__default['default'].on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  EventHandler__default['default'].on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    Dropdown.dropdownInterface(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME, Dropdown);

  return Dropdown;

})));


},{"@popperjs/core":"node_modules/@popperjs/core/lib/index.js","./dom/data.js":"node_modules/bootstrap/js/dist/dom/data.js","./dom/event-handler.js":"node_modules/bootstrap/js/dist/dom/event-handler.js","./dom/manipulator.js":"node_modules/bootstrap/js/dist/dom/manipulator.js","./dom/selector-engine.js":"node_modules/bootstrap/js/dist/dom/selector-engine.js","./base-component.js":"node_modules/bootstrap/js/dist/base-component.js"}],"node_modules/bootstrap/js/dist/button.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap button.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./base-component.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory(global.Data, global.EventHandler, global.Base));
}(this, (function (Data, EventHandler, BaseComponent) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'button';
  const DATA_KEY = 'bs.button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button extends BaseComponent__default['default'] {
    // Getters
    static get DATA_KEY() {
      return DATA_KEY;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);

        if (!data) {
          data = new Button(this);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE);
    let data = Data__default['default'].get(button, DATA_KEY);

    if (!data) {
      data = new Button(button);
    }

    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME, Button);

  return Button;

})));


},{"./dom/data.js":"node_modules/bootstrap/js/dist/dom/data.js","./dom/event-handler.js":"node_modules/bootstrap/js/dist/dom/event-handler.js","./base-component.js":"node_modules/bootstrap/js/dist/base-component.js"}],"node_modules/bootstrap/js/dist/modal.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap modal.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Modal = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
}(this, (function (Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = '#' + hrefAttr.split('#')[1];
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = obj => (obj[0] || obj).nodeType;

  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: ` + `Option "${property}" provided type "${valueType}" ` + `but expected type "${expectedTypes}".`);
      }
    });
  };

  const isVisible = element => {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      const elementStyle = getComputedStyle(element);
      const parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  const reflow = element => element.offsetHeight;

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const Default = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  const CLASS_NAME_BACKDROP = 'modal-backdrop';
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="modal"]';
  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal extends BaseComponent__default['default'] {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine__default['default'].findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    static get Default() {
      return Default;
    }

    static get DATA_KEY() {
      return DATA_KEY;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      const showEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });

      if (this._isShown || showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler__default['default'].on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, event => this.hide(event));
      EventHandler__default['default'].on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler__default['default'].one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide(event) {
      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      const isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler__default['default'].off(document, EVENT_FOCUSIN);

      this._element.classList.remove(CLASS_NAME_SHOW);

      EventHandler__default['default'].off(this._element, EVENT_CLICK_DISMISS);
      EventHandler__default['default'].off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      if (isAnimated) {
        const transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler__default['default'].one(this._element, 'transitionend', event => this._hideModal(event));
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        this._hideModal();
      }
    }

    dispose() {
      [window, this._element, this._dialog].forEach(htmlElement => EventHandler__default['default'].off(htmlElement, EVENT_KEY));
      super.dispose();
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      EventHandler__default['default'].off(document, EVENT_FOCUSIN);
      this._config = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _getConfig(config) {
      config = { ...Default,
        ...config
      };
      typeCheckConfig(NAME, config, DefaultType);
      return config;
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();

      const modalBody = SelectorEngine__default['default'].findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      const transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus();
        }

        this._isTransitioning = false;
        EventHandler__default['default'].trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };

      if (isAnimated) {
        const transitionDuration = getTransitionDurationFromElement(this._dialog);
        EventHandler__default['default'].one(this._dialog, 'transitionend', transitionComplete);
        emulateTransitionEnd(this._dialog, transitionDuration);
      } else {
        transitionComplete();
      }
    }

    _enforceFocus() {
      EventHandler__default['default'].off(document, EVENT_FOCUSIN); // guard against infinite focus loop

      EventHandler__default['default'].on(document, EVENT_FOCUSIN, event => {
        if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
          this._element.focus();
        }
      });
    }

    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler__default['default'].on(this._element, EVENT_KEYDOWN_DISMISS, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler__default['default'].off(this._element, EVENT_KEYDOWN_DISMISS);
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        EventHandler__default['default'].on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler__default['default'].off(window, EVENT_RESIZE);
      }
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._resetScrollbar();

        EventHandler__default['default'].trigger(this._element, EVENT_HIDDEN);
      });
    }

    _removeBackdrop() {
      this._backdrop.parentNode.removeChild(this._backdrop);

      this._backdrop = null;
    }

    _showBackdrop(callback) {
      const isAnimated = this._isAnimated();

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (isAnimated) {
          this._backdrop.classList.add(CLASS_NAME_FADE);
        }

        document.body.appendChild(this._backdrop);
        EventHandler__default['default'].on(this._element, EVENT_CLICK_DISMISS, event => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
          } else {
            this.hide();
          }
        });

        if (isAnimated) {
          reflow(this._backdrop);
        }

        this._backdrop.classList.add(CLASS_NAME_SHOW);

        if (!isAnimated) {
          callback();
          return;
        }

        const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
        EventHandler__default['default'].one(this._backdrop, 'transitionend', callback);
        emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove(CLASS_NAME_SHOW);

        const callbackRemove = () => {
          this._removeBackdrop();

          callback();
        };

        if (isAnimated) {
          const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
          EventHandler__default['default'].one(this._backdrop, 'transitionend', callbackRemove);
          emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else {
        callback();
      }
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler__default['default'].off(this._element, 'transitionend');
      EventHandler__default['default'].one(this._element, 'transitionend', () => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          EventHandler__default['default'].one(this._element, 'transitionend', () => {
            this._element.style.overflowY = '';
          });
          emulateTransitionEnd(this._element, modalTransitionDuration);
        }
      });
      emulateTransitionEnd(this._element, modalTransitionDuration);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing && !isRTL() || this._isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${this._scrollbarWidth}px`;
      }

      if (this._isBodyOverflowing && !isModalOverflowing && !isRTL() || !this._isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${this._scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    _checkScrollbar() {
      const rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    }

    _setScrollbar() {
      if (this._isBodyOverflowing) {
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + this._scrollbarWidth);

        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - this._scrollbarWidth);

        this._setElementAttributes('body', 'paddingRight', calculatedValue => calculatedValue + this._scrollbarWidth);
      }

      document.body.classList.add(CLASS_NAME_OPEN);
    }

    _setElementAttributes(selector, styleProp, callback) {
      SelectorEngine__default['default'].find(selector).forEach(element => {
        if (element !== document.body && window.innerWidth > element.clientWidth + this._scrollbarWidth) {
          return;
        }

        const actualValue = element.style[styleProp];
        const calculatedValue = window.getComputedStyle(element)[styleProp];
        Manipulator__default['default'].setDataAttribute(element, styleProp, actualValue);
        element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
      });
    }

    _resetScrollbar() {
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');

      this._resetElementAttributes('body', 'paddingRight');
    }

    _resetElementAttributes(selector, styleProp) {
      SelectorEngine__default['default'].find(selector).forEach(element => {
        const value = Manipulator__default['default'].getDataAttribute(element, styleProp);

        if (typeof value === 'undefined' && element === document.body) {
          element.style[styleProp] = '';
        } else {
          Manipulator__default['default'].removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      });
    }

    _getScrollbarWidth() {
      // thx d.walsh
      const scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);
        const _config = { ...Default,
          ...Manipulator__default['default'].getDataAttributes(this),
          ...(typeof config === 'object' && config ? config : {})
        };

        if (!data) {
          data = new Modal(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](relatedTarget);
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = getElementFromSelector(this);

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    EventHandler__default['default'].one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler__default['default'].one(target, EVENT_HIDDEN, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    let data = Data__default['default'].get(target, DATA_KEY);

    if (!data) {
      const config = { ...Manipulator__default['default'].getDataAttributes(target),
        ...Manipulator__default['default'].getDataAttributes(this)
      };
      data = new Modal(target, config);
    }

    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME, Modal);

  return Modal;

})));


},{"./dom/data.js":"node_modules/bootstrap/js/dist/dom/data.js","./dom/event-handler.js":"node_modules/bootstrap/js/dist/dom/event-handler.js","./dom/manipulator.js":"node_modules/bootstrap/js/dist/dom/manipulator.js","./dom/selector-engine.js":"node_modules/bootstrap/js/dist/dom/selector-engine.js","./base-component.js":"node_modules/bootstrap/js/dist/base-component.js"}],"node_modules/bootstrap/js/dist/tooltip.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap tooltip.js v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core'), require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core', './dom/data', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tooltip = factory(global.Popper, global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
}(this, (function (Popper, Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = obj => (obj[0] || obj).nodeType;

  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: ` + `Option "${property}" provided type "${valueType}" ` + `but expected type "${expectedTypes}".`);
      }
    });
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => function () {};

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = (name, plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const allowlistKeys = Object.keys(allowList);
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.parentNode.removeChild(el);
        continue;
      }

      const attributeList = [].concat(...el.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(attr => {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'tooltip';
  const DATA_KEY = 'bs.tooltip';
  const EVENT_KEY = `.${DATA_KEY}`;
  const CLASS_PREFIX = 'bs-tooltip';
  const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY}`,
    HIDDEN: `hidden${EVENT_KEY}`,
    SHOW: `show${EVENT_KEY}`,
    SHOWN: `shown${EVENT_KEY}`,
    INSERTED: `inserted${EVENT_KEY}`,
    CLICK: `click${EVENT_KEY}`,
    FOCUSIN: `focusin${EVENT_KEY}`,
    FOCUSOUT: `focusout${EVENT_KEY}`,
    MOUSEENTER: `mouseenter${EVENT_KEY}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY}`
  };
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW = 'show';
  const HOVER_STATE_SHOW = 'show';
  const HOVER_STATE_OUT = 'out';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip extends BaseComponent__default['default'] {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element); // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default;
    }

    static get NAME() {
      return NAME;
    }

    static get DATA_KEY() {
      return DATA_KEY;
    }

    static get Event() {
      return Event$1;
    }

    static get EVENT_KEY() {
      return EVENT_KEY;
    }

    static get DefaultType() {
      return DefaultType;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler__default['default'].off(this._element, this.constructor.EVENT_KEY);
      EventHandler__default['default'].off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

      if (this.tip && this.tip.parentNode) {
        this.tip.parentNode.removeChild(this.tip);
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.config = null;
      this.tip = null;
      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler__default['default'].trigger(this._element, this.constructor.Event.SHOW);
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      const tip = this.getTipElement();
      const tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this.config.animation) {
        tip.classList.add(CLASS_NAME_FADE);
      }

      const placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

      const attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      const container = this._getContainer();

      Data__default['default'].set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
        EventHandler__default['default'].trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW);
      const customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => {
          EventHandler__default['default'].on(element, 'mouseover', noop());
        });
      }

      const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler__default['default'].trigger(this._element, this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          this._leave(null, this);
        }
      };

      if (this.tip.classList.contains(CLASS_NAME_FADE)) {
        const transitionDuration = getTransitionDurationFromElement(this.tip);
        EventHandler__default['default'].one(this.tip, 'transitionend', complete);
        emulateTransitionEnd(this.tip, transitionDuration);
      } else {
        complete();
      }
    }

    hide() {
      if (!this._popper) {
        return;
      }

      const tip = this.getTipElement();

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        this._cleanTipClass();

        this._element.removeAttribute('aria-describedby');

        EventHandler__default['default'].trigger(this._element, this.constructor.Event.HIDDEN);

        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      const hideEvent = EventHandler__default['default'].trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => EventHandler__default['default'].off(element, 'mouseover', noop));
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if (this.tip.classList.contains(CLASS_NAME_FADE)) {
        const transitionDuration = getTransitionDurationFromElement(tip);
        EventHandler__default['default'].one(tip, 'transitionend', complete);
        emulateTransitionEnd(tip, transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    }

    update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected


    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      const element = document.createElement('div');
      element.innerHTML = this.config.template;
      this.tip = element.children[0];
      return this.tip;
    }

    setContent() {
      const tip = this.getTipElement();
      this.setElementContent(SelectorEngine__default['default'].findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
      tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
    }

    setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (typeof content === 'object' && isElement(content)) {
        if (content.jquery) {
          content = content[0];
        } // content is a DOM node or a jQuery


        if (this.config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.appendChild(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    getTitle() {
      let title = this._element.getAttribute('data-bs-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
      }

      return title;
    }

    updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private


    _initializeOnDelegatedTarget(event, context) {
      const dataKey = this.constructor.DATA_KEY;
      context = context || Data__default['default'].get(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data__default['default'].set(event.delegateTarget, dataKey, context);
      }

      return context;
    }

    _getOffset() {
      const {
        offset
      } = this.config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            altBoundary: true,
            fallbackPlacements: this.config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this.config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
          if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
          }
        }
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this.config.popperConfig === 'function' ? this.config.popperConfig(defaultBsPopperConfig) : this.config.popperConfig)
      };
    }

    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }

    _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (isElement(this.config.container)) {
        return this.config.container;
      }

      return SelectorEngine__default['default'].findOne(this.config.container);
    }

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }

    _setListeners() {
      const triggers = this.config.trigger.split(' ');
      triggers.forEach(trigger => {
        if (trigger === 'click') {
          EventHandler__default['default'].on(this._element, this.constructor.Event.CLICK, this.config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler__default['default'].on(this._element, eventIn, this.config.selector, event => this._enter(event));
          EventHandler__default['default'].on(this._element, eventOut, this.config.selector, event => this._leave(event));
        }
      });

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler__default['default'].on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = { ...this.config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }

    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    }

    _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    }

    _isWithActiveTrigger() {
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }

    _getConfig(config) {
      const dataAttributes = Manipulator__default['default'].getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });

      if (config && typeof config.container === 'object' && config.container.jquery) {
        config.container = config.container[0];
      }

      config = { ...this.constructor.Default,
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      if (this.config) {
        for (const key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }

    _handlePopperPlacementChange(popperData) {
      const {
        state
      } = popperData;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data__default['default'].get(this, DATA_KEY);

        const _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME, Tooltip);

  return Tooltip;

})));


},{"@popperjs/core":"node_modules/@popperjs/core/lib/index.js","./dom/data.js":"node_modules/bootstrap/js/dist/dom/data.js","./dom/event-handler.js":"node_modules/bootstrap/js/dist/dom/event-handler.js","./dom/manipulator.js":"node_modules/bootstrap/js/dist/dom/manipulator.js","./dom/selector-engine.js":"node_modules/bootstrap/js/dist/dom/selector-engine.js","./base-component.js":"node_modules/bootstrap/js/dist/base-component.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _dropdown = _interopRequireDefault(require("bootstrap/js/dist/dropdown"));

var _button = _interopRequireDefault(require("bootstrap/js/dist/button"));

var _modal = _interopRequireDefault(require("bootstrap/js/dist/modal"));

var _tooltip = _interopRequireDefault(require("bootstrap/js/dist/tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import
// 드롭다운 초기화
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
dropdownElementList.map(function (dropdownToggleEl) {
  return new _dropdown.default(dropdownToggleEl);
}); // 툴팁 초기화

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new _tooltip.default(tooltipTriggerEl);
}); // 모달 초기화
// 두번째 인자로 객체를 전달하여 다양한 추가 옵션을 지정할 수 있다.
// 자세한 내용은 홈페이지 참조

new _modal.default(document.getElementById('exampleModal'), {
  backdrop: "static"
}); // 모달 포커스

var Modal1 = document.querySelector('#exampleModal');
var Input1 = document.querySelector('#exampleInputEmail1');
Modal1.addEventListener('shown.bs.modal', function () {
  Input1.focus();
});
},{"bootstrap/js/dist/dropdown":"node_modules/bootstrap/js/dist/dropdown.js","bootstrap/js/dist/button":"node_modules/bootstrap/js/dist/button.js","bootstrap/js/dist/modal":"node_modules/bootstrap/js/dist/modal.js","bootstrap/js/dist/tooltip":"node_modules/bootstrap/js/dist/tooltip.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61943" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map