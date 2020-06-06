import React, { useState } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import CreatePost from './CreatePost';
import logo from '../assets/logo.png';
import './zadanie4.css';
import PostsView from './PostsView';
import SignIn from './SignIn';
import RenderIfUserExists from './RenderIfUserExists';

const UserState = {
	info: null,
	setUser: (user) => {}
};

const PostsState = {
	data: [
		{
			id: 0,
			title: 'Hello World!',
			author: 'admin',
			message: 'Witajcie na naszej stronie !',
			url:
				'https://i.pinimg.com/originals/77/46/cf/7746cf78a368d8a5d99b7b03f4ef4bc4.jpg'
		}
	],
	lastId: 0,
	addPost: (newPost) => {},
	getNextId: () => {}
};

export const UserContext = React.createContext(UserState);
export const PostsContext = React.createContext(PostsState);

export default function Zadanie4(props) {
	let match = useRouteMatch();

	const [user, setUser] = useState(UserState.info);

	UserState.info = user;
	UserState.setUser = (info) => setUser(info);

	const [posts, setPosts] = useState(PostsState.data);

	PostsState.data = posts;
	PostsState.addPost = (newPost) => {
		if (
			newPost.hasOwnProperty('title') &&
			newPost.hasOwnProperty('message') &&
			newPost.hasOwnProperty('author') &&
			newPost.hasOwnProperty('id')
		) {
			setPosts([newPost, ...posts]);
		} else {
		}
	};
	PostsState.getNextId = () => {
		PostsState.lastId = PostsState.lastId + 1;
		return PostsState.lastId;
	};

	return (
		<PostsContext.Provider value={PostsState}>
			<UserContext.Provider value={UserState}>
				<div className="navbar">
					<div className="container">
						<div className="nav">
							<div className="brand">
								<Link to="/">
									<img
										className="brand-img"
										src={logo}
										alt="brand"
									/>
								</Link>
							</div>
							<div className="navbar-content">
								<RenderIfUserExists>
									<Link to={`${match.path}/posts`}>
										<div className="navbar-btn">Posty</div>
									</Link>
								</RenderIfUserExists>
								<RenderIfUserExists>
									<Link to={`${match.path}/create-post`}>
										<div className="navbar-btn">
											Dodaj nowy post
										</div>
									</Link>
								</RenderIfUserExists>
								<Link to={`${match.path}/signin`}>
									<div className="navbar-btn">Zaloguj</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="page-content">
					<RenderIfUserExists>
						<Route path={`${match.path}/create-post`}>
							<CreatePost />
						</Route>
						<Route path={`${match.path}/posts`}>
							<PostsView />
						</Route>
					</RenderIfUserExists>
					<Route path={`${match.path}/signin`} component={SignIn} />
				</div>
			</UserContext.Provider>
		</PostsContext.Provider>
	);
}

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
