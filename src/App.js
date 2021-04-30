import { useEffect, useState } from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";

function App() {
	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState([]);
	const getAllCharaters = () => {
		fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
			.then((res) => res.json())
			.then((res) => {
				setPage(page + 1);
				console.log("resultados", res.results);
				setCharacters(res.results);
			})
			.catch(Error);
	};

	useEffect(() => {
		getAllCharaters();
	}, []);
	return (
		<div className="container">
			<Nav />
			<section className="main-content">
				<div className="cards-section">
					{characters.map((character, index) => {
						return <Card {...character} key={index} />;
					})}
				</div>
			</section>
		</div>
	);
}

export default App;
