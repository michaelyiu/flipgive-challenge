import React, { useContext } from 'react';
import { useForm } from './../hooks';
import { SearchContext } from './../contexts/SearchContext';

const SearchBar = () => {
	const { values, handleChange, handleSubmit } = useForm(() => {
		setFilter(values.filter)
	})

	const { setFilter } = useContext(SearchContext);

	return (
		<div>
			<form className="searchForm" onSubmit={handleSubmit}>
				<input type="text" className="search-notes" placeholder="Search organizations.." name="filter" onChange={handleChange} />
				<button className="search-submit" type="submit"><i className="fa fa-search"></i></button>
			</form>
		</div>
	)
}

export default SearchBar;