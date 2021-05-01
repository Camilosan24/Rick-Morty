import React from "react";

const ButtonPagination = ({ setPage }) => {
	return (
		<div className="pagination-box">
			<button className="btn btn-pagination" onClick={setPage}>
				Mostrar Mas...
			</button>
		</div>
	);
};

export default ButtonPagination;
