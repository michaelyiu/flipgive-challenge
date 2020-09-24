import React from 'react'

const RepoLanguage = (props) => {
	const language = props.language.node;

	return (
		<span className="badge" style={{ backgroundColor: language.color, color: 'white' }}>{language.name}</span>
	)
}
export default RepoLanguage;