import React, { Component } from 'react';

export class Start extends Component {
	render() {
		return (
			<div>
				<div className='mt-10'>
					<h1 className='leading-none text-5xl lg:text-6xl font-bold text-red-600 my-12 md:my-16 '>
						How long will you keep your resolutions this year?
					</h1>
				</div>
				<div className='mb-5 text-teal-800 text-xl md:text-2xl lg:text-3xl'>
					<p className='mb-6'>
						I'm{' '}
						<a
							href='https://itstheonlychris.com'
							className='font-bold text-blue-900 hover:underline'
						>
							Chris Zachary
						</a>
						. I'm using technology and totally real statistics to make
						personalized predictions of your future.
					</p>
					<p className=' md:pr-6 lg:mr-10'>
						Use my brand new super complicated and advanced{' '}
						<span className='font-bold text-blue-900'>
							New Year's Resolution Calculator
						</span>{' '}
						to determine exactly how long you'll stick with it this year.
					</p>
				</div>
				<div className='my-16'>
					<button
						className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative'
						onClick={e => {
							e.preventDefault();
							this.props.nextStep();
						}}
					>
						Try it out!
						<div className='bg-red-600 border-4 border-red-600 group-hover:border-red-700 w-full h-full absolute bottom-0 right-0 -mr-2 -mb-2 -z-10'></div>
					</button>
				</div>
				<div className='text-sm text-teal-800 max-w-2xl mt-32'>
					PS: This is just a joke obviously. I don't know how to actually
					calculate anything and I won't actually sell your information most
					likely probably.
				</div>
			</div>
		);
	}
}

export default Start;
