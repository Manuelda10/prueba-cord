import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: 'https://pj72i3fqqfd4dh62af7hn53g5a.appsync-api.us-east-1.amazonaws.com/graphql',
  headers: {
    'x-api-key': 'da2-ho2rzldasnayllymzyxfpp5up4' // Usa la API key desde las variables de entorno
  }
});

// Instantiate client
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
