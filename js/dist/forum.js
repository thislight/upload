module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*************************************************************************************************************!*\
  !*** /Users/luceos/Sites/flarum/workbench/core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "../../core/js/src/common/Component.js":
/*!****************************************************************************!*\
  !*** /Users/luceos/Sites/flarum/workbench/core/js/src/common/Component.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * The `Component` class defines a user interface 'building block'. A component
 * can generate a virtual DOM to be rendered on each redraw.
 *
 * An instance's virtual DOM can be retrieved directly using the {@link
 * Component#render} method.
 *
 * @example
 * this.myComponentInstance = new MyComponent({foo: 'bar'});
 * return m('div', this.myComponentInstance.render());
 *
 * Alternatively, components can be nested, letting Mithril take care of
 * instance persistence. For this, the static {@link Component.component} method
 * can be used.
 *
 * @example
 * return m('div', MyComponent.component({foo: 'bar'));
 *
 * @see https://lhorie.github.io/mithril/mithril.component.html
 * @abstract
 */
var Component =
/*#__PURE__*/
function () {
  /**
   * @param {Object} props
   * @param {Array|Object} children
   * @public
   */
  function Component(props, children) {
    if (props === void 0) {
      props = {};
    }

    if (children === void 0) {
      children = null;
    }

    if (children) props.children = children;
    this.constructor.initProps(props);
    /**
     * The properties passed into the component.
     *
     * @type {Object}
     */

    this.props = props;
    /**
     * The root DOM element for the component.
     *
     * @type DOMElement
     * @public
     */

    this.element = null;
    /**
     * Whether or not to retain the component's subtree on redraw.
     *
     * @type {boolean}
     * @public
     */

    this.retain = false;
    this.init();
  }
  /**
   * Called when the component is constructed.
   *
   * @protected
   */


  var _proto = Component.prototype;

  _proto.init = function init() {};
  /**
   * Called when the component is destroyed, i.e. after a redraw where it is no
   * longer a part of the view.
   *
   * @see https://lhorie.github.io/mithril/mithril.component.html#unloading-components
   * @param {Object} e
   * @public
   */


  _proto.onunload = function onunload() {};
  /**
   * Get the renderable virtual DOM that represents the component's view.
   *
   * This should NOT be overridden by subclasses. Subclasses wishing to define
   * their virtual DOM should override Component#view instead.
   *
   * @example
   * this.myComponentInstance = new MyComponent({foo: 'bar'});
   * return m('div', this.myComponentInstance.render());
   *
   * @returns {Object}
   * @final
   * @public
   */


  _proto.render = function render() {
    var _this = this;

    var vdom = this.retain ? {
      subtree: 'retain'
    } : this.view(); // Override the root element's config attribute with our own function, which
    // will set the component instance's element property to the root DOM
    // element, and then run the component class' config method.

    vdom.attrs = vdom.attrs || {};
    var originalConfig = vdom.attrs.config;

    vdom.attrs.config = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this.element = args[0];

      _this.config.apply(_this, args.slice(1));

      if (originalConfig) originalConfig.apply(_this, args);
    };

    return vdom;
  };
  /**
   * Returns a jQuery object for this component's element. If you pass in a
   * selector string, this method will return a jQuery object, using the current
   * element as its buffer.
   *
   * For example, calling `component.$('li')` will return a jQuery object
   * containing all of the `li` elements inside the DOM element of this
   * component.
   *
   * @param {String} [selector] a jQuery-compatible selector string
   * @returns {jQuery} the jQuery object for the DOM node
   * @final
   * @public
   */


  _proto.$ = function (_$) {
    function $(_x) {
      return _$.apply(this, arguments);
    }

    $.toString = function () {
      return _$.toString();
    };

    return $;
  }(function (selector) {
    var $element = $(this.element);
    return selector ? $element.find(selector) : $element;
  });
  /**
   * Called after the component's root element is redrawn. This hook can be used
   * to perform any actions on the DOM, both on the initial draw and any
   * subsequent redraws. See Mithril's documentation for more information.
   *
   * @see https://lhorie.github.io/mithril/mithril.html#the-config-attribute
   * @param {Boolean} isInitialized
   * @param {Object} context
   * @param {Object} vdom
   * @public
   */


  _proto.config = function config() {};
  /**
   * Get the virtual DOM that represents the component's view.
   *
   * @return {Object} The virtual DOM
   * @protected
   */


  _proto.view = function view() {
    throw new Error('Component#view must be implemented by subclass');
  };
  /**
   * Get a Mithril component object for this component, preloaded with props.
   *
   * @see https://lhorie.github.io/mithril/mithril.component.html
   * @param {Object} [props] Properties to set on the component
   * @param children
   * @return {Object} The Mithril component object
   * @property {function} controller
   * @property {function} view
   * @property {Object} component The class of this component
   * @property {Object} props The props that were passed to the component
   * @public
   */


  Component.component = function component(props, children) {
    if (props === void 0) {
      props = {};
    }

    if (children === void 0) {
      children = null;
    }

    var componentProps = Object.assign({}, props);
    if (children) componentProps.children = children;
    this.initProps(componentProps); // Set up a function for Mithril to get the component's view. It will accept
    // the component's controller (which happens to be the component itself, in
    // our case), update its props with the ones supplied, and then render the view.

    var view = function view(component) {
      component.props = componentProps;
      return component.render();
    }; // Mithril uses this property on the view function to cache component
    // controllers between redraws, thus persisting component state.


    view.$original = this.prototype.view; // Our output object consists of a controller constructor + a view function
    // which Mithril will use to instantiate and render the component. We also
    // attach a reference to the props that were passed through and the
    // component's class for reference.

    var output = {
      controller: this.bind(undefined, componentProps),
      view: view,
      props: componentProps,
      component: this
    }; // If a `key` prop was set, then we'll assume that we want that to actually
    // show up as an attribute on the component object so that Mithril's key
    // algorithm can be applied.

    if (componentProps.key) {
      output.attrs = {
        key: componentProps.key
      };
    }

    return output;
  };
  /**
   * Initialize the component's props.
   *
   * @param {Object} props
   * @public
   */


  Component.initProps = function initProps(props) {};

  return Component;
}();



