import React, { Component } from 'react';
import RadioGroup from './Form/RadioGroup';

const URL = '/.netlify/functions/SendSlack';

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
	handleSubmit = e => {
		e.preventDefault();
		this.props.nextStep();
		//console.log(this.props);
		let message = {
			name: this.props.values.name,
			catsOrDogs: this.props.values.catsOrDogs,
			floss: this.props.values.floss,
			quizzes: this.props.values.quizzes,
			resolutions: this.props.values.resolutions,
			starwars: this.props.values.starwars
		};
		//console.log(message);

		this.sendEmail(message)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};
	sendEmail = async emailData => {
		const res = await fetch(URL, {
			method: 'POST',
			body: JSON.stringify(emailData)
		});
		return await res.json();
	};
	render() {
		const {
			values: {
				name,
				fitness,
				floss,
				resolutions,
				catsOrDogs,
				starwars,
				quizzes
			}
		} = this.props;
		const { question } = this.state;

		let displayQuestion;

		switch (question) {
			case 1:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='name'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							First, what's your name?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>
							I have to know because your name makes you special.
						</p>
						<input
							className='bg-orange-100 appearance-none placeholder-red-300 focus:placeholder-red-400 border-4 border-orange-200 rounded w-full py-5 px-6 text-3xl text-blue-900 leading-tight focus:outline-none  focus:border-red-500 my-6'
							type='text'
							name='name'
							id='name'
							placeholder='Name'
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
							htmlFor='fitness'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							Do you have any fitness related goals?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>
							Important factor.
						</p>
						<RadioGroup
							name='fitness'
							value={fitness}
							options={[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' }
							]}
							handleChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			case 3:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='floss'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							Do you floss daily?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>
							9/10 dentists don't floss their own teeth.
						</p>
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
							htmlFor='resolutions'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							Did you keep all your resolutions last year?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>Be honest.</p>
						<RadioGroup
							name='resolutions'
							value={resolutions}
							options={[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' }
							]}
							handleChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			case 5:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='catsOrDogs'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							Do you prefer Cats or Dogs?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>
							Important factor.
						</p>
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
			case 6:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='starwars'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							Star Trek or Star Wars?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>
							According to science, this plays a major part in your success as a
							human.
						</p>
						<RadioGroup
							name='starwars'
							value={starwars}
							options={[
								{ label: 'Star Trek', value: 'star trek' },
								{ label: 'Star Wars', value: 'star wars' }
							]}
							handleChange={this.props.handleChange}
						/>
					</div>
				);
				break;
			case 7:
				displayQuestion = (
					<div className='block my-5'>
						<label
							htmlFor='quizzes'
							className='text-5xl font-bold text-blue-900 leading-none'
						>
							How often do you take dumb online quizzes?
						</label>
						<p className='text-teal-800 mt-4 text-lg md:text-xl'>
							Even if this is the only one, that's still time you won't get
							back.
						</p>
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
					<h1 className='leading-none text-3xl md:text-5xl lg:text-6xl font-bold text-red-600 my-12 md:my-16 '>
						How long will you keep your resolutions this year?
					</h1>
				</div>
				<form>
					<div className='text-gray-500 font-bold uppercase text-base tracking-wider'>
						Question {question}/7
					</div>
					{displayQuestion}
				</form>
				{question < 7 && (
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

				{question === 7 && (
					<div className='my-16 flex items-center'>
						<button
							className='group bg-orange-100  hover:border-red-700 py-2 px-4 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
							onClick={this.prevQuestion}
						>
							Back
						</button>
						<button
							className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative'
							onClick={this.handleSubmit}
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
