import React from 'react';

import RepoIssue from './RepoIssue';
import RepoLanguage from './RepoLanguage';

const RepoItem = (props) => {
	const repo = props.repo.node;

	return (
		<div className="repoItem">
			<div className="row">
				<div className="col-half">
					<h4 className="repoName"><a href={repo.url}>{repo.name}</a></h4>
					<p className="repoDesc">{repo.description}</p>
				</div>
				<div className="col-half">


					{
						// if there are no issues, then no issues will render else loop through all issues and render the links
						repo.issues && (repo.issues.edges.length > 0) ?
							(<>
								<h4>Issues</h4>
								{
									repo.issues.edges.map(
										issue => <RepoIssue key={issue.node.id} issue={issue} />
									)
								}
							</>)
							:
							null
					}
					{
						//render through the languages if any
						repo.languages && (repo.languages.edges.length > 0) ?
							repo.languages.edges.map(
								language => <RepoLanguage key={language.node.id} language={language} />
							) :
							null
					}

				</div>
			</div>
		</div>
	)
}

export default RepoItem;