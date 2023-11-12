import client, { GET_TODOS } from '@/apollo/apollo-client';
import { TTodos, TTodosQueryData } from '@/types/Index';
import Head from 'next/head';
import Link from 'next/link';

type TTodosPageProps = {
    todos: TTodos[];
};

export default function Todos({ todos }: TTodosPageProps) {
    return (
        <div className="todoPage">
            <Head>
                <title>My todo title</title>
                <meta property="og:title" content="My todo title" key="title" />
            </Head>
            <h2>Todos 🚀</h2>
            {todos &&
                todos.map((todo) => (
                    <h3 key={todo.title}>
                        <Link href={`./todo/${todo.id}`}>{todo.title}</Link>
                    </h3>
                ))}
        </div>
    );
}

export async function getStaticProps() {
    const { data, errors } = await client.query<TTodosQueryData>({
        query: GET_TODOS,
    });

    const { todos } = data;

    if (!data) {
        return {
            redirect: {
                destination: '/',
            },
        };
    }

    return {
        props: {
            todos,
        },
        revalidate: 60,
    };
}