/***/ }),

/***/ "../../core/js/src/common/components/Separator.js":
/*!***************************************************************************************!*\
  !*** /Users/luceos/Sites/flarum/workbench/core/js/src/common/components/Separator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "../../core/js/src/common/Component.js");


/**
 * The `Separator` component defines a menu separator item.
 */

var Separator =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Separator, _Component);

  function Separator() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Separator.prototype;

  _proto.view = function view() {
    return m("li", {
      className: "Dropdown-separator"
    });
  };

  return Separator;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);

Separator.isListItem = true;
/* harmony default export */ __webpack_exports__["default"] = (Separator);

/***/ }),

/***/ "../../core/js/src/common/helpers/listItems.js":
/*!************************************************************************************!*\
  !*** /Users/luceos/Sites/flarum/workbench/core/js/src/common/helpers/listItems.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listItems; });
/* harmony import */ var _components_Separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Separator */ "../../core/js/src/common/components/Separator.js");
/* harmony import */ var _utils_classList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classList */ "../../core/js/src/common/utils/classList.js");



function isSeparator(item) {
  return item && item.component === _components_Separator__WEBPACK_IMPORTED_MODULE_0__["default"];
}

function withoutUnnecessarySeparators(items) {
  var newItems = [];
  var prevItem;
  items.forEach(function (item, i) {
    if (!isSeparator(item) || prevItem && !isSeparator(prevItem) && i !== items.length - 1) {
      prevItem = item;
      newItems.push(item);
    }
  });
  return newItems;
}
/**
 * The `listItems` helper wraps a collection of components in <li> tags,
 * stripping out any unnecessary `Separator` components.
 *
 * @param {*} items
 * @return {Array}
 */


function listItems(items) {
  if (!(items instanceof Array)) items = [items];
  return withoutUnnecessarySeparators(items).map(function (item) {
    var isListItem = item.component && item.component.isListItem;
    var active = item.component && item.component.isActive && item.component.isActive(item.props);
    var className = item.props ? item.props.itemClassName : item.itemClassName;

    if (isListItem) {
      item.attrs = item.attrs || {};
      item.attrs.key = item.attrs.key || item.itemName;
    }

    return isListItem ? item : m("li", {
      className: Object(_utils_classList__WEBPACK_IMPORTED_MODULE_1__["default"])([item.itemName ? 'item-' + item.itemName : '', className, active ? 'active' : '']),
      key: item.itemName
    }, item);
  });
}

/***/ }),

/***/ "../../core/js/src/common/utils/classList.js":
/*!**********************************************************************************!*\
  !*** /Users/luceos/Sites/flarum/workbench/core/js/src/common/utils/classList.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return classList; });
/**
 * The `classList` utility creates a list of class names by joining an object's
 * keys, but only for values which are truthy.
 *
 * @example
 * classList({ foo: true, bar: false, qux: 'qaz' });
 * // "foo qux"
 *
 * @param {Object} classes
 * @return {String}
 */
