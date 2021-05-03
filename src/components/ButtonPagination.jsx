import {  useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/actions";
const ButtonPagination = () => {
	const page = useSelector((state) => state.page);
	const dispatch = useDispatch();

	return (
		<div className="pagination-box">
			<button
				className="btn btn-pagination"
				onClick={() => dispatch(setPage(page + 1))}
			>
				Mostrar Mas...
			</button>
		</div>
	);
};


export default ButtonPagination;
