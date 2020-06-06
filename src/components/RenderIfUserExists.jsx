import React, { useContext } from 'react';
import { UserContext } from './zadanie4';
import { Redirect } from 'react-router-dom';

export default function RenderIfUserExists(props) {
	const user = useContext(UserContext);

	if (user && user.info) {
		return <React.Fragment>{props.children}</React.Fragment>;
	} else {
		return <Redirect to="/z4"></Redirect>;
	}
}
