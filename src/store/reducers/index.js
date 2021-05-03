const initialState = {
	characters: [],
	temporalCharacter: {
		location: {
			name: "",
		},
		origin: {
			name: "",
		},
	},
	page: 1,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CHARACTERS":
			return {
				...state,
				characters: [...state.characters, ...action.payload],
			};
		case "SET_CHARACTERS_BY_NAME":
			return {
				...state,
				characters: action.payload,
			};

		case "SET_PAGE":
			return {
				...state,
				page: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
