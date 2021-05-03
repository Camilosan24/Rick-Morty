import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../store/actions";
import "../styles/App.css";
import Card from "../components/Card";
import ButtonPagination from "../components/ButtonPagination";

function Home() {
	const page = useSelector((state) => state.page);
	const characters = useSelector((state) => state.characters);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setCharacters(page));
	}, [page, dispatch]);

	return (
		<>
			<div className="cards-section">
				{characters?.length > 0
					? characters.map((character, index) => {
							return <Card character={character} key={index} />;
					  })
					: "No hay personajes"}
			</div>
			{characters?.length >= 20 && <ButtonPagination />}
		</>
	);
}

export default Home;
