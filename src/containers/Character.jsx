import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Detail from "../components/Detail";

const Character = () => {
	const [character, setCharacter] = useState({});
	const params = useParams();
	const history = useHistory();
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
			.then((res) => res.json())
			.then((res) => {
				setCharacter(res);
			});
	}, [params.id]);
	return (
		<div className="single-character">
			<div className="single-inner-box">
				<div className="image-box">
					<img
						src={character.image}
						alt={character.image}
						width="200"
						height="200"
					/>
				</div>
				<div className="info-box">
					<div className="info-box-1">
						<Detail name="ID" data={character.id} />
						<Detail name="Nombre" data={character.name} />
						<Detail name="Género" data={character.gender} />
						<Detail name="Especie" data={character.species} />
						<Detail name="Estado" data={character.status} />
						<Detail name="Origen" data={character.origin?.name} />
					</div>
					<div className="info-box-2">
						<Detail name="Ubicación" data={character.location?.name} />
						<Detail name="Creado" data={character.created} />
						<div className="button-back-box">
							<button
								className="btn btn-back"
								onClick={() => history.push("/")}
							>
								Back...
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Character;
