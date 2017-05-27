/**
 * 
 * @author Nick Koutrelakos (nick.koutrelakos@gmail.com)
 * @date    2017-01-31 18:03:35
 * @version $Id$
 */

var ReactDOM = require('react-dom');
var React = require('react');
var axios = require('axios');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');

var styles = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: '30px'
	}
};

var Loading = React.createClass({

	propTypes: {
		text: PropTypes.string,
		speed: PropTypes.number
	},

	getDefaultProps: function () {
		return {
			text: 'Loading',
			speed: 300
		}
	},

	getInitialState: function() {
		this.originalText = this.props.text;
		return {
			text: this.originalText
		}
	},

	componentDidMount: function() {
		var stopper = this.originalText + '...';
		this.interval = setInterval(function () {
			if (this.state.text === stopper){
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}.bind(this), this.props.speed)
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},

	render: function() {
		return (
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
			
		)
	}
});

module.exports = Loading;