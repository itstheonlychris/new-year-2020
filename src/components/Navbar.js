import React, { Component } from 'react';

export class Navbar extends Component {
	render() {
		return (
			<header className='pt-4 pb-3  flex justify-between items-end'>
				<div className='font-bold text-blue-900 text-lg break-normal w-32 leading-snug'>
					Resolution Calculator
				</div>
				<div className='text-red-600 font-bold'>
					<a href='https://itstheonlychris.com'>itstheonlychris.com</a>
				</div>
			</header>
		);
	}
}

export default Navbar;
