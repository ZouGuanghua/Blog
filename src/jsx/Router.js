const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;
const Link = ReactRouter.Link;
const IndexRedirect = ReactRouter.IndexRedirect;
ReactDOM.render((
  <Router>
      <Route path="/" component={Master}>
          <Route name="tag" path="/tag/:tag" component={Master}/>
          <Route name="article" path="/article/:article" component={Master} />
      </Route>
      <Route path="*" component={Master}/>
  </Router>
), document.getElementById('main'));
