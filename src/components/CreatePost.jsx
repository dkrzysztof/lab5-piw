import React, { useContext, useState, useEffect } from 'react';
import { UserContext, PostsContext } from './zadanie4';

export default function CreatePost() {
	const user = useContext(UserContext);
	const posts = useContext(PostsContext);

	const [post, setPost] = useState({
		title: null,
		message: null,
		author: user.info.username,
		url: null
	});

	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		document.title = `Kreator: ${post.title}`;
	}, [post.title]);

	const handleInput = (e) => {
		setError(false);
		setSuccess(false);

		let valueProp = e.target.name;
		let value = e.target.value;
		setPost((prevState) => {
			let newState = { ...prevState };

			newState[valueProp] = value;
			return newState;
		});
	};

	const submitPost = (e) => {
		e.preventDefault();
		console.log(post);
		if (post.author && post.message && post.title) {
			posts.addPost({ ...post, id: posts.getNextId() });
			setSuccess(true);
		} else {
			setError(true);
		}
	};

	return (
		<React.Fragment>
			{error && (
				<p className="error">
					Musisz wypełnić trzy pola: tytuł oraz wiadomość !
				</p>
			)}
			{success && <p className="success">Pomyslnie utworzono post !</p>}
			<div className="holder">
				<h1>Dodaj nowy post</h1>
				<form className="column" onSubmit={submitPost}>
					<input
						onChange={handleInput}
						name="title"
						placeholder="tytuł.."
					/>
					<input
						onChange={handleInput}
						name="message"
						placeholder="wiadomość.."
					/>
					<input
						type="text"
						onChange={handleInput}
						name="url"
						placeholder="Wklej adres obrazka do wyswietlenia.."
					/>
					<input className="btn btn-lg" type="submit" />
				</form>
			</div>
			{post.url && (
				<div className="holder">
					<h4>Image Preview</h4>
					<img
						src={post.url}
						className="post__image"
						alt="image preview"
					/>
				</div>
			)}
		</React.Fragment>
	);
}
