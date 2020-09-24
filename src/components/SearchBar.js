import React, { useContext } from 'react';
import { useForm } from './../hooks';
import { SearchContext } from './../contexts/SearchContext';

const SearchBar = () => {
	const { values, handleChange, handleSubmit } = useForm(() => {
		setFilter(values.filter)
	})

	const { setFilter } = useContext(SearchContext);

	//sets filter text on submit and stores into SearchContext
	return (
		<div>
			<form className="searchForm" onSubmit={handleSubmit}>
				<input type="text" placeholder="Search organizations.." name="filter" onChange={handleChange} />
				<button type="submit">
					<i className="fa fa-search"></i>
				</button>
			</form>
		</div>
	)
}

export default SearchBar;