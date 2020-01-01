import React, { Component } from 'react';

export class Modal extends Component {
	render() {
		if (!this.props.show) {
			return null;
		} else {
			return (
				<div>
					<div>{this.props.children}</div>
					<div>
						<button>Close</button>
					</div>
				</div>
			);
		}
	}
}

export default Modal;
