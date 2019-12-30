import React, { Component } from 'react';

export class FormQuestions extends Component {
	nextStep = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	nextStep = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values } = this.props;

		return (
			<div>
				<form>
					<div className='block my-5'>
						<label htmlFor='name' className='text-5xl font-bold text-blue-900'>
							First, what's your name?
						</label>
						<p className='text-teal-800'>
							I have to know because your name makes you special.
						</p>
						<input
							className='bg-orange-200 appearance-none border-2 border-orange-200 rounded w-full py-4 px-4 text-2xl text-blue-900 leading-tight focus:outline-none focus:bg-red-100 focus:border-red-500'
							type='text'
							name='name'
							id='name'
							placeholder='Keanu Reeves'
							value={values.name}
							onChange={this.props.handleChange}
						/>
					</div>
					<div className='block my-5'>
						<label htmlFor='name' className='text-5xl font-bold text-blue-900'>
							Do you prefer Cats or Dogs?
						</label>
						<p className='text-teal-800'>Important factor.</p>
						<input
							className='bg-orange-200 appearance-none border-2 border-orange-200 rounded w-full py-4 px-4 text-2xl text-blue-900 leading-tight focus:outline-none focus:bg-red-100 focus:border-red-500'
							type='text'
							name='name'
							id='name'
							placeholder='Keanu Reeves'
							value={values.name}
							onChange={this.props.handleChange}
						/>
					</div>
					<div className='block my-5'>
						<label htmlFor='name' className='text-5xl font-bold text-blue-900'>
							Do you floss daily?
						</label>
						<p className='text-teal-800'>
							I have to know because your name makes you special.
						</p>
						<input
							className='bg-orange-200 appearance-none border-2 border-orange-200 rounded w-full py-4 px-4 text-2xl text-blue-900 leading-tight focus:outline-none focus:bg-red-100 focus:border-red-500'
							type='text'
							name='name'
							id='name'
							placeholder='Keanu Reeves'
							value={values.name}
							onChange={this.props.handleChange}
						/>
					</div>
					<div className='block my-5'>
						<label htmlFor='name' className='text-5xl font-bold text-blue-900'>
							How many resolutions do you have this year?
						</label>
						<p className='text-teal-800'>
							I have to know because your name makes you special.
						</p>
						<input
							className='bg-orange-200 appearance-none border-2 border-orange-200 rounded w-full py-4 px-4 text-2xl text-blue-900 leading-tight focus:outline-none focus:bg-red-100 focus:border-red-500'
							type='text'
							name='name'
							id='name'
							placeholder='Keanu Reeves'
							value={values.name}
							onChange={this.props.handleChange}
						/>
					</div>
				</form>
				<div className='my-16 flex items-center'>
					<button
						className='group bg-orange-100  hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
						onClick={e => {
							e.preventDefault();
							this.props.prevStep();
						}}
					>
						Back
					</button>
					<button
						className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative'
						onClick={this.nextStep}
					>
						Continue
						<div className='bg-red-600 border-4 border-red-600 group-hover:border-red-700 w-full h-full absolute bottom-0 right-0 -mr-2 -mb-2 -z-10'></div>
					</button>
				</div>
			</div>
		);
	}
}

export default FormQuestions;
