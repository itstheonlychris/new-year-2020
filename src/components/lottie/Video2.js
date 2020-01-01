import React, { Fragment } from 'react';
import lottie from 'lottie-web';
import animationData from '../../lottie/video_v2.json';
import { TwitterShareButton } from 'react-share';

let animObj = null;

const scaleSide = 1080;

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function draw(canvas, scaleX, scaleY, props) {
	const ctx = canvas.getContext('2d');
	ctx.scale(scaleX, scaleY);
	const nameCap = props.name.charAt(0).toUpperCase() + props.name.slice(1);
	const nameString = `Dear ${nameCap},`;

	animationData.layers[0].t.d.k[0].s.t = randomNumber(1, 15).toString();
	animationData.layers[6].t.d.k[0].s.t = nameString;
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

const Video2 = props => {
	const [scale, setScale] = React.useState({ x: 1, y: 1 });
	const [saveButton, showSaveButton] = React.useState(false);

	const canvas = React.useRef(null);

	const calculateScaleX = () =>
		!canvas.current ? 0 : canvas.current.clientWidth / scaleSide;
	const calculateScaleY = () =>
		!canvas.current ? 0 : canvas.current.clientHeight / scaleSide;

	const resized = () => {
		canvas.current.width = canvas.current.clientWidth;
		canvas.current.height = canvas.current.width;
		setScale({ x: calculateScaleX(), y: calculateScaleY() });
	};

	React.useEffect(() => resized(), []);

	React.useEffect(() => {
		const currentCanvas = canvas.current;
		currentCanvas.addEventListener('resize', resized);
		return () => currentCanvas.removeEventListener('resize', resized);
	});

	React.useEffect(() => {
		draw(canvas.current, scale.x, scale.y, props);
	}, [scale, props]);

	React.useEffect(() => {
		animObj &&
			animObj.addEventListener('complete', () => {
				showSaveButton(true);
			});
	});

	return (
		<>
			<canvas ref={canvas} style={{ width: '100%', height: '100%' }} />

			<div>
				<div className='mb-4 mt-5 flex items-center justify-center'>
					<button
						className='group bg-orange-100  hover:border-red-700 py-2 px-2 text-lg lg:text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
						onClick={e => {
							e.preventDefault();
							props.startOver();
						}}
					>
						Try Again
					</button>
					<TwitterShareButton
						title="I failed the quiz that Chris made even though it's super fair. Try it out!"
						url='https://2020.itstheonlychris.com'
						className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-4 lg:px-8 text-lg lg:text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100'
					>
						Share on Twitter
					</TwitterShareButton>
				</div>
				<div>
					<p className='font-bold text-red-600 text-lg lg:text-xl text-center mt-5 lg:mt-8 mb-12'>
						Like this project?{' '}
						<a
							href='https://twitter.com/itstheonlychris'
							className='text-blue-900 hover:underline'
							target='_blank'
						>
							Keep in touch
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Video2;
