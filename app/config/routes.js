var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory; //also browserHistor, memoryHistory, etc.
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainers');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer')

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route header='Player One' path='playerOne' component={PromptContainer} />
			<Route header='Player Two' path='playerTwo/:playerOne' component={PromptContainer} />
			<Route path='battle' component={ConfirmBattleContainer} />
			<Route path='results' component={ResultsContainer} />
		</Route>
	</Router>
);

module.exports = routes;