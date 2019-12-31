import React, { Fragment } from 'react';
import lottie from 'lottie-web';
import animationData from '../../lottie/video_v1.json';
import {TwitterShareButton} from 'react-share'

let animObj = null;

const scaleSide = 500;

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function draw(canvas, scaleX, scaleY, props) {
	const ctx = canvas.getContext('2d');
	ctx.scale(scaleX, scaleY);
	const nameCap = props.name.charAt(0).toUpperCase() + props.name.slice(1);
	const nameString = `Dear ${nameCap},`;

	animationData.layers[0].t.d.k[0].s.t = nameString;
	animationData.layers[1].t.d.k[0].s.t = randomNumber(1, 15).toString();
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

	const saveImage = () => {
		console.log(canvas);
		canvas.current.toDataURL('image/png');
	};
	return (
		<>
			<canvas ref={canvas} style={{ width: '100%', height: '100%' }} />
			<TwitterShareButton title="I failed the quiz that Chris made even though it's super fair." url={`yourmom.com`} >Share to Twitter</TwitterShareButton>
			
			{saveButton && (
				<div>
				
					<button
						className='px-10 py-4 hover:text-red-700 text-red-500 text-lg font-bold'
						onClick={() => saveImage()}
					>
						Save Image
					</button>
					<div className='my-16 flex items-center'>
						<button
							className='group bg-orange-100  hover:border-red-700 py-2 px-4 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative mr-6'
							onClick={e => {
								e.preventDefault();
								props.goToStep(1);
							}}
						>
							Try Again
						</button>
						<button
							className='group bg-orange-100 border-4 border-red-600 hover:border-red-700 py-2 px-12 text-xl font-bold text-red-600 hover:bg-red-600 hover:text-orange-100 relative'
							onClick={() => console.log('SHARERERERERERE')}
						>
							Check out my stuff
							<div className='bg-red-600 border-4 border-red-600 group-hover:border-red-700 w-full h-full absolute bottom-0 right-0 -mr-2 -mb-2 -z-10'></div>
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Video2;
