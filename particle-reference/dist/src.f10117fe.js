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
})({"src/modules/canvas.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvasH = exports.canvasW = exports.ctx = exports.canvas = void 0;
var vh = window.innerHeight,
  vw = window.innerWidth;
exports.canvas = document.getElementById("canvas");
exports.ctx = exports.canvas.getContext("2d");
exports.canvas.setAttribute("width", String(vw));
exports.canvas.setAttribute("height", String(vh));
exports.canvasW = vw;
exports.canvasH = vh;
},{}],"src/modules/Particle.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particle = void 0;
var canvas_1 = require("./canvas");
var Particle = /** @class */function () {
  function Particle(x, y, size) {
    this._x = x;
    this._y = y;
    this._baseX = this._x;
    this._baseY = this._y;
    this._density = Math.random() * 40 + 5;
    this._size = size;
  }
  Object.defineProperty(Particle.prototype, "baseX", {
    get: function get() {
      return this._baseX;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Particle.prototype, "baseY", {
    get: function get() {
      return this._baseY;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Particle.prototype, "x", {
    get: function get() {
      return this._x;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Particle.prototype, "y", {
    get: function get() {
      return this._y;
    },
    enumerable: false,
    configurable: true
  });
  Particle.prototype.draw = function () {
    canvas_1.ctx.fillStyle = "#fff";
    canvas_1.ctx.beginPath();
    canvas_1.ctx.arc(this.x, this.y, this._size, 0, Math.PI * 2);
    canvas_1.ctx.closePath();
    canvas_1.ctx.fill();
  };
  Particle.prototype.update = function (mouse) {
    var dx = mouse.x - this._x;
    var dy = mouse.y - this._y;
    var distance = Math.hypot(dx, dy);
    var forceDirectionX = dx / distance;
    var forceDirectionY = dy / distance;
    var force = (mouse.radius - distance) / mouse.radius;
    if (distance < mouse.radius) {
      var directionX = forceDirectionX * force * this._density;
      var directionY = forceDirectionY * force * this._density;
      this._x -= directionX;
      this._y -= directionY;
      return;
    }
    if (this._x !== this._baseX) this._x -= (this._x - this._baseX) / 10;
    if (this._y !== this._baseY) this._y -= (this._y - this._baseY) / 10;
  };
  return Particle;
}();
exports.Particle = Particle;
},{"./canvas":"src/modules/canvas.ts"}],"src/modules/Mouse.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mouse = void 0;
var canvas_1 = require("./canvas");
var Mouse = /** @class */function () {
  function Mouse(radius) {
    if (radius === void 0) {
      radius = 150;
    }
    this._x = 0;
    this._y = 0;
    this._radius = radius;
    canvas_1.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }
  Object.defineProperty(Mouse.prototype, "x", {
    get: function get() {
      return this._x;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Mouse.prototype, "y", {
    get: function get() {
      return this._y;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Mouse.prototype, "radius", {
    get: function get() {
      return this._radius;
    },
    enumerable: false,
    configurable: true
  });
  Mouse.prototype.handleMouseMove = function (_a) {
    var x = _a.x,
      y = _a.y;
    this._x = x;
    this._y = y;
  };
  return Mouse;
}();
exports.Mouse = Mouse;
},{"./canvas":"src/modules/canvas.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var canvas_1 = require("./modules/canvas");
var Particle_1 = require("./modules/Particle");
var Mouse_1 = require("./modules/Mouse");
// Global values
// You can change these values to change the look of the effect
// Text
var textsToWrite = ["Hello"];
var textSize = 30;
// Particles
var mouseRadius = 150;
var particleSize = 1;
var particleScale = 10;
var adjust = {
  x: 3,
  y: 0
};
// Connect lines
var lineWidth = 1;
var distanceToDrawLine = 40;
var mouse = new Mouse_1.Mouse(mouseRadius);
var particles = [];
var init = function init() {
  canvas_1.ctx.fillStyle = "#fff";
  canvas_1.ctx.font = textSize + "px Arial";
  textsToWrite.forEach(function (text, i) {
    canvas_1.ctx.fillText(text, 0, textSize * (i + 1));
  });
  var _a = canvas_1.ctx.getImageData(0, 0, canvas_1.canvasW, canvas_1.canvasW),
    width = _a.width,
    height = _a.height,
    data = _a.data;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var pixelAlphaIndex = y * 4 * height + x * 4 + 3;
      // If the opcaity of the pixel is greater than 50%
      if (data[pixelAlphaIndex] > 128) {
        var positionX = (x + adjust.x) * particleScale;
        var positionY = (y + adjust.y) * particleScale;
        particles.push(new Particle_1.Particle(positionX, positionY, particleSize));
      }
    }
  }
};
var connect = function connect() {
  for (var i = 0; i < particles.length; i++) {
    for (var j = i; j < particles.length; j++) {
      var particleA = particles[i];
      var particleB = particles[j];
      var dx = particleA.x - particleB.x;
      var dy = particleA.y - particleB.y;
      var distance = Math.hypot(dx, dy);
      if (distance < distanceToDrawLine) {
        canvas_1.ctx.globalAlpha = 1 - distance / distanceToDrawLine;
        canvas_1.ctx.lineWidth = lineWidth;
        canvas_1.ctx.strokeStyle = "#fff";
        canvas_1.ctx.beginPath();
        canvas_1.ctx.moveTo(particleA.x, particleA.y);
        canvas_1.ctx.lineTo(particleB.x, particleB.y);
        canvas_1.ctx.stroke();
        canvas_1.ctx.closePath();
      }
    }
  }
};
var _animate = function animate() {
  canvas_1.ctx.clearRect(0, 0, canvas_1.canvasW, canvas_1.canvasW);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.draw();
    p.update(mouse);
  }
  connect();
  requestAnimationFrame(_animate);
};
init();
_animate();
},{"./modules/canvas":"src/modules/canvas.ts","./modules/Particle":"src/modules/Particle.ts","./modules/Mouse":"src/modules/Mouse.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54262" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map