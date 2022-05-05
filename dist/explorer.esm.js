import React__default, { useState, createElement, Fragment } from 'react';
import { useTheme as useTheme$1, styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fuse from 'fuse.js';
import Box$1 from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, useTheme } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Box as Box$2, responsiveFontSizes } from '@mui/material';
import { CopyBlock, anOldHope } from 'react-code-blocks';
import ReactJson from 'react-json-view-ssr';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Helmet } from 'react-helmet';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var dummydata = {
  hero_h1: "Integrate Next.JS seamlessly",
  hero_description: "Zesty.io is the open-source, flexible API headless CMS to integrate with NextJS. Start your next project with just one line of code.",
  cta_primary_text: null,
  cta_secondary_text: null,
  integration_benefits_h2: "Zesty and Next: A Powerful Combination",
  integration_benefits: null,
  feature_description_1: "",
  feature_description_2: null,
  feature_description_3: '<p dir="ltr">The benefits extend to your marketing team as well:</p>\n<ul>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Marketers can fully control SEO components including the URL path without affecting the developer workflow</p>\n</li>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Leveraging NextJS server-side rendering means marketers gain a live preview for stage and development environments</p>\n</li>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Leveraging NextJS server-side rendering also means production can be automatically updated by marketers without waiting for a build process</p>\n</li>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Zesty enables marketer previews inside of the content management system - this can be done using Google Cloud, AWS or Vercel</p>\n</li>\n</ul>',
  testimonial: null,
  logos_title: "Join top companies",
  logos: {
    type: "relationship",
    model: "customer_brands",
    totalItems: 5,
    data: [{
      customer_name: "Sony-homepage",
      customer_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959bc7-wnj9b8",
          url: "https://kfg6bckb.media.zestyio.com/Sony-homepage150x50-fullcolor.png"
        }]
      },
      homepage_sort: "1",
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: "1",
      customer_sort: "1",
      url: null,
      grey_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959bc7-0xs8gd",
          url: "https://kfg6bckb.media.zestyio.com/Sony-homepage150x50-grey.png"
        }]
      },
      white_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d95a31f-485ggg",
          url: "https://kfg6bckb.media.zestyio.com/sony-white.png"
        }]
      },
      meta: {
        type: "item",
        model_name: "customer_brands",
        model_alternate_name: "CustomerBrand",
        zuid: "7-c28c9fc9b1-st2xwm",
        createdAt: "2022-03-22 20:27:17",
        updatedAt: "2022-03-22 20:27:16",
        listed: "1",
        version: "3",
        locale: {
          id: "1",
          name: "English (United States)",
          code: "en-US",
          "default": "1",
          active: "1",
          enabled: "1"
        },
        model: {
          type: "model",
          zuid: "6-0888e8-0rv8xh",
          name: "customer_brands",
          label: "Customers",
          resourceURI: "https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json"
        }
      }
    }, {
      customer_name: "Rocket League-homepage",
      customer_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d9ffb35-46szwl",
          url: "https://kfg6bckb.media.zestyio.com/RL-black.H164YWM79.png"
        }]
      },
      homepage_sort: "1",
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: "1",
      customer_sort: "1",
      url: null,
      grey_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d9ffb3c-k8d6js",
          url: "https://kfg6bckb.media.zestyio.com/RL-grey.png"
        }]
      },
      white_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d9ffb41-684jph",
          url: "https://kfg6bckb.media.zestyio.com/RL-white.png"
        }]
      },
      meta: {
        type: "item",
        model_name: "customer_brands",
        model_alternate_name: "CustomerBrand",
        zuid: "7-9ce7fddc9f-bqrt2r",
        createdAt: "2022-03-30 16:45:56",
        updatedAt: "2022-03-30 16:45:55",
        listed: "1",
        version: "5",
        locale: {
          id: "1",
          name: "English (United States)",
          code: "en-US",
          "default": "1",
          active: "1",
          enabled: "1"
        },
        model: {
          type: "model",
          zuid: "6-0888e8-0rv8xh",
          name: "customer_brands",
          label: "Customers",
          resourceURI: "https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json"
        }
      }
    }, {
      customer_name: "Wattpad-homepage",
      customer_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959b5d-6q0prf",
          url: "https://kfg6bckb.media.zestyio.com/Wattpad-homepage150x50-fullcolor.png"
        }]
      },
      homepage_sort: "1",
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: "1",
      customer_sort: "1",
      url: null,
      grey_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959b5d-0xvjnf",
          url: "https://kfg6bckb.media.zestyio.com/Wattpad-homepage150x50-grey.png"
        }]
      },
      white_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d95a442-b0kk0d",
          url: "https://kfg6bckb.media.zestyio.com/wattpad-white.png"
        }]
      },
      meta: {
        type: "item",
        model_name: "customer_brands",
        model_alternate_name: "CustomerBrand",
        zuid: "7-dcf592b5fe-nz9r3t",
        createdAt: "2022-03-22 20:32:09",
        updatedAt: "2022-03-22 20:32:08",
        listed: "1",
        version: "3",
        locale: {
          id: "1",
          name: "English (United States)",
          code: "en-US",
          "default": "1",
          active: "1",
          enabled: "1"
        },
        model: {
          type: "model",
          zuid: "6-0888e8-0rv8xh",
          name: "customer_brands",
          label: "Customers",
          resourceURI: "https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json"
        }
      }
    }, {
      customer_name: "Petdesk-homepage",
      customer_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959aed-tvdkr1",
          url: "https://kfg6bckb.media.zestyio.com/Petdesk-homepage150x50-fullcolor.png"
        }]
      },
      homepage_sort: "1",
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: "1",
      customer_sort: "1",
      url: null,
      grey_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959aed-dqbvjd",
          url: "https://kfg6bckb.media.zestyio.com/Petdesk-homepage150x50-grey.png"
        }]
      },
      white_logo: null,
      meta: {
        type: "item",
        model_name: "customer_brands",
        model_alternate_name: "CustomerBrand",
        zuid: "7-9ef497ad9d-h232d8",
        createdAt: "2022-03-22 19:52:46",
        updatedAt: "2022-03-22 19:52:45",
        listed: "1",
        version: "3",
        locale: {
          id: "1",
          name: "English (United States)",
          code: "en-US",
          "default": "1",
          active: "1",
          enabled: "1"
        },
        model: {
          type: "model",
          zuid: "6-0888e8-0rv8xh",
          name: "customer_brands",
          label: "Customers",
          resourceURI: "https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json"
        }
      }
    }, {
      customer_name: "Acorns-homepage",
      customer_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959aa9-f62xz4",
          url: "https://kfg6bckb.media.zestyio.com/Acorns-homepage150x50-fullcolor.png"
        }]
      },
      homepage_sort: "1",
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: "1",
      customer_sort: "1",
      url: null,
      grey_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d959aa9-0hm1ww",
          url: "https://kfg6bckb.media.zestyio.com/Acorns-homepage150x50-grey.png"
        }]
      },
      white_logo: {
        type: "images",
        totalItems: 1,
        data: [{
          type: "image",
          zuid: "3-d95a49c-6ks7n7",
          url: "https://kfg6bckb.media.zestyio.com/acorns-white.png"
        }]
      },
      meta: {
        type: "item",
        model_name: "customer_brands",
        model_alternate_name: "CustomerBrand",
        zuid: "7-e2a8fcd0d0-pr31xg",
        createdAt: "2022-03-22 20:33:36",
        updatedAt: "2022-03-22 20:33:36",
        listed: "1",
        version: "3",
        locale: {
          id: "1",
          name: "English (United States)",
          code: "en-US",
          "default": "1",
          active: "1",
          enabled: "1"
        },
        model: {
          type: "model",
          zuid: "6-0888e8-0rv8xh",
          name: "customer_brands",
          label: "Customers",
          resourceURI: "https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json"
        }
      }
    }]
  },
  meta: {
    type: "item",
    model_name: "integrations_individual_pages",
    model_alternate_name: "IntegrationsIndividualPage",
    zuid: "7-d48acf90e9-pchhtq",
    createdAt: "2022-04-06 17:43:27",
    updatedAt: "2022-04-06 17:43:27",
    listed: "1",
    version: "2",
    locale: {
      id: "1",
      name: "English (United States)",
      code: "en-US",
      "default": "1",
      active: "1",
      enabled: "1"
    },
    model: {
      type: "model",
      zuid: "6-88e5918e85-tmg13p",
      name: "integrations_individual_pages",
      label: "Integrations-Individual Pages",
      resourceURI: "https://www.zesty.io/-/instant/6-88e5918e85-tmg13p.json"
    },
    web: {
      url: "https://www.zesty.io/integrations/nextjs-cms/",
      uri: "/integrations/nextjs-cms/",
      fragment: "nextjs-cms",
      canonical_tag_mode: "1",
      sitemap_priority: "-1.0",
      sitemap_last_updated: "2022-04-06 17:43:27",
      canonical_query_param_whitelist: null,
      canonical_tag_custom_value: null,
      seo_link_text: "Integrate Next.JS seamlessly",
      seo_meta_title: "Integrate Next.JS seamlessly",
      seo_meta_description: "",
      seo_meta_keywords: null
    }
  },
  zestyProductionMode: true,
  zestyInstanceZUID: "8-aaeffee09b-7w6v22",
  zestyBaseURL: "https://www.zesty.io"
};

