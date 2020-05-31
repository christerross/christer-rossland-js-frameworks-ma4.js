import React from "react";
import PropTypes from "prop-types";

function Double(props) {
	let answer = props.number;

	if (props.multiply === true) {
		answer = props.number * 2;
	}

	return <div className="answer">{answer}</div>;
}

Double.propTypes = {
	number: PropTypes.number.isRequired
};

export default Double;
