import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

require('dotenv').config();

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});
const authLink = setContext((_, { headers }) => {
	const token = `bearer ${process.env.REACT_APP_GITHUB}`;
	return {
		headers: {
			...headers,
			authorization: token ? token : null
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});


export default client;