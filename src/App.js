import { useEffect, useState } from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import ButtonPagination from "./components/ButtonPagination";
import Fact from "./components/Fact";

function App() {
	const defaultInfo = {
		name: "",
		image: "",
		gender: "",
		origin: {
			name: "",
		},
	};
	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState([]);
	const [temporalCharater, setTemporalCharater] = useState([
		false,
		defaultInfo,
	]);
	const [searchCharacter, setSearchCharacter] = useState("");
	const [charactersExist, setCharactersExist] = useState(true);

	useEffect(() => {
		const getAllCharaters = () => {
			fetch(`https://rickandmortyapi.com/api/character`)
				.then((res) => res.json())
				.then((res) => {
					setCharacters([...characters, ...res.results]);
				})
				.catch(Error);
		};
		return getAllCharaters();
	}, []);

	useEffect(() => {
		if (searchCharacter.length > 0) {
			fetch(
				`https://rickandmortyapi.com/api/character/?name=${searchCharacter}`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.error) {
						return setCharactersExist(false);
					}
					setCharactersExist(true);
					return setCharacters(res.results);
				})
				.catch(Error);
		}
		return;
	}, [searchCharacter]);

	useEffect(() => {
		return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
			.then((res) => res.json())
			.then((res) => setCharacters([...characters, ...res.results]))
			.catch(Error);
	}, [page]);

	const onSetPage = () => {
		setPage(page + 1);
	};

	return (
		<div className="container">
			<Nav
				setSearchCharacter={setSearchCharacter}
				searchCharacter={searchCharacter}
			/>
			<section className="main-content">
				{charactersExist ? (
					<>
						<div className="cards-section">
							{characters.map((character, index) => {
								return (
									<Card
										character={character}
										setTemporalCharater={setTemporalCharater}
										key={index}
									/>
								);
							})}
						</div>
						<ButtonPagination setPage={onSetPage} />
					</>
				) : (
					"no hay personajes"
				)}
			</section>
			<div
				className={`single-character ${temporalCharater[0] ? "show" : "hide"}`}
			>
				<div className="single-character-card">
					<button
						className="btn btn-close"
						onClick={() => setTemporalCharater([false, defaultInfo])}
					>
						<i class="fa fa-times"></i>
					</button>
					<div className="single-character-information">
						<img
							src={temporalCharater[1].image}
							alt={temporalCharater[1].image}
						/>
						<div className="facts">
							<Fact type="Id" data={temporalCharater[1].id} />
							<Fact type="Nombre" data={temporalCharater[1].name} />
							<Fact type="Especie" data={temporalCharater[1].species} />
							<Fact type="Género" data={temporalCharater[1].gender} />
							<Fact type="Estado" data={temporalCharater[1].status} />
							<Fact type="Ubicacion" data={temporalCharater[1].origin.name} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
