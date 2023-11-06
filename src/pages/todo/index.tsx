import client, { GET_TODOS } from '@/apollo/apollo-client';
import { TTodos, TTodosQueryData } from '@/types/Index';

type TTodosPageProps = {
    data: {
        todos: TTodos[];
    };
};

export default function Todos({ data }: TTodosPageProps) {
    const { todos } = data;

    return (
        <div className="todoPage">
            <h2>Todos 🚀</h2>
            {todos && todos.map((todo) => <p key={todo.title}>{todo.title}</p>)}
        </div>
    );
}

export async function getServerSideProps() {
    const { data } = await client.query<TTodosQueryData>({
        query: GET_TODOS,
    });

    if (!data) {
        return {
            notFound: true,
        };
    }
    console.log(data);

    return {
        props: {
            data,
        },
    };
}