/* eslint-disable guard-for-in */

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}; // convert the obj to array of objectsj

var convertToArray = function convertToArray(content) {
  return Object.entries(content).map(function (e) {
    var _ref;

    return _ref = {}, _ref["" + e[0]] = e[1], _ref;
  });
}; // convert obj to dot

var flattenObj = function flattenObj(obj, parent, res) {
  if (res === void 0) {
    res = {};
  }

  for (var _iterator = _createForOfIteratorHelperLoose(Object == null ? void 0 : Object.keys(obj || {})), _step; !(_step = _iterator()).done;) {
    var key = _step.value;
    var propName = parent ? parent + "." + key : key;

    if (typeof obj[key] === "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }

  return res;
}; // convert dot to object

function deepen(obj) {
  var result = {}; // For each object path (property key) in the object

  for (var objectPath in obj) {
    // Split path into component parts
    var parts = objectPath.split("."); // Create sub-objects along path as needed

    var target = result;

    while (parts.length > 1) {
      var part = parts.shift();
      target = target[part] = target[part] || {};
    } // Set value at end of path


    target[parts[0]] = obj[objectPath];
  }

  return result;
}
var headerZUID = function headerZUID(response) {
  var _response$headers;

  return (response == null ? void 0 : (_response$headers = response.headers) == null ? void 0 : _response$headers.get("z-zuid")) || "";
};
var PrettyPrintJson = function PrettyPrintJson(_ref2) {
  var data = _ref2.data;

  if (typeof data === "string") {
    return React__default.createElement(Box, {
      paddingLeft: 8,
      dangerouslySetInnerHTML: {
        __html: data
      }
    });
  }

  return React__default.createElement("div", {
    style: {
      paddingLeft: "2rem",
      overflow: "hidden",
      width: "100%",
      whiteSpace: "pre-line"
    }
  }, React__default.createElement("pre", null, JSON.stringify(data, null, 2)));
};
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}
var scrollToView = function scrollToView(elementId) {
  var _document$getElementB;

  (_document$getElementB = document.getElementById(elementId)) == null ? void 0 : _document$getElementB.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
};

function activateWorkingElement(match) {
  console.log("string to test", match);
  var stringToTest = match.replace(/<[^>]*>?/gm, "");
  var elems = document.querySelectorAll("*");
  var workingElement = Array.from(elems).find(function (v) {
    return v.textContent == stringToTest;
  });
  workingElement.style.border = "2px orange solid";
  workingElement.setAttribute("contentEditable", true);
  workingElement.setAttribute("id", "activeEl");
  console.log("Activating", workingElement);
  return workingElement;
}

function deactivateWorkingElement(workingElement) {
  if (undefined !== workingElement) {
    console.log("Deactivating", workingElement);
    workingElement.style.border = "none";
    workingElement.setAttribute("contentEditable", false);
    workingElement.removeAttribute("id");
  }
}

function Row(_ref) {
  var _sx;

  var keyName = _ref.keyName,
      obj = _ref.obj,
      workingElement = _ref.workingElement,
      setWorkingElement = _ref.setWorkingElement;

  var _React$useState = useState(false),
      showCopy = _React$useState[0],
      setShowCopy = _React$useState[1];

  var _React$useState2 = useState(false),
      clipboardCopy = _React$useState2[0],
      setclipboardCopy = _React$useState2[1];

  var _React$useState3 = useState(false),
      open = _React$useState3[0],
      setOpen = _React$useState3[1];

  var _React$useState4 = useState(""),
      text = _React$useState4[0],
      settext = _React$useState4[1];

  var theme = useTheme();
  var value = "";
  var valueType = "string";

  if (typeof obj === "string") {
    value = obj;
  } else {
    valueType = "object";
  } // @ts-ignore


  var showCloseBtn = text === (workingElement == null ? void 0 : workingElement.innerText);
  return createElement(Fragment, null, createElement(TableRow, {
    sx: {
      "& > *": {
        borderBottom: "unset"
      }
    }
  }, createElement(TableCell, {
    sx: {
      width: "1rem"
    }
  }, createElement(IconButton, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? createElement("span", null, "\u2B06\uFE0F") : createElement("span", null, "\u2B07\uFE0F"))), createElement(TableCell, {
    component: "th",
    scope: "row"
  }, keyName), createElement(TableCell, {
    align: "left"
  }, valueType), createElement(TableCell, {
    align: "left",
    onClick: function onClick() {
      scrollToView("activeEl");
    }
  }, createElement("span", {
    onClick: function onClick(e) {
      !text && settext(e.target.textContent); // @ts-ignore

      !(workingElement != null && workingElement.innerText) && setWorkingElement(activateWorkingElement(value));
    }
  }, value), showCloseBtn && createElement(Button, {
    size: "small",
    onClick: function onClick() {
      deactivateWorkingElement(workingElement);
      setWorkingElement("");
      settext("");
    }
  }, createElement(CloseIcon, null))), createElement(TableCell, {
    align: "left"
  }, value.length), createElement(TableCell, {
    onMouseEnter: function onMouseEnter() {
      return setShowCopy(true);
    },
    onMouseLeave: function onMouseLeave() {
      setShowCopy(false);
      setclipboardCopy(false);
    },
    sx: {
      background: theme.palette.zesty.zestyDarkBlue,
      color: theme.palette.zesty.zestyGreen,
      position: "relative"
    }
  }, createElement("button", {
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      navigator.clipboard.writeText("content." + keyName);
      setclipboardCopy(true);
      setShowCopy(false);
    }
  }, "{content." + keyName + "}"), createElement(Box$1, {
    sx: {
      position: "absolute",
      left: "0",
      top: "0"
    }
  }, clipboardCopy && createElement("span", null, "\u2705 Copied to clipboard!"), showCopy && createElement("span", null, "\uD83D\uDCDC Copy")))), createElement(TableRow, null, createElement(TableCell, {
    style: {
      paddingBottom: 0,
      paddingTop: 0,
      background: theme.palette.zesty.zestyBackgroundBlue
    },
    colSpan: 6
  }, createElement(Collapse, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, createElement(Box$1, {
    sx: {
      margin: 1
    }
  }, createElement(Table, {
    sx: (_sx = {}, _sx["& ." + tableCellClasses.root] = {
      borderBottom: "none"
    }, _sx),
    size: "medium",
    "aria-label": "purchases"
  }, createElement(TableHead, null, createElement(TableRow, null, createElement(TableCell, null, PrettyPrintJson({
    data: obj
  }))))))))));
}

