import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Start from './components/Start';
import FormQuestions from './components/FormQuestions';
import FinalResults from './components/FinalResults';

const initialState = {
	showModal: false,
	step: 3,
	name: '',
	catsOrDogs: '',
	floss: '',
	quizzes: ''
};

class App extends Component {
	state = initialState;

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	nextStep = () => {
		this.setState({
			step: this.state.step + 1
		});
	};

	prevStep = () => {
		this.setState({
			step: this.state.step - 1
		});
	};

	startOver = () => {
		this.setState(initialState);
	};

	handleChange = e => {
		console.log('changed');
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		const { step } = this.state;

		let displayStep;
		switch (step) {
			case 1:
				displayStep = <Start nextStep={this.nextStep} />;
				break;
			case 2:
				displayStep = (
					<FormQuestions
						values={this.state}
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
					/>
				);
				break;
			case 3:
				displayStep = (
					<FinalResults values={this.state} startOver={this.startOver} />
				);
				break;
			default:
				displayStep = <div>Hmm this is suspicious</div>;
		}
		return (
			<div className='px-6 md:px-5'>
				<div className='max-w-xl lg:max-w-3xl mx-auto mt-3'>
					<Navbar toggleModal={this.toggleModal} />
					{displayStep}
				</div>
			</div>
		);
	}
}

export default App;
