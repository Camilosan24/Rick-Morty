import CharacterImage from "./CharacterImage";
import Fact from "./Fact";
import { useHistory } from "react-router-dom";
const Card = ({ character }) => {
	const history = useHistory();
	const goToCharacter = () => {
		return history.push(`/character/${character.id}`);
	};
	return (
		<div className="card">
			<CharacterImage image={character.image} />
			<div className="character-information">
				<Fact type="Nombre" data={character.name} />
				<Fact type="Género" data={character.gender} />
				<Fact type="Estado" data={character.status} />
				<Fact type="Ubicación" data={character.location.name} />
			</div>
			<button className="btn see-more" onClick={goToCharacter}>
				Ver mas...
			</button>
		</div>
	);
};

export default Card;
