import React from 'react';
import RadioGroup from './components/RadioGroup';
import Links from './components/Links';

export default function App() {
	return (
		<div className='App'>
			<nav className='navigation'>
				<Links />
				<RadioGroup />
			</nav>
		</div>
	);
}
