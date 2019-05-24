import React from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import { switchLanguage } from '../actions';

function RadioGroup({ switchLanguage, language }) {
	const handleChange = ev => {
		switchLanguage(ev.target.value);
	};
	return (
		<Radio.Group onChange={handleChange} value={language}>
			<Radio value='RU'>Русский</Radio>
			<Radio value='EN'>English</Radio>
		</Radio.Group>
	);
}

export default connect(
	({ language }) => ({ language }),
	{ switchLanguage }
)(RadioGroup);

RadioGroup.propTypes = {
	language: PropTypes.string,
	switchLanguage: PropTypes.func
};
