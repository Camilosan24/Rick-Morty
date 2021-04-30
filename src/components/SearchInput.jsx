import { useState } from "react";

const SearchInput = () => {
	const [inputLength, setinputLenght] = useState(false);
	return (
		<div className="search-box">
			<input
				type="text"
				placeholder="Buscar personaje..."
            onFocus={()=> setinputLenght(true)}
            onBlur={()=> setinputLenght(false)}
				style={{ width: inputLength ? "11rem" : "" }}
			/>
			<button className="btn">
				<i className="fas fa-search"></i>
			</button>
		</div>
	);
};

export default SearchInput;
