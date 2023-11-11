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
  uri: 'https://2dc2gvyfojcp3kq2cpcqepwzc4.appsync-api.us-east-1.amazonaws.com/graphql',
  headers: {
    'x-api-key': 'da2-y5l7k4mo2bfgjiqlw443diymce' // Usa la API key desde las variables de entorno
  }
});

// Instantiate client
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
