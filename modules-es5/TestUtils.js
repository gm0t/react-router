'use strict';

var _class5, _temp, _class7, _temp2, _class9, _temp3, _class11, _temp4;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var RouteHandler = require('./components/RouteHandler');
var PropTypes = require('./PropTypes');

exports.Nested = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'Nested' },
          'Nested'
        ),
        React.createElement(RouteHandler, null)
      );
    }
  }]);

  return _class;
}(React.Component);

exports.Foo = function (_React$Component2) {
  _inherits(_class2, _React$Component2);

  function _class2() {
    _classCallCheck(this, _class2);

    return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Foo' },
        'Foo'
      );
    }
  }]);

  return _class2;
}(React.Component);

exports.Bar = function (_React$Component3) {
  _inherits(_class3, _React$Component3);

  function _class3() {
    _classCallCheck(this, _class3);

    return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
  }

  _createClass(_class3, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Bar' },
        'Bar'
      );
    }
  }]);

  return _class3;
}(React.Component);

exports.Baz = function (_React$Component4) {
  _inherits(_class4, _React$Component4);

  function _class4() {
    _classCallCheck(this, _class4);

    return _possibleConstructorReturn(this, (_class4.__proto__ || Object.getPrototypeOf(_class4)).apply(this, arguments));
  }

  _createClass(_class4, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Baz' },
        'Baz'
      );
    }
  }]);

  return _class4;
}(React.Component);

exports.Async = (_temp = _class5 = function (_React$Component5) {
  _inherits(_class5, _React$Component5);

  function _class5() {
    _classCallCheck(this, _class5);

    return _possibleConstructorReturn(this, (_class5.__proto__ || Object.getPrototypeOf(_class5)).apply(this, arguments));
  }

  _createClass(_class5, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Async' },
        'Async'
      );
    }
  }], [{
    key: 'willTransitionTo',
    value: function willTransitionTo(transition, params, query, callback) {
      setTimeout(callback, exports.Async.delay);
    }
  }]);

  return _class5;
}(React.Component), _class5.delay = 10, _temp);

exports.RedirectToFoo = function (_React$Component6) {
  _inherits(_class6, _React$Component6);

  function _class6() {
    _classCallCheck(this, _class6);

    return _possibleConstructorReturn(this, (_class6.__proto__ || Object.getPrototypeOf(_class6)).apply(this, arguments));
  }

  _createClass(_class6, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'willTransitionTo',
    value: function willTransitionTo(transition) {
      transition.redirect('/foo');
    }
  }]);

  return _class6;
}(React.Component);

exports.RedirectToFooAsync = (_temp2 = _class7 = function (_React$Component7) {
  _inherits(_class7, _React$Component7);

  function _class7() {
    _classCallCheck(this, _class7);

    return _possibleConstructorReturn(this, (_class7.__proto__ || Object.getPrototypeOf(_class7)).apply(this, arguments));
  }

  _createClass(_class7, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'willTransitionTo',
    value: function willTransitionTo(transition, params, query, callback) {
      setTimeout(function () {
        transition.redirect('/foo');
        callback();
      }, exports.RedirectToFooAsync.delay);
    }
  }]);

  return _class7;
}(React.Component), _class7.delay = 10, _temp2);

exports.Abort = function (_React$Component8) {
  _inherits(_class8, _React$Component8);

  function _class8() {
    _classCallCheck(this, _class8);

    return _possibleConstructorReturn(this, (_class8.__proto__ || Object.getPrototypeOf(_class8)).apply(this, arguments));
  }

  _createClass(_class8, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'willTransitionTo',
    value: function willTransitionTo(transition) {
      transition.abort();
    }
  }]);

  return _class8;
}(React.Component);

exports.AbortAsync = (_temp3 = _class9 = function (_React$Component9) {
  _inherits(_class9, _React$Component9);

  function _class9() {
    _classCallCheck(this, _class9);

    return _possibleConstructorReturn(this, (_class9.__proto__ || Object.getPrototypeOf(_class9)).apply(this, arguments));
  }

  _createClass(_class9, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'willTransitionTo',
    value: function willTransitionTo(transition, params, query, callback) {
      setTimeout(function () {
        transition.abort();
        callback();
      }, exports.AbortAsync.delay);
    }
  }]);

  return _class9;
}(React.Component), _class9.delay = 10, _temp3);

exports.EchoFooProp = function (_React$Component10) {
  _inherits(_class10, _React$Component10);

  function _class10() {
    _classCallCheck(this, _class10);

    return _possibleConstructorReturn(this, (_class10.__proto__ || Object.getPrototypeOf(_class10)).apply(this, arguments));
  }

  _createClass(_class10, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.foo
      );
    }
  }]);

  return _class10;
}(React.Component);

exports.EchoBarParam = (_temp4 = _class11 = function (_React$Component11) {
  _inherits(_class11, _React$Component11);

  function _class11() {
    _classCallCheck(this, _class11);

    return _possibleConstructorReturn(this, (_class11.__proto__ || Object.getPrototypeOf(_class11)).apply(this, arguments));
  }

  _createClass(_class11, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'EchoBarParam' },
        this.context.router.getCurrentParams().bar
      );
    }
  }]);

  return _class11;
}(React.Component), _class11.contextTypes = {
  router: PropTypes.router.isRequired
}, _temp4);