function CollapsibleTable(_ref2) {
  var _Object$keys;

  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {} : _ref2$data;

  var _React$useState5 = useState(""),
      workingElement = _React$useState5[0],
      setWorkingElement = _React$useState5[1];

  return createElement(TableContainer, {
    component: Paper,
    style: {
      maxHeight: 600
    }
  }, createElement(Table, {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, createElement(TableHead, null, createElement(TableRow, null, createElement(TableCell, null), createElement(TableCell, {
    variant: "head",
    sx: {
      width: "3rem"
    }
  }, createElement("strong", null, "Field Name")), createElement(TableCell, {
    align: "left",
    sx: {
      width: "3rem"
    }
  }, createElement("strong", null, "Type")), createElement(TableCell, {
    align: "left",
    sx: {
      width: "20rem"
    }
  }, createElement("strong", null, "Content Example")), createElement(TableCell, {
    align: "left",
    sx: {
      width: "3rem"
    }
  }, createElement("strong", null, "Content Length")), createElement(TableCell, {
    align: "left",
    sx: {
      width: "3rem"
    }
  }, createElement("strong", null, "Access Example")))), createElement(TableBody, null, (_Object$keys = Object.keys(data)) == null ? void 0 : _Object$keys.map(function (keyName) {
    return createElement(Row, {
      obj: data && data[keyName],
      keyName: keyName,
      workingElement: workingElement,
      setWorkingElement: setWorkingElement
    });
  }))));
}

var ContentViewer = function ContentViewer(_ref) {
  var data = _ref.data,
      search = _ref.search,
      setSearch = _ref.setSearch;
  // const theme = useTheme()
  console.log(search, setSearch);
  return React__default.createElement("div", {
    style: {
      background: "background.paper",
      overflow: "auto",
      padding: "1rem 2rem"
    }
  }, React__default.createElement(CollapsibleTable, {
    data: data.content || {}
  }));
};

var generatedScript = function generatedScript(content) {
  var _content$content, _content$content$meta, _content$content$meta2, _content$meta, _content$meta$web, _content$meta2, _content$meta2$web, _content$meta3, _content$meta3$web, _content$meta4, _content$meta4$web, _content$meta5, _content$meta5$web, _content$meta6, _content$meta6$web, _content$meta7, _content$meta7$web, _content$meta8, _content$meta8$web, _content$meta9, _content$og_image, _content$og_image$dat, _content$og_image2, _content$og_image$dat2;

  console.log(content, "contentdata");
  console.log((content == null ? void 0 : (_content$content = content.content) == null ? void 0 : (_content$content$meta = _content$content.meta) == null ? void 0 : (_content$content$meta2 = _content$content$meta.web) == null ? void 0 : _content$content$meta2.url) || "");
  return "<head>\n\n  <!-- Auto-generated Head Tags -->\n   <title>Zesty.io: Simplify digital. Maximize results.</title>\n  <link rel=\"canonical\" href=\"" + (content == null ? void 0 : (_content$meta = content.meta) == null ? void 0 : (_content$meta$web = _content$meta.web) == null ? void 0 : _content$meta$web.url) + "\" />\n\n   <meta name=\"description\" content=\"" + (content == null ? void 0 : (_content$meta2 = content.meta) == null ? void 0 : (_content$meta2$web = _content$meta2.web) == null ? void 0 : _content$meta2$web.seo_meta_description) + "\" />\n  <meta name=\"keywords\" content=\"" + (content == null ? void 0 : (_content$meta3 = content.meta) == null ? void 0 : (_content$meta3$web = _content$meta3.web) == null ? void 0 : _content$meta3$web.seo_meta_keywords) + "\" />\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\">\n  <meta property=\"og:type\" content=\"website\" />\n  <meta name=\"twitter:card\" content=\"summary\">\n  <meta property=\"og:title\" content=\"" + (content == null ? void 0 : (_content$meta4 = content.meta) == null ? void 0 : (_content$meta4$web = _content$meta4.web) == null ? void 0 : _content$meta4$web.seo_meta_title) + "\" />\n  <meta name=\"twitter:title\" content=\"" + (content == null ? void 0 : (_content$meta5 = content.meta) == null ? void 0 : (_content$meta5$web = _content$meta5.web) == null ? void 0 : _content$meta5$web.seo_meta_title) + "\">\n  <meta property=\"og:description\" content=\"" + (content == null ? void 0 : (_content$meta6 = content.meta) == null ? void 0 : (_content$meta6$web = _content$meta6.web) == null ? void 0 : _content$meta6$web.seo_meta_description) + "\" />\n  <meta property=\"twitter:description\" content=\"" + (content == null ? void 0 : (_content$meta7 = content.meta) == null ? void 0 : (_content$meta7$web = _content$meta7.web) == null ? void 0 : _content$meta7$web.seo_meta_description) + "\" />\n  <meta property=\"og:url\" content=\"" + (content == null ? void 0 : (_content$meta8 = content.meta) == null ? void 0 : (_content$meta8$web = _content$meta8.web) == null ? void 0 : _content$meta8$web.url) + "\" />\n  <meta property=\"og:image:width\" content=\"1200\">\n  <meta property=\"og:image:height\" content=\"630\">\n  <meta property=\"og:site_name\" content=\"" + (content == null ? void 0 : (_content$meta9 = content.meta) == null ? void 0 : _content$meta9.model_alternate_name) + "\" />\n\n  <!-- Custom Head Tags -->\n  <meta content=\"" + ((content == null ? void 0 : (_content$og_image = content.og_image) == null ? void 0 : _content$og_image.data) && (content == null ? void 0 : (_content$og_image$dat = content.og_image.data[0]) == null ? void 0 : _content$og_image$dat.url)) + "\" property=\"og:image\" />\n  <meta content=\"" + ((content == null ? void 0 : (_content$og_image2 = content.og_image) == null ? void 0 : _content$og_image2.data) && (content == null ? void 0 : (_content$og_image$dat2 = content.og_image.data[0]) == null ? void 0 : _content$og_image$dat2.url)) + "\" name=\"twitter:image\" />\n</head>\n";
};

var MetaViewer = function MetaViewer(_ref) {
  var _content$meta10, _content$meta10$model, _content$meta11;

  var content = _ref.content,
      response = _ref.response;
  console.log(content, "contentdata");
  var uri = "https://" + ((content == null ? void 0 : content.zestyInstanceZUID) || headerZUID(response)) + ".manager.zesty.io/content/" + (content == null ? void 0 : (_content$meta10 = content.meta) == null ? void 0 : (_content$meta10$model = _content$meta10.model) == null ? void 0 : _content$meta10$model.zuid) + "/" + (content == null ? void 0 : (_content$meta11 = content.meta) == null ? void 0 : _content$meta11.zuid) + "/meta";
  console.log(uri);
  return React__default.createElement("div", {
    style: {
      height: "80vh",
      background: "#fff",
      padding: "1rem 2rem"
    }
  }, React__default.createElement(Box$2, {
    paddingX: 4,
    sx: {
      display: "flex",
      alignItems: "end",
      width: "100%",
      justifyContent: "flex-end"
    }
  }, React__default.createElement(Button, {
    href: uri,
    variant: "contained",
    color: "primary",
    size: "small",
    sx: {
      fontSize: "12px",
      whiteSpace: "nowrap"
    }
  }, React__default.createElement(Box$2, {
    paddingX: 2,
    paddingY: 1
  }, "Edit in CMS"))), React__default.createElement(CopyBlock, {
    text: generatedScript(content),
    language: "html",
    showLineNumbers: false,
    theme: anOldHope,
    wrapLines: true
  }));
};

/* eslint-disable array-callback-return */
//    padding: "5px",
//    display: "inline-block",
//    color: "#497edf",
// }

var Headers = function Headers(_ref) {
  var _content$meta, _content$meta$web, _content$meta2, _content$meta3, _content$meta3$model, _content$meta4, _content$meta5, _content$meta5$model;

  var response = _ref.response,
      children = _ref.children,
      content = _ref.content;
  var theme = useTheme$1();
  return React__default.createElement(AppBar, {
    position: "static"
  }, React__default.createElement(Box$1, {
    paddingX: 4,
    paddingY: 2,
    style: {
      display: "flex",
      width: "100%",
      margin: "0 auto",
      background: theme.palette.background.paper
    }
  }, React__default.createElement(Box$1, {
    style: {
      display: "flex"
    }
  }, React__default.createElement(Box$1, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: "2rem"
    }
  }, React__default.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      mr: 2,
      display: {
        xs: "none",
        md: "flex"
      }
    }
  }, React__default.createElement("img", {
    src: "https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png",
    width: "62px",
    height: "62px",
    alt: "Zesty.io Logo"
  })), React__default.createElement(Typography, {
    sx: {
      fontSize: "14px",
      whiteSpace: "normal"
    },
    color: theme.palette.common.black,
    component: "h6"
  }, "Browsing item ", React__default.createElement("strong", null, " ", content == null ? void 0 : (_content$meta = content.meta) == null ? void 0 : (_content$meta$web = _content$meta.web) == null ? void 0 : _content$meta$web.seo_link_text, " "), "from the ", React__default.createElement("strong", null, content == null ? void 0 : (_content$meta2 = content.meta) == null ? void 0 : _content$meta2.model_alternate_name, " "), "Content Model")), React__default.createElement(Box$1, null, React__default.createElement(Button, {
    href: "https://accounts.zesty.io/instances/" + (content == null ? void 0 : content.zestyInstanceZUID),
    variant: "contained",
    color: "secondary",
    size: "small"
  }, "Edit Permissions"), React__default.createElement(Button, {
    href: "https://" + ((content == null ? void 0 : content.zestyInstanceZUID) || headerZUID(response)) + ".manager.zesty.io/content/" + (content == null ? void 0 : (_content$meta3 = content.meta) == null ? void 0 : (_content$meta3$model = _content$meta3.model) == null ? void 0 : _content$meta3$model.zuid) + "/" + (content == null ? void 0 : (_content$meta4 = content.meta) == null ? void 0 : _content$meta4.zuid),
    variant: "contained",
    color: "secondary",
    target: "_blank",
    size: "small"
  }, "Edit Content"), React__default.createElement(Button, {
    href: "https://" + ((content == null ? void 0 : content.zestyInstanceZUID) || headerZUID(response)) + ".manager.zesty.io/schema/" + (content == null ? void 0 : (_content$meta5 = content.meta) == null ? void 0 : (_content$meta5$model = _content$meta5.model) == null ? void 0 : _content$meta5$model.zuid),
    variant: "contained",
    color: "secondary",
    size: "small",
    target: "_blank"
  }, "Edit Schema"), children))));
};

