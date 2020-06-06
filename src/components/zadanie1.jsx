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
					Witaj na stronie służącej do dzielenia się obrazkami i
					informacjami! Podziel się z całym świątem twoją wesołą
					wiadomością !
				</p>
			</div>
		</React.Fragment>
	);
}
