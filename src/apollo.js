import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	// const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: `Bearer a2effa0ad9ea10c1068bdd53684d40be78ebcb3d`
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});
// const client = new ApolloClient({
// 	uri: 'https://api.github.com/graphql',
// 	cache: new InMemoryCache(),
// 	request: async operation => {
// 		// 	const token = window.localStorage.getItem('token');
// 		operation.setContext({
// 			headers: {
// 				Authorization: 'Bearer a2effa0ad9ea10c1068bdd53684d40be78ebcb3d'
// 			}
// 		})
// 	},
// });

export default client;