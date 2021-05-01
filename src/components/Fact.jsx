import React from "react";

const Fact = ({type, data}) => {
	return (
		<div className="fact-box">
			<span>
				{type}: {data}
			</span>
		</div>
	);
};

export default Fact;
