import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Zadanie1(props) {
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
			<div className="holder">
				<img className="md-size" src={logo} alt="logo" />
				<h4>{props.title}</h4>
				<hr />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Deserunt error corrupti, magni quo culpa et inventore,
					asperiores voluptates, hic cumque doloremque obcaecati!
					Dolorem quasi ut facilis in, libero enim nam quod
					perspiciatis officia voluptate quibusdam nesciunt fugit vero
					placeat iusto et, minus laudantium.
				</p>
			</div>
		</React.Fragment>
	);
}
