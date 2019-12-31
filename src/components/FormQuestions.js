import React, { Component } from 'react';
import RadioGroup from './Form/RadioGroup';

export class FormQuestions extends Component {
	state = {
		question: 1
	};
	nextQuestion = e => {
		e.preventDefault();
		this.setState({
			question: this.state.question + 1
		});
	};
	prevQuestion = e => {
		e.preventDefault();
		this.setState({
			question: this.state.question - 1
		});
	};
	nextStep = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	prevStep = e => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {
			values: { name, catsOrDogs, floss, quizzes }
		} = this.props;
		const { question } = this.state;

		let displayQuestion;

		switch (question) {
			case 1:
				displayQuestion = (
					<div className='block my-5'>
						<label htmlFor='name' className='text-5xl font-bold text-blue-900'>
							First, what's your name?
						</label>
						<p className='text-teal-800'>
							I have to know because your name makes you special.
						</p>
						<input
							className='bg-orange-200 appearance-none border-2 border-orange-200 rounded w-full py-4 px-4 text-2xl text-blue-900 leading-tight focus:outline-none focus:bg-red-100 focus:border-red-500 my-6'
							type='text'
							name='name'
							id='name'
							placeholder='Keanu Reeves'
							value={name}
							onChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			case 2:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='catsOrDogs'
							className='text-5xl font-bold text-blue-900'
						>
							Do you prefer Cats or Dogs?
						</label>
						<p className='text-teal-800'>Important factor.</p>
						<RadioGroup
							name='catsOrDogs'
							value={catsOrDogs}
							options={[
								{ label: 'Cats', value: 'cats' },
								{ label: 'Dogs', value: 'dogs' }
							]}
							handleChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			case 3:
				displayQuestion = (
					<div className='block my-5'>
						<label htmlFor='floss' className='text-5xl font-bold text-blue-900'>
							Do you floss daily?
						</label>
						<p className='text-teal-800'>Important factor.</p>
						<RadioGroup
							name='floss'
							value={floss}
							options={[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
								{ label: "That's my resolution", value: 'not yet' }
							]}
							handleChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			case 4:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='quizzes'
							className='text-5xl font-bold text-blue-900'
						>
							How often do you take dumb online quizzes?
						</label>
						<p className='text-teal-800'>Important factor.</p>
						<RadioGroup
							name='quizzes'
							value={quizzes}
							options={[{ label: 'Too often', value: 'too often' }]}
							handleChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			default:
				displayQuestion = <h1>How the F did you get here?</h1>;
		}

		return (
			<div>
				<div className='mt-10'>
					<h1 className='leading-none text-5xl lg:text-6xl font-bold text-red-600 my-12 md:my-16 '>
						How long will you keep your resolutions this year?
					</h1>
				</div>
				<form>{displayQuestion}</form>
				{question < 4 && (
					<div className='my-12 flex items-center'>
						{question === 1 ? (
							<button
								className='group bg-orange-100  hover:border-red-700 py-2 px-4 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
								onClick={this.prevStep}
							>
								Back
							</button>
						) : (
							<button
								className='group bg-orange-100  hover:border-red-700 py-2 px-4 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
								onClick={this.prevQuestion}
							>
								Previous
							</button>
						)}

						<button
							className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative'
							onClick={this.nextQuestion}
						>
							Next Question
							<div className='bg-red-600 border-4 border-red-600 group-hover:border-red-700 w-full h-full absolute bottom-0 right-0 -mr-2 -mb-2 -z-10'></div>
						</button>
					</div>
				)}

				{question === 4 && (
					<div className='my-16 flex items-center'>
						<button
							className='group bg-orange-100  hover:border-red-700 py-2 px-4 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
							onClick={this.prevQuestion}
						>
							Back
						</button>
						<button
							className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative'
							onClick={this.nextStep}
						>
							Calculate Results
							<div className='bg-red-600 border-4 border-red-600 group-hover:border-red-700 w-full h-full absolute bottom-0 right-0 -mr-2 -mb-2 -z-10'></div>
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default FormQuestions;
