import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});
const authLink = setContext((_, { headers }) => {
	// const token = process.env.REACT_APP_GITHUB;

	return {
		headers: {
			...headers,
			// authorization: token ? token : null
			authorization: `bearer 6f2efacd542098596874d7b51e509a65fb3e3abe`
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});


export default client;