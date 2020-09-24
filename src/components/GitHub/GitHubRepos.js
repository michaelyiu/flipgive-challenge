import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { SearchContext } from './../../contexts/SearchContext';
import { GET_REPOS } from '../../Query/query';
import RepoItem from './RepoItem';
import Spinner from '../Loader/Spinner';

const GitHubRepos = () => {
	const { filter, numResult } = useContext(SearchContext);

	const { data, loading } = useQuery(GET_REPOS, {
		variables: {
			login: filter,
			count: numResult,
		}
	})


	// if the query is still loading data, a spinner will be displayed until
	// the response is ready and the data will be passed to a different component
	return (
		<div className="repoSection">
			{
				loading ? <Spinner /> :
					!loading && data
						? data.organization.repositories.edges.map(
							repo => <RepoItem key={repo.node.id} repo={repo} />
						)
						: <div>No organization by the name "{filter}" was found :(</div>
			}
		</div>
	)
}

export default GitHubRepos;