var TabContainer = function TabContainer(_ref) {
  var tabList = _ref.tabList,
      settime = _ref.settime,
      setcurrentTab = _ref.setcurrentTab;

  var _React$useState = React__default.useState(0),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var handleChange = function handleChange(event, newValue) {
    console.log(event);
    console.log(newValue, 123123123);
    setcurrentTab(newValue);
    setValue(newValue);
    settime();
  };

  return React__default.createElement(Box$1, null, React__default.createElement(Box$1, {
    sx: {
      maxWidth: {
        xs: 320,
        sm: 480
      },
      bgcolor: "background.paper"
    }
  }, " ", React__default.createElement(Tabs, {
    value: value,
    onChange: handleChange,
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example"
  }, tabList.map(function (e) {
    return React__default.createElement(Tab, {
      label: e.label,
      value: e.value
    });
  }))));
};

var Loader = function Loader() {
  return React__default.createElement("div", {
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "100",
      height: "100%",
      width: "100%",
      background: "#FEFF01"
    }
  }, React__default.createElement("h1", null, "Loading "));
};

// import SearchIcon from "@mui/icons-material/Search"

var Search = /*#__PURE__*/styled("div")(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%"
  }, _ref2[theme.breakpoints.up("sm")] = {
    marginLeft: theme.spacing(1),
    width: "auto"
  }, _ref2;
});
var SearchIconWrapper = /*#__PURE__*/styled("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
var StyledInputBase = /*#__PURE__*/styled(InputBase)(function (_ref4) {
  var _MuiInputBaseInpu;

  var theme = _ref4.theme;
  return {
    color: "inherit",
    "& .MuiInputBase-input": (_MuiInputBaseInpu = {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + " + theme.spacing(4) + ")",
      transition: theme.transitions.create("width"),
      width: "100%"
    }, _MuiInputBaseInpu[theme.breakpoints.up("sm")] = {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }, _MuiInputBaseInpu)
  };
});
var SearchAppBar = function SearchAppBar(_ref5) {
  var value = _ref5.value,
      _onChange = _ref5.onChange;
  console.log(value, _onChange);
  return createElement(Box$1, {
    sx: {
      flexGrow: 1
    }
  }, createElement(AppBar, {
    position: "static"
  }, createElement(Toolbar, null, createElement(IconButton, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    sx: {
      mr: 2
    }
  }), createElement(Search, null, createElement(SearchIconWrapper, null), createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    },
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  })))));
};

