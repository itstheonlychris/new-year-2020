import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Start from './components/Start';
import FormQuestions from './components/FormQuestions';
import FinalResults from './components/FinalResults';

class App extends Component {
	state = {
		step: 1,
		name: ''
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

	handleChange = e => {
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
				displayStep = <FinalResults values={this.state} />;
				break;
			default:
				displayStep = <div>Hmm this is suspicious</div>;
		}
		return (
			<div className='px-6 md:px-5'>
				<div className='max-w-xl lg:max-w-3xl mx-auto mt-3'>
					<Navbar />
					{displayStep}
				</div>
			</div>
		);
	}
}

export default App;
