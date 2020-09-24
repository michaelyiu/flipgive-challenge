import React from 'react'

const RepoLanguage = (props) => {
	const language = props.language.node;

	//inline style of background color which was given to us by the query response
	return (
		<span className="badge" style={{ backgroundColor: language.color, color: 'white' }}>{language.name}</span>
	)
}
export default RepoLanguage;