var JsonDataViewer = function JsonDataViewer(_ref) {
  var data = _ref.data,
      search = _ref.search,
      setSearch = _ref.setSearch;
  console.log(data, "data123123");
  return React__default.createElement("div", {
    style: {
      background: "red"
    }
  }, React__default.createElement(SearchAppBar, {
    value: search,
    onChange: setSearch
  }), React__default.createElement(ReactJson, {
    style: {
      height: "80vh",
      overflowY: "scroll"
    },
    name: "data",
    // @ts-ignore
    src: data,
    theme: "flat",
    iconStyle: "square",
    indentWidth: 4,
    collapsed: 2,
    displayObjectSize: true,
    displayDataTypes: false,
    enableClipboard: true
  }));
};

var getPageData = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var data, queryString, domain, uri, res;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              error: true,
              production: true
            };
            queryString = window.location.search.substring(1);
            domain = process.env.REACT_APP_DOMAIN_OVERRIDE || process.env.NEXT_PUBLIC_DOMAIN_OVERRIDE ? process.env.REACT_APP_DOMAIN_OVERRIDE || process.env.NEXT_PUBLIC_DOMAIN_OVERRIDE : window.location.origin;
            uri = domain + window.location.pathname + "?toJSON&" + queryString; // const uri = window.location.href + "?toJSON&" + queryString;
            // for testing only
            // const uri = "https://www.zesty.io?toJSON&" + queryString
            // Fetch data from Zesty.io toJSON API

            _context.next = 6;
            return fetch(uri);

          case 6:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 10;
            return res.json();

          case 10:
            data = _context.sent;

          case 11:
            return _context.abrupt("return", {
              data: data,
              response: res
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPageData() {
    return _ref.apply(this, arguments);
  };
}();

var buttonStyles = {
  borderRadius: "5px",
  padding: "12px 24px 12px 16px",
  background: "#1b202c",
  color: "white",
  border: "1px #5B667D solid",
  boxShadow: "3px 3px 8px rgba(0,0,0,.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  left: "40vw",
  bottom: 0,
  position: "absolute"
};
var zestyStyles = {
  flex: "1",
  display: "inline-block",
  alignSelf: "center",
  marginLeft: "12px",
  fontSize: "18px",
  color: "#C7D4EA",
  letterSpacing: "1px",
  fontFamily: "'Arial Rounded MT Bold','Helvetica Rounded',Arial,sans-serif"
};
var verifyUserPrompt = {
  position: "fixed",
  top: "40%",
  left: "15%"
};
var zestyWrapper = {
  width: "auto",
  background: "transparent",
  position: "fixed",
  left: "-40vw",
  bottom: "0",
  transition: "left 250ms ease",
  zIndex: "9999999999999999",
  boxShadow: "0px 0px 15px #000"
};
var containerStyle = {
  background: "#ddd",
  borderRadius: "3px",
  width: "40vw",
  height: "100vh"
};

var shadows = function shadows(themeMode) {
  if (themeMode === void 0) {
    themeMode = "light";
  }

  var rgb = themeMode === "light" ? "#8c98a4" : "#000000";
  return ["none", "0 3px 6px 0 " + alpha(rgb, 0.25), "0 12px 15px " + alpha(rgb, 0.1), "0 6px 24px 0 " + alpha(rgb, 0.125), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175), "0 10px 40px 10px " + alpha(rgb, 0.175)];
};

