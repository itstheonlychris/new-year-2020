import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lottie from 'lottie-web';
import animationData from '../../lottie/failure_v2.json';

let animObj = null;

const measureElement = element => {
	const DOMNode = ReactDOM.findDOMNode(element);
	return {
		width: DOMNode.offsetWidth,
		height: DOMNode.offsetHeight
	};
};

export class Video extends Component {
	state = {
		contentWidth: 600
	};
	componentDidMount() {
		const canvas = this.canvas;
		const ctx = canvas.getContext('2d');

		this.canvas &&
			this.setState({
				contentWidth: measureElement(this.canvas).width
			});

		animationData.layers[0].t.d.k[0].s.t = this.props.name.toLowerCase();
		animationData.layers[1].t.d.k[0].s.t = Math.floor(
			Math.random() * 10
		).toString();

		animObj = lottie.loadAnimation({
			renderer: 'canvas',
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				context: ctx,
				scaleMode: 'noScale',
				clearCanvas: true
			}
		});
	}

	render() {
		return (
			<div className='max-w-xl mx-auto'>
				<canvas
					width={this.state.contentWidth}
					height={this.state.contentWidth}
					ref={r => (this.canvas = r)}
				></canvas>
			</div>
		);
	}
}

export default Video;
