import React, { useContext, useEffect, useState } from 'react';
import { UserContext, PostsContext } from './zadanie4';
import Row from './Row';

function useLoader() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return isLoading;
}

export default function PostsView() {
	const user = useContext(UserContext);
	const posts = useContext(PostsContext);

	let isLoading = useLoader();

	return (
		<div>
			<div className="holder" style={{ width: '800px' }}>
				{isLoading && <div class="lds-dual-ring"></div>}
				{isLoading || (
					<React.Fragment>
						<h1>Posty</h1>
						<hr />
						<div className="table__holder">
							{posts.data.length === 0 && (
								<p>tablica jest pusta</p>
							)}
							{posts.data.map((x) => {
								return (
									<Row
										key={x.id}
										title={x.title}
										body={x.message}
										author={x.author}
										url={x.url}
									/>
								);
							})}
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
}
