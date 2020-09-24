import React from 'react'

const RepoIssue = (props) => {
	const issue = props.issue.node;

	return (
		<p className="issueName">
			<a href={issue.url}>
				{issue.title}
			</a>
		</p>
	)
}
export default RepoIssue;