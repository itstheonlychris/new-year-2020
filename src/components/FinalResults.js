import React, { Component } from 'react';
import Video2 from './lottie/Video2';

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
const randomThings = [
	'Processing your answers',
	'Judging you',
	'Scraping for your personal information',
	'Validating your answers with your mother',
	'Selling your data to the corporate overlords'
];

const delay = (t, v) => {
	return new Promise(resolve => {
		setTimeout(resolve.bind(null, v), t);
	});
};

export class FinalResults extends Component {
	state = {
		loading: true,
		loadingText: ''
	};

	componentDidMount = () => {
		const things = shuffle(randomThings);
		let i = 0;
		const count = 4;
		for (let i = 0; i <= count; i++) {
			delay(750 * i).then(() => {
				console.log(i, things[i], count);
				const text = i < count ? things[i] : 'cleaning up';
				this.setState({
					loadingText: this.state.loadingText + '\n' + text + '...'
				});
				if (i === count) {
					setTimeout(() => {
						this.setState({
							loading: false
						});
					}, 1500);
				}
			});
		}
	};

	render() {
		const { loading, loadingText } = this.state;
		const { values } = this.props;

		const display = loading ? (
			<div className='text-blue-700 font-bold uppercase text-base tracking-wider mt-16'>
				{loadingText.split('\n').map((item, i) => {
					return <p key={i}>{item}</p>;
				})}
			</div>
		) : (
			<div className='font-bold text-3xl'>
				<div className='mt-6 max-w-3xl'>
					<Video2 name={values.name} startOver={this.props.startOver} />
				</div>
			</div>
		);
		return (
			<div>
				<div className='mt-8 '>
					<h1 className='leading-none text-3xl md:text-5xl lg:text-6xl font-bold text-red-600'>
						{loading ? 'Calculating results...' : "Here's your future!"}
					</h1>
				</div>
				{display}
			</div>
		);
	}
}

export default FinalResults;
