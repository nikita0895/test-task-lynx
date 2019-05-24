import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'antd';

function Links({ menu }) {
	return (
		<Menu mode='horizontal'>
			{Object.keys(menu).map(key => (
				<Menu.Item key={key}>{menu[key]}</Menu.Item>
			))}
		</Menu>
	);
}

export default connect(({ menu }) => ({ menu }))(Links);

Links.propTypes = {
	menu: PropTypes.objectOf(PropTypes.string)
};
