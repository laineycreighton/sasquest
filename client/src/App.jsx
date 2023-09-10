import './App.css';
import { Outlet } from 'react-router-dom';
import { AppoloClient, In MemoryCache, ApolloProvider, createHttpLink, createHttpLink } from '@apollo/client';
import { setContext} from 'apollo/client/link/context';
import { Outlet } from 'react-router-dom';

// graphQL API end route
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='main'>
        <Outlet />
    </div>
    </ApolloProvider>
  );
}

export default App