function classList(classes) {
  var classNames;

  if (classes instanceof Array) {
    classNames = classes.filter(function (name) {
      return name;
    });
  } else {
    classNames = [];

    for (var i in classes) {
      if (classes[i]) classNames.push(i);
    }
  }

  return classNames.join(' ');
}

/***/ }),

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/DragAndDrop.js":
/*!*********************************************!*\
  !*** ./src/forum/components/DragAndDrop.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragAndDrop; });
var DragAndDrop =
/*#__PURE__*/
function () {
  function DragAndDrop(uploadButton) {
    if (this.initialized) return;
    this.uploadButton = uploadButton;
    this.textarea = $("#composer .Composer");
    $(this.textarea).on('dragover', this.in.bind(this));
    $(this.textarea).on('dragleave', this.out.bind(this));
    $(this.textarea).on('dragend', this.out.bind(this));
    $(this.textarea).on('drop', this.dropping.bind(this));
    this.isDropping = this.over = false;
    this.initialized = true;
  }

  var _proto = DragAndDrop.prototype;

  _proto.in = function _in(e) {
    e.preventDefault();

    if (!this.over) {
      this.textarea.toggleClass('flagrow-upload-dragging', true);
      this.over = true;
    }
  };

  _proto.out = function out(e) {
    e.preventDefault();

    if (this.over) {
      this.textarea.toggleClass('flagrow-upload-dragging', false);
      this.over = false;
    }
  };

  _proto.dropping = function dropping(e) {
    var _this = this;

    e.preventDefault();

    if (!this.isDropping) {
      this.isDropping = true;
      this.textarea.addClass('flagrow-dropping');
      m.redraw();
      this.uploadButton.uploadFiles(e.originalEvent.dataTransfer.files).then(function () {
        _this.textarea.removeClass('flagrow-dropping');

        _this.isDropping = false;
      });
    }
  };

  return DragAndDrop;
}();



/***/ }),

/***/ "./src/forum/components/PasteClipboard.js":
/*!************************************************!*\
  !*** ./src/forum/components/PasteClipboard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasteClipboard; });
var PasteClipboard =
/*#__PURE__*/
function () {
  function PasteClipboard(uploadButton) {
    if (this.initialized) return;
    this.uploadButton = uploadButton;
    document.addEventListener('paste', this.paste.bind(this));
  }

  var _proto = PasteClipboard.prototype;

  _proto.paste = function paste(e) {
    if (e.clipboardData && e.clipboardData.items) {
      var items = e.clipboardData.items;
      var files = [];

      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          files.push(items[i].getAsFile());
        }
      }

      if (files.length > 0) {
        m.redraw();
        this.uploadButton.uploadFiles(files);
      }
    }
  };

  return PasteClipboard;
}();



/***/ }),

/***/ "./src/forum/components/UploadButton.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UploadButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);





var UploadButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadButton, _Component);

  function UploadButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UploadButton.prototype;

  /**
   * Load the configured remote uploader service.
   */
  _proto.init = function init() {
    // the service type handling uploads
    this.textAreaObj = null; // initial state of the button

    this.loading = false;
  };
  /**
   * Show the actual Upload Button.
   *
   * @returns {*}
   */


  _proto.view = function view() {
    return m('div', {
      className: 'Button hasIcon flagrow-upload-button Button--icon'
    }, [this.loading ? flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button-icon'
    }) : flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('far fa-file', {
      className: 'Button-icon'
    }), m('span', {
      className: 'Button-label'
    }, this.loading ? app.translator.trans('flagrow-upload.forum.states.loading') : app.translator.trans('flagrow-upload.forum.buttons.attach')), m('form#flagrow-upload-form', [m('input', {
      type: 'file',
      multiple: true,
      onchange: this.process.bind(this)
    })])]);
  };
  /**
   * Process the upload event.
   *
   * @param e
   */


  _proto.process = function process(e) {
    // get the file from the input field
    var files = $(e.target)[0].files; // set the button in the loading state (and redraw the element!)

    this.loading = true;
    m.redraw();
    this.uploadFiles(files, this.success, this.failure);
  };

  _proto.uploadFiles = function uploadFiles(files, successCallback, failureCallback) {
    var data = new FormData();

    for (var i = 0; i < files.length; i++) {
      data.append('files[]', files[i]);
    } // send a POST request to the api


    return app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/flagrow/upload',
      // prevent JSON.stringify'ing the form data in the XHR call
      serialize: function serialize(raw) {
        return raw;
      },
      data: data
    }).then(this.success.bind(this), this.failure.bind(this));
  };
  /**
   * Handles errors.
   *
   * @param message
   */


  _proto.failure = function failure(message) {} // todo show popup

  /**
   * Appends the file's link to the body of the composer.
   *
   * @param file
   */
  ;

  _proto.success = function success(response) {
    var _this = this;

    response.forEach(function (bbcode) {
      _this.textAreaObj.insertAtCursor(bbcode + '\n');
    }); // if we are not starting a new discussion, the variable is defined

    if (typeof this.textAreaObj.props.preview !== 'undefined') {
      // show what we just uploaded
      this.textAreaObj.props.preview();
    } // reset the button for a new upload


    setTimeout(function () {
      document.getElementById("flagrow-upload-form").reset();
      _this.loading = false;
    }, 1000);
  };

  return UploadButton;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/downloadButtonInteraction.js":
