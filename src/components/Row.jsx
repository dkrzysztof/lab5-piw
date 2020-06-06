import React from 'react';

export default function Row(props) {
	return (
		<div className="table__row">
			<h4>
				{props.title}
				{props.author && (
					<span
						style={{
							fontWeight: 200,
							fontSize: '0.8em',
							color: 'gray'
						}}
					>
						{' '}
						| {props.author}
					</span>
				)}
			</h4>
			<p>{props.body}</p>
			<p>
				{props.url && (
					<img src={props.url} className="post__image" alt="image" />
				)}
			</p>
		</div>
	);
}
