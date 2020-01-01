import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lottie from 'lottie-web';
import animationData from '../../lottie/video_v2.json';

let animObj = null;
let capturer = null;

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
		const nameCap =
			this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
		const nameString = `Dear ${nameCap},`;

		animationData.layers[0].t.d.k[0].s.t = nameString;
		animationData.layers[1].t.d.k[0].s.t = Math.floor(
			Math.random() * 20
		).toString();
		animationData.layers[15].t.d.k[0].s.t = nameCap;

		animObj = lottie.loadAnimation({
			renderer: 'canvas',
			loop: false,
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
				<button
					className='px-10 py-4 border-4 border-red-500 text-red-500 font-bold'
					onClick={() => console.log('cant do that yet')}
				>
					Save Video
				</button>
				<button
					className='px-10 py-4 border-4 border-red-500 text-red-500 font-bold'
					onClick={() => console.log('cant do that yet')}
				>
					Try again
				</button>
			</div>
		);
	}
}

export default Video;
