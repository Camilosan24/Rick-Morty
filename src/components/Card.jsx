import CharacterImage from "./CharacterImage";
import Fact from "./Fact";
const Card = ({character, setTemporalCharater}) => {
	return (
		<div className="card">
			<CharacterImage image={character.image} />
			<div className="character-information">
				<Fact type="Nombre" data={character.name} />
				<Fact type="Género" data={character.gender} />
				<Fact type="Estado" data={character.status} />
				<Fact type="Ubicación" data={character.location.name} />
			</div>
			<button className="btn see-more" onClick={()=> setTemporalCharater([true, character])}>
				Ver mas...
			</button>
		</div>
	);
};

export default Card;