var light = {
  alternate: {
    main: "#f7faff",
    dark: "#edf1f7"
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  mode: "light",
  common: {
    black: "#000",
    white: "#fff"
  },
  primary: {
    main: "#497edf",
    light: "#467de3",
    dark: "#1a202c",
    contrastText: "#fff"
  },
  secondary: {
    light: "#FF9400",
    main: "#FF5D0A",
    dark: "#FF3E12",
    contrastText: "#fff"
  },
  text: {
    primary: "#1e2022",
    secondary: "#5b667d"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#ffffff",
    "default": "#ffffff",
    level2: "#f2f4fb",
    level1: "#f5f5f5"
  },
  zesty: {
    zestyDarkBlue: "#1b202c",
    zestyTabBlue: "#697A91",
    zestyOrange: "#FF5D0A",
    zestyRed: "rgb(230,74,23)",
    devTheme: "#77b250",
    zestyGreen: "#75BF43",
    zestyBlue: "#497edf",
    zestyTeal: "#6a9293",
    zestyWhite: "#eff5ff",
    bulmaBlue: "#336fdb",
    zestyLightBlue: "#C3CDDF",
    zestyFieldBlue: "#C7D4EA",
    zestyBackgroundBlue: "#D6E8F5",
    zestyGrey: "#5B667D",
    zestyLightGrey: "#A7AFBF",
    navBorderColor: "#3c465e",
    yellowHighlight: "#FFFDE2",
    zestyYellow: "rgb(249, 185, 52)",
    white: "#ffffff",
    black: "#000000",
    zestyWhiteBlue: "#f2f4fb",
    zestyPink: "#EA398C",
    darkBlue: "#1B1F2C",
    parsleyGreen: "#96C45B",
    headerColor: "#CFDCFF",
    pureWhite: "#ffffff",
    lightBlue: "#D9E2F4"
  }
};
var dark = {
  alternate: {
    main: "#1a2138",
    dark: "#151a30"
  },
  cardShadow: "rgba(0, 0, 0, .11)",
  common: {
    black: "#000",
    white: "#fff"
  },
  mode: "dark",
  primary: {
    main: "#1976d2",
    light: "#2196f3",
    dark: "#0d47a1",
    contrastText: "#fff"
  },
  secondary: {
    light: "#FF9400",
    main: "#FF5D0A",
    dark: "#FF3E12",
    contrastText: "#fff"
  },
  text: {
    primary: "#EEEEEF",
    secondary: "#AEB0B4"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#1a202c",
    "default": "#1a202c",
    level2: "#3c465e",
    level1: "#2D3748"
  },
  zesty: {
    zestyDarkBlue: "#1b202c",
    zestyTabBlue: "#697A91",
    zestyOrange: "#FF5D0A",
    zestyRed: "rgb(230,74,23)",
    devTheme: "#77b250",
    zestyGreen: "#75BF43",
    zestyBlue: "#497edf",
    zestyTeal: "#6a9293",
    zestyWhite: "#eff5ff",
    bulmaBlue: "#336fdb",
    zestyLightBlue: "#C3CDDF",
    zestyFieldBlue: "#C7D4EA",
    zestyBackgroundBlue: "#D6E8F5",
    zestyGrey: "#5B667D",
    zestyLightGrey: "#A7AFBF",
    navBorderColor: "#3c465e",
    yellowHighlight: "#FFFDE2",
    white: "#ffffff",
    black: "#000000",
    zestyWhiteBlue: "#f2f4fb",
    zestyPink: "#EA398C",
    darkBlue: "#1B1F2C",
    parsleyGreen: "#96C45B",
    headerColor: "#CFDCFF",
    pureWhite: "#ffffff",
    lightBlue: "#D9E2F4"
  }
};

var getTheme = function getTheme(mode, themeToggler) {
  return responsiveFontSizes(createTheme({
    // @ts-ignore
    palette: mode === "light" ? light : dark,
    // @ts-ignore
    shadows: shadows(mode),
    typography: {
      fontFamily: '"Mulish", sans-serif',
      button: {
        textTransform: "none",
        fontWeight: "medium"
      }
    },
    zIndex: {
      appBar: 1200,
      drawer: 1300
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            borderRadius: 5,
            paddingTop: 10,
            paddingBottom: 10
          },
          containedSecondary: mode === "light" ? {
            color: "white"
          } : {}
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 5
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 5
          },
          input: {
            borderRadius: 5
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        }
      }
    },
    // @ts-ignore
    themeToggler: themeToggler
  }));
};

