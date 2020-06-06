import React from 'react';
import { Link } from 'react-router-dom';
import Row from './Row';

export default function Zadanie3(props) {
	const data = [
		{
			id: 1,
			title:
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body:
				'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
		},
		{
			id: 2,
			title: 'qui est esse',
			body:
				'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
		},
		{
			id: 3,
			title:
				'ea molestias quasi exercitationem repellat qui ipsa sit aut',
			body:
				'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
		},
		{
			id: 4,
			title: 'eum et est occaecati',
			body:
				'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
		}
	];

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
			<div className="holder" style={{ width: '800px' }}>
				<h1>Zadanie 3</h1>
				<hr />
				<div className="table__holder">
					{data.length === 0 && <p>tablica jest pusta</p>}
					{data.map((x) => {
						return <Row key={x.id} title={x.title} body={x.body} />;
					})}
				</div>
			</div>
		</React.Fragment>
	);
}
