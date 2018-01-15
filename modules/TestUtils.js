var React = require('react');
var RouteHandler = require('./components/RouteHandler');
var PropTypes = require('./PropTypes');

exports.Nested = class extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Nested">Nested</h1>
        <RouteHandler />
      </div>
    );
  }
};

exports.Foo = class extends React.Component {
  render() {
    return <div className="Foo">Foo</div>;
  }
};

exports.Bar = class extends React.Component {
  render() {
    return <div className="Bar">Bar</div>;
  }
};

exports.Baz = class extends React.Component {
  render() {
    return <div className="Baz">Baz</div>;
  }
};

exports.Async = class extends React.Component {
  static delay = 10;

  static willTransitionTo(transition, params, query, callback) {
    setTimeout(callback, exports.Async.delay);
  }

  render() {
    return <div className="Async">Async</div>;
  }
};

exports.RedirectToFoo = class extends React.Component {
  static willTransitionTo(transition) {
    transition.redirect('/foo');
  }

  render() {
    return null;
  }
};

exports.RedirectToFooAsync = class extends React.Component {
  static delay = 10;

  static willTransitionTo(transition, params, query, callback) {
    setTimeout(function () {
      transition.redirect('/foo');
      callback();
    }, exports.RedirectToFooAsync.delay);
  }

  render() {
    return null;
  }
};


exports.Abort = class extends React.Component {
  static willTransitionTo(transition) {
    transition.abort();
  }

  render() {
    return null;
  }
};

exports.AbortAsync = class extends React.Component {
  static delay = 10;

  static willTransitionTo(transition, params, query, callback) {
    setTimeout(function () {
      transition.abort();
      callback();
    }, exports.AbortAsync.delay);
  }

  render() {
    return null;
  }
};

exports.EchoFooProp = class extends React.Component {
  render() {
    return <div>{this.props.foo}</div>;
  }
};

exports.EchoBarParam = class extends React.Component {
  static contextTypes = {
    router: PropTypes.router.isRequired
  };

  render() {
    return <div className="EchoBarParam">{this.context.router.getCurrentParams().bar}</div>;
  }
};
