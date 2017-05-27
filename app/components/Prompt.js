var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// since Prompt function is only rendering UI, we can make it a stateless functional component (SFC)
// Presentational component

function Prompt(props) {
	return (
		<div style={transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
				<h1>{props.header}</h1>
					<div className="col-sm-12">
						<form onSubmit={props.onSubmitUser}>
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Github Username"
									type="text"
									onChange={props.onUpdateUser}
									value={props.username}
									 />

							</div>
							<div className="form-group col-sm-4 col-sm-offset-4">
								<button
									className="btn btn-block btn-success"
									type="submit">
									Continue
								</button>
							</div>
						</form>
					</div>
			</div>
		)
}

// remember to change this as well

Prompt.propTypes = {
		header: PropTypes.string.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		onUpdateUser: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired
}

module.exports = Prompt;
