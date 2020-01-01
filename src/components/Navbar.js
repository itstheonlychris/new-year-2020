import React, { Component } from 'react';

export class Navbar extends Component {
	refreshPage = () => {
		window.location.reload(false);
	};
	render() {
		return (
			<header className='pt-4 pb-3  flex justify-between items-end'>
				<div
					className='font-bold text-blue-900  break-normal w-24 leading-none cursor-pointer'
					onClick={this.refreshPage}
				>
					Resolution Calculator
					<span className='text-red-600 block'>2020</span>
				</div>
				<div className='text-red-600 font-bold text-right text-sm md:text-base'>
					<p className='text-xs text-blue-900 font-bold tracking-wide -mb-1'>
						created by Chris Zachary
					</p>
					<a
						href='https://itstheonlychris.com'
						className='block cursor-pointer hover:text-red-400  hover:underline tracking-wide '
					>
						itstheonlychris.com
					</a>
				</div>
			</header>
		);
	}
}

export default Navbar;
