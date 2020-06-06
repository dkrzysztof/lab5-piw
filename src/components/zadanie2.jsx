import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Zadanie2(props) {
	const [isLogoVisible, setLogoVisibility] = useState(false);

	const buttonClickHandler = (e) => {
		setLogoVisibility(!isLogoVisible);
	};

	return (
		<React.Fragment>
			<div className="top">
				<Link className="btn btn-lg" to="/z1">
					Zadania 1
				</Link>
				<Link className="btn btn-lg" to="/z2">
					Zadanie 2
				</Link>
				<Link className="btn btn-lg" to="/z3">
					Zadanie 3
				</Link>
				<Link className="btn btn-lg" to="/z4">
					Zadanie 4
				</Link>
			</div>
			<div className="holder" style={{ width: '300px' }}>
				<h1>Zadanie 2</h1>
				<button className="btn btn-lg" onClick={buttonClickHandler}>
					Toggle
				</button>
				<p>
					Wartośc zmiennej <code>isLogoVisible</code>:{' '}
					{isLogoVisible.toString()}
				</p>
				<div>
					{isLogoVisible && (
						<img src={logo} alt="logo" className="md-size" />
					)}
				</div>
			</div>
		</React.Fragment>
	);
}
