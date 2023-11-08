import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

export default client;

export const GET_TODOS = gql`
    query AllTodos {
        todos: allTodos {
            title
            id
        }
    }
`;

export const ADD_TODOS = gql`
    mutation AddTodo($title: String!, $userId: Int!, $completed: Boolean!) {
        createTodo(title: $title, userId: $userId, completed: $completed) {
            userId
            title
            completed
        }
    }
`;
