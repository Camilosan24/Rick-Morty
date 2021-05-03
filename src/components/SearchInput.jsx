import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCharactersByName } from "../store/actions";

const SearchInput = () => {
	const dispatch = useDispatch();
	const [inputLength, setInputLength] = useState(false);
	const [searchCharacter, setSearchCharacter] = useState("");

	const onChangeInputValue = (e) => {
		setSearchCharacter(e.target.value);
	};

	useEffect(() => {
		if (searchCharacter !== "") {
			dispatch(setCharactersByName(searchCharacter));
		}
	}, [searchCharacter, dispatch]);

	return (
		<div className="search-box">
			<input
				type="text"
				placeholder="Buscar personaje..."
				onFocus={() => setInputLength(true)}
				onBlur={() => setInputLength(false)}
				onChange={onChangeInputValue}
				// style={{ width: inputLength ? "11rem" : "" }}
				value={searchCharacter}
			/>
		</div>
	);
};

export default SearchInput;