var useDarkMode = function useDarkMode() {
  // set the initial theme from localstorage or 'light'
  var _React$useState = React__default.useState(window.localStorage.getItem("themeMode") || "light"),
      themeMode = _React$useState[0],
      setTheme = _React$useState[1];

  var _React$useState2 = React__default.useState(false),
      mountedComponent = _React$useState2[0],
      setMountedComponent = _React$useState2[1];

  var setMode = function setMode(mode) {
    try {
      window.localStorage.setItem("themeMode", mode);
    } catch (_unused) {
      /* do nothing */
    }

    setTheme(mode);
  };

  var themeToggler = function themeToggler() {
    themeMode === "light" ? setMode("dark") : setMode("light");
  };

  React__default.useEffect(function () {
    try {
      var localTheme = window.localStorage.getItem("themeMode");
      localTheme ? setTheme(localTheme) : setMode("light");
    } catch (_unused2) {
      setMode("light");
    }

    setMountedComponent(true);
  }, []);
  return [themeMode, themeToggler, mountedComponent];
};

var tabList = [{
  id: 1,
  label: "Content Viewer",
  value: "Content Viewer"
}, {
  id: 2,
  label: "Meta Viewer",
  value: "Meta Viewer"
}, {
  id: 3,
  label: "Json Data Viewer",
  value: "Json Data Viewer"
}]; // dom access highlight function

var expandBody = function expandBody(bool) {
  var body = document.querySelector("body");
  body.style.marginLeft = bool ? "40vw" : "0";
  body.style.transition = "margin 250ms ease";
  var ze = document.getElementById("zestyExplorer");
  ze.style.left = bool ? "0" : "-40vw";
}; // renanme content to contentData


