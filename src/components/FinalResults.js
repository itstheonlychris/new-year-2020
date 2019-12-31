import React, { Component } from 'react';
import Video from './lottie/Video';
import Video2 from './lottie/Video2';

export class FinalResults extends Component {
	state = {
		loading: true
	};
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 500);
	};

	render() {
		const { loading } = this.state;
		const { values } = this.props;

		const display = loading ? (
			<div className='font-bold text-3xl'>Loading results.......</div>
		) : (
			<div className='font-bold text-3xl'>
				<div className='mt-16 max-w-3xl'>
					{/* <Video name={values.name} /> */}
					<Video2 name={values.name} goToStep={this.props.goToStep} />
				</div>
			</div>
		);
		return (
			<div>
				<div className='my-10'>
					<h1 className='leading-none text-5xl lg:text-6xl font-bold text-red-600 '>
						How long will you keep your resolutions this year?
					</h1>
				</div>
				{display}
			</div>
		);
	}
}

export default FinalResults;
