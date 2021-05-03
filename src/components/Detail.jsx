import React from "react";

const Detail = ({ name, data }) => {
	return (
		<div className="field">
			<div className="name-size">
				<span className="name">{name}: </span>
			</div>
			<span className="data">{data}</span>
		</div>
	);
};

export default Detail;