/*!************************************************!*\
  !*** ./src/forum/downloadButtonInteraction.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'config', function (isInitialized) {
    var _this = this;

    if (isInitialized) return;
    this.$('.flagrow-download-button[data-uuid]').unbind('click').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var url = app.forum.attribute('apiUrl') + '/flagrow/download';
      url += '/' + $(e.currentTarget).attr('data-uuid');
      url += '/' + _this.props.post.id();
      url += '/' + app.session.csrfToken;
      window.open(url);
    });
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UploadButton */ "./src/forum/components/UploadButton.js");
/* harmony import */ var _components_DragAndDrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DragAndDrop */ "./src/forum/components/DragAndDrop.js");
/* harmony import */ var _components_PasteClipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PasteClipboard */ "./src/forum/components/PasteClipboard.js");
/* harmony import */ var _pages_GalleryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/GalleryPage */ "./src/forum/pages/GalleryPage.js");
/* harmony import */ var _downloadButtonInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloadButtonInteraction */ "./src/forum/downloadButtonInteraction.js");







app.initializers.add('flagrow-upload', function (app) {
  app.routes.flagrow_files = {
    path: '/u/:username/gallery',
    component: _pages_GalleryPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  };
  var uploadButton, drag, clipboard;
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'controlItems', function (items) {
    // check whether the user can upload images. If not, returns.
    if (!app.forum.attribute('canUpload')) return; // create and add the button

    uploadButton = new _components_UploadButton__WEBPACK_IMPORTED_MODULE_2__["default"]();
    uploadButton.textAreaObj = this;
    items.add('flagrow-upload', uploadButton, 0); // animate the button on hover: shows the label

    $('.Button-label', '.item-flagrow-upload > div').hide();
    $('.item-flagrow-upload > div').hover(function () {
      $('.Button-label', this).show();
      $(this).removeClass('Button--icon');
    }, function () {
      $('.Button-label', this).hide();
      $(this).addClass('Button--icon');
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'configTextarea', function () {
    // check whether the user can upload images. If not, returns.
    if (!app.forum.attribute('canUpload')) return;

    if (!drag) {
      drag = new _components_DragAndDrop__WEBPACK_IMPORTED_MODULE_3__["default"](uploadButton);
    }

    if (!clipboard) {
      clipboard = new _components_PasteClipboard__WEBPACK_IMPORTED_MODULE_4__["default"](uploadButton);
    }
  });
  Object(_downloadButtonInteraction__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/forum/pages/GalleryPage.js":
/*!****************************************!*\
  !*** ./src/forum/pages/GalleryPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_src_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/js/src/common/helpers/listItems */ "../../core/js/src/common/helpers/listItems.js");




var TagsPage =
/*#__PURE__*/
function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagsPage, _UserPage);

  function TagsPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = TagsPage.prototype;

  _proto.init = function init() {
    _UserPage.prototype.init.call(this);

    this.show(app.session.user);
    app.setTitle(app.translator.trans('core.forum.settings.title'));
  };

  _proto.content = function content() {
    return m("div", {
      className: "SettingsPage"
    }, m("ul", null, Object(_core_js_src_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2__["default"])(this.settingsItems().toArray())));
  };

  _proto.show = function show(user) {
    this.user = user;
    app.setTitle(user.displayName());
    m.redraw();
  };

  return TagsPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map