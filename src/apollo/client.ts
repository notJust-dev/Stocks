import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://oneonta.stepzen.net/api/crusty-toucan/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Apikey oneonta::stepzen.net+1000::1c894b653ee8a3d59cf2e0a87d22803af367cb5f23ebb009ed5b840b258586c4',
  },
});

export default client;
