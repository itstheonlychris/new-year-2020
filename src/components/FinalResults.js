import React, { Component } from 'react';

export class FinalResults extends Component {
	state = {
		loading: true
	};
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ loading: false });
			this.updateCanvas();
		}, 500);
	};

	updateCanvas = () => {
		const canvas = this.refs.canvas;
		canvas.height = canvas.width;
		const ctx = canvas.getContext('2d');
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	render() {
		const { loading } = this.state;
		const { values } = this.props;

		const display = loading ? (
			<div className='font-bold text-3xl'>Loading results.......</div>
		) : (
			<div className='font-bold text-3xl'>
				<h1>{`Your name is ${values.name}`}</h1>
				<div className='mt-16 max-w-xl'>
					<canvas ref='canvas'></canvas>
				</div>
			</div>
		);
		return <div>{display}</div>;
	}
}

export default FinalResults;
