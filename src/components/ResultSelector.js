import React, { useContext } from 'react';
import { SearchContext } from './../contexts/SearchContext';

const ResultSelector = () => {
	const { numResult, setNumResult } = useContext(SearchContext);

	const handleClick = (result) => {
		setNumResult(result);
	}

	return (
		<div>
			<p> Max results:
					{
					[5, 10, 15, 20].map(
						(result, index) => {
							if (result === numResult) {
								return <span className="resultSelector" key={index} style={{ fontWeight: 700 }} onClick={() => handleClick(result)}>{result}</span>
							}
							else {
								return <span className="resultSelector" key={index} onClick={() => handleClick(result)}>{result}</span>
							}
						}

					)
				}
			</p>
		</div>
	)
}

export default ResultSelector;