import React, { Component } from 'react';
import Video from './lottie/Video';

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
				<div className='mt-16 max-w-xl'>
					<Video name={values.name} />
				</div>
			</div>
		);
		return <div>{display}</div>;
	}
}

export default FinalResults;