var ZestyExplorerBrowser = function ZestyExplorerBrowser(_ref) {
  var _result$, _result$$matches;

  var pageData = _ref.pageData,
      response = _ref.response,
      contentData = _ref.contentData,
      children = _ref.children;
  var content = contentData || dummydata;

  var _React$useState = React__default.useState("Content Viewer"),
      currentTab = _React$useState[0],
      setcurrentTab = _React$useState[1];

  var _React$useState2 = React__default.useState(),
      search = _React$useState2[0],
      setSearch = _React$useState2[1];

  var _React$useState3 = React__default.useState(""),
      verifySuccess = _React$useState3[0],
      setverifySuccess = _React$useState3[1];

  var _React$useState4 = React__default.useState(""),
      verifyFailed = _React$useState4[0],
      setverifyFailed = _React$useState4[1];

  var _React$useState5 = React__default.useState([]),
      instances = _React$useState5[0],
      setinstances = _React$useState5[1];

  var _React$useState6 = React__default.useState(""),
      models = _React$useState6[0],
      setmodels = _React$useState6[1];

  var _React$useState7 = React__default.useState(""),
      views = _React$useState7[0],
      setviews = _React$useState7[1];

  var _React$useState8 = React__default.useState(false),
      loading = _React$useState8[0],
      setloading = _React$useState8[1]; // for loading of tabs


  var _React$useState9 = React__default.useState(0),
      time = _React$useState9[0],
      _settime = _React$useState9[1]; // for loading of tabs


  React__default.useEffect(function () {
    var timer = setTimeout(function () {
      if (time > 0) {
        _settime(time - 1);
      }
    }, 1000);
    return function () {
      return clearTimeout(timer);
    };
  }); // convert obj to dot
  // @ts-ignore

  var flaten1 = flattenObj(content); // convert to array of objects

  var flaten2 = convertToArray(flaten1); // generate columns for search

  var columns = flaten2.map(function (e) {
    var res = Object.keys(e);
    return res.toString().replace(/.[0-9]/g, "");
  }); // search options

  var options = {
    includeScore: true,
    useExtendedSearch: true,
    includeMatches: true,
    ignoreLocation: true,
    findAllMatches: true,
    threshold: 0,
    isCaseSensitive: false,
    minMatchCharLength: 1,
    keys: columns
  }; // search func

  var fuse = new Fuse([content], options);
  var result = fuse.search(search || ""); // convert as key value pairs

  var result2 = result && ((_result$ = result[0]) == null ? void 0 : (_result$$matches = _result$.matches) == null ? void 0 : _result$$matches.map(function (e) {
    var _ref2;

    return _ref2 = {}, _ref2["" + e.key] = e.value, _ref2;
  }).map(function (e) {
    return deepen(e);
  })); // display the result of search

  var data = search ? result2 : {
    content: content
  };
  console.log(pageData, "This the Pagedata"); // FetchWrapper Section

  var instanceZUID = getCookie("INSTANCE_ZUID") || "8-c4eec0b7d4-8lx0ch";
  var userAppSID = getCookie("APP_SID") || "f3555fb52bdd3c6e3b3ff5421b74b740bf41f4e5"; // const instanceZUID = ""
  // const userAppSID = ""
  // @ts-ignore

  var ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  var verifyUser = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var res;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setloading(true);
              _context.next = 3;
              return ZestyAPI.verify();

            case 3:
              res = _context.sent;
              res.code === 200 && setverifySuccess(res.meta);
              res.code !== 200 && setverifyFailed(res.error);
              setloading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function verifyUser() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getInstances = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var res;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ZestyAPI.getInstances();

            case 2:
              res = _context2.sent;
              !res.error && setinstances(res);
              res.error && console.log(res, "instance failed");

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getInstances() {
      return _ref4.apply(this, arguments);
    };
  }();

  var getModels = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      var res;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return ZestyAPI.getModels();

            case 2:
              res = _context3.sent;
              !res.error && setmodels(res);
              res.error && console.log(res, "models failed");

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getModels() {
      return _ref5.apply(this, arguments);
    };
  }();

  var getViews = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
      var res;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return ZestyAPI.getViews();

            case 2:
              res = _context4.sent;
              !res.error && setviews(res);
              res.error && console.log(res, "views failed");

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getViews() {
      return _ref6.apply(this, arguments);
    };
  }();

  React__default.useEffect(function () {
    verifyUser();
    getInstances();
    getModels();
    getViews();
  }, []);
  React__default.useEffect(function () {
    console.log(instances, views, models, "datas");
  }, [instances, models, views]); // show loading

  if (loading && !verifyFailed && !verifySuccess) {
    return React__default.createElement(Box$1, {
      sx: verifyUserPrompt
    }, React__default.createElement("h1", null, "Loading"));
  } // show failed login prompt


  if (!verifySuccess) {
    return React__default.createElement(Box$1, {
      sx: verifyUserPrompt
    }, React__default.createElement("h1", null, "Please Login"), React__default.createElement(Button, {
      href: "https://accounts.zesty.io/login",
      variant: "contained",
      color: "secondary",
      size: "small"
    }, "Sign in to Zesty.io"));
  }

  return React__default.createElement(Box$1, {
    sx: containerStyle
  }, React__default.createElement(Headers, {
    children: children,
    content: content,
    response: response
  }), React__default.createElement(TabContainer, {
    setcurrentTab: setcurrentTab,
    tabList: tabList,
    settime: function settime() {
      return _settime(2);
    }
  }), React__default.createElement("div", {
    style: {
      position: "relative"
    }
  }, time > 0 && React__default.createElement(Loader, null), currentTab === "Content Viewer" && React__default.createElement(ContentViewer, {
    data: data,
    search: search,
    setSearch: setSearch
  }), currentTab === "Meta Viewer" && React__default.createElement(MetaViewer, {
    response: response,
    content: contentData
  }), currentTab === "Json Data Viewer" && React__default.createElement(JsonDataViewer, {
    data: data,
    search: search,
    setSearch: setSearch
  })));
}; // Main ZESTY EXPLORER


var ZestyExplorer = function ZestyExplorer(_ref7) {
  var _ref7$content = _ref7.content,
      content = _ref7$content === void 0 ? {} : _ref7$content;

  var _React$useState10 = React__default.useState(false),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];

  var _React$useState11 = React__default.useState(""),
      pageData = _React$useState11[0],
      setPageData = _React$useState11[1];

  var _React$useState12 = React__default.useState(""),
      response = _React$useState12[0],
      setResponse = _React$useState12[1];

  var _useDarkMode = useDarkMode(),
      themeMode = _useDarkMode[0],
      themeToggler = _useDarkMode[1],
      mountedComponent = _useDarkMode[2];

  console.log(themeMode, mountedComponent);

  var getData = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5() {
      var _yield$getPageData, data, response;

      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return getPageData();

            case 2:
              _yield$getPageData = _context5.sent;
              data = _yield$getPageData.data;
              response = _yield$getPageData.response;
              data && setPageData(data);
              response && setResponse(response);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getData() {
      return _ref8.apply(this, arguments);
    };
  }(); // check if content is available


  React__default.useEffect(function () {
    if (content && Object.keys(content).length === 0) {
      getData();
    } else {
      setPageData(content);
    }
  }, []);

  var searchObject = _extends({}, pageData); // unset navigations for faster search


  delete searchObject.navigationTree; // custom nav tree building

  delete searchObject.navigationCustom;

  if (!canUseDOM()) {
    return null;
  }

  function toggleOpenState(bool) {
    setOpen(bool);
    expandBody(bool);
  }

  return React__default.createElement("div", {
    id: "zestyExplorer",
    style: zestyWrapper
  }, React__default.createElement(Helmet, null, React__default.createElement("script", {
    src: "https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.min.js"
  })), React__default.createElement(ThemeProvider, {
    theme: getTheme("light", themeToggler)
  }, React__default.createElement(CssBaseline, null), !open && React__default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return toggleOpenState(true);
    },
    style: buttonStyles
  }, React__default.createElement("img", {
    src: "https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png",
    width: "32px",
    height: "32px",
    alt: "Zesty.io Logo"
  }), React__default.createElement("span", {
    style: zestyStyles
  }, "Compass")), open && React__default.createElement(Box$1, null, React__default.createElement(ZestyExplorerBrowser, {
    response: response,
    pageData: pageData,
    contentData: searchObject
  }, React__default.createElement(Button, {
    onClick: function onClick() {
      return toggleOpenState(false);
    },
    variant: "outlined",
    size: "small"
  }, React__default.createElement(CloseFullscreenIcon, null))))));
};

export { ZestyExplorer };
//# sourceMappingURL=explorer.esm.js.map
