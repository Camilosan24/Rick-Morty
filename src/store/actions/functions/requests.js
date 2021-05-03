export const getCharactersByPage = async (page) => {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character/?page=${page}`
	).then((res) => res.json());
	return data.results;
};

export const getCharactersByName = async (name) => {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character/?name=${name}`
	).then((res) => res.json());
	return data.results;
};


