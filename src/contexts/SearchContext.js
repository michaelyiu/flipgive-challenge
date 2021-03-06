import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
	const [filter, setFilter] = useState('apollographql'); //set default so the page doesnt look so sad in the beginning
	const [numResult, setNumResult] = useState(10); //set default to 10 results

	return (
		<SearchContext.Provider value={{ filter, setFilter, numResult, setNumResult }}>
			{props.children}
		</SearchContext.Provider>
	)
}

export default SearchContextProvider;