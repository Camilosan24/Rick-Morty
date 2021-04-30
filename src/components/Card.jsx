import React from "react";

const Card = ({ id, name, image, genre }) => {
	return (
		<div className="card">
			<div className="character-image">
            <img src={image} width="50px" height="50px" alt=""/>
         </div>
			<div className="character-information">
				<span>Nombre:{name}</span>
				<span>Genero:{genre}</span>
			</div>
		</div>
	);
};

export default Card;
