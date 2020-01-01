import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RadioGroup extends Component {
	render() {
		const { name, value, options } = this.props;
		return (
			<div className='flex flex-wrap items-top mt-4'>
				{options.map(option => {
					return (
						<div key={option.label}>
							<label
								className={`text-center border-4 leading-none rounded-lg text-xl h-32 w-40 flex flex-col items-center justify-center mr-4 hover:text-red-600 hover:border-red-600  cursor-pointer relative mb-3 ${
									value === option.value
										? 'text-red-600 border-red-600 font-bold'
										: 'border-orange-200 text-blue-900 '
								} `}
								htmlFor={option.label}
							>
								{value === option.value && (
									<div className='h-6 w-6 bg-orange-100 rounded-full absolute top-0 right-0 mr-2 mt-2'>
										<svg className='h-6 w-6 fill-current text-red-600'>
											viewBox='0 0 24 24'
											<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z' />
										</svg>
									</div>
								)}
								<input
									type='radio'
									className='hidden'
									name={name}
									id={option.label}
									value={option.value}
									checked={value === option.value}
									onChange={this.props.handleChange}
								/>

								{option.label}
							</label>
						</div>
					);
				})}
			</div>
		);
	}
}

RadioGroup.propTypes = {};

export default RadioGroup;
