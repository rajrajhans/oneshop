import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';
import { devEndpoint, prodEndpoint } from '../config';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from 'next-with-apollo';
import paginationField from './paginationField';

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) => {
            console.error(
              `[GraphQL Error]:\n Message: ${message},\n Location: ${locations},\n Path:${path}`,
            );
          });
        }

        if (networkError) {
          console.error(
            `[Network Error]:\n ${networkError}. Backend is not reachable.`,
          );
        }
      }),
      createUploadLink({
        uri:
          process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
        fetchOptions: { credentials: 'include' },
        headers, // we want to pass the headers along with the request, as we are using cookie based session auth which will be processed on the server side
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            /*
             this is to override cache behaviour when a field comes in.
             we are doing this to fix the pagination query cache issue where when a product is deleted, pagination gets messed up.
             instead of a key value cache dependent of pagination skip and first options, we want a simple list of products,
             wherein we can simply rearrange the pagination order when one of the items in that list gets deleted.
            */
            allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
