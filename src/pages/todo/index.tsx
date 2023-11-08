import client, { GET_TODOS } from '@/apollo/apollo-client';
import { TTodos, TTodosQueryData } from '@/types/Index';
import type { Metadata } from 'next';
import Head from 'next/head';

type TTodosPageProps = {
    data: {
        todos: TTodos[];
    };
};

export default function Todos({ data }: TTodosPageProps) {
    const { todos } = data;

    return (
        <div className="todoPage">
            <Head>
                <title>My todo title</title>
                <meta property="og:title" content="My todo title" key="title" />
            </Head>
            <h2>Todos 🚀</h2>
            {todos && todos.map((todo) => <p key={todo.title}>{todo.title}</p>)}
        </div>
    );
}

export async function getServerSideProps() {
    const { data, errors } = await client.query<TTodosQueryData>({
        query: GET_TODOS,
    });

    if (!data) {
        return {
            redirect: {
                destination: '/',
            },
        };
    }

    return {
        props: {
            data,
        },
    };
}
