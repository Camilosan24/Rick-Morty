import {
	getCharactersByPage,
	getCharactersByName,
} from "./functions/requests";

export const setCharacters = async (page) => ({
	type: "SET_CHARACTERS",
	payload: await getCharactersByPage(page),
});

export const setCharactersByName = async (name) => ({
	type: "SET_CHARACTERS_BY_NAME",
	payload: await getCharactersByName(name),
});

export const setPage = async (payload) => ({
	type: "SET_PAGE",
	payload: payload,
});
