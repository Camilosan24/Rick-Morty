import { useState } from "react";

const SearchInput = ({ setSearchCharacter, searchCharacter }) => {
	const [inputLength, setinputLenght] = useState(false);
	return (
		<div className="search-box">
			<input
				type="text"
				placeholder="Buscar personaje..."
				onFocus={() => setinputLenght(true)}
				onBlur={() => setinputLenght(false)}
				onChange={(e) => setSearchCharacter(e.target.value)}
				style={{ width: inputLength ? "11rem" : "" }}
				value={searchCharacter}
			/>
		</div>
	);
};

export default SearchInput;
