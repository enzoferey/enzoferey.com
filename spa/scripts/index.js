// Declaraciones para tener las buenas referencias
/*var ReactRouter = window.ReactRouter;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Redirect = ReactRouter.Redirect;
var browserHistory = ReactRouter.browserHistory;*/

var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter;

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
            <ul>
                <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
                <li><Link to="/users" activeStyle={{ color: 'red' }}>Users</Link></li>
                <li><Link to="/widgets" activeStyle={{ color: 'red' }}>Widgets</Link></li>
            </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

var Home = React.createClass({
    render: function() {
        return (<h1>Welcome to Home page</h1>);
    }
});

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    );
  }
});

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
    );
  }
});

var WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget1</li>
        <li>Widget2</li>
        <li>Widget3</li>
      </ul>
    );
  }
});

ReactDOM.render((
  <Router>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route component={SearchLayout}>
        <Route path="/users" component={UserList} />
        <Route path="/widgets" component={WidgetList} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('root'));