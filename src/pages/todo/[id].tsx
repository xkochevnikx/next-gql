import client, { GET_TODO, GET_TODOS } from '@/apollo/apollo-client';
import MetaLayout from '@/seo/MetaLayout';
import { TTodos, TTodosQueryData } from '@/types/Index';
import { GetStaticPropsContext } from 'next';

// export type TodoItemPage<T extends string> = {
//     params: Record<T, string>;
// };

type TTodoPageProps = {
    data: {
        todo: TTodos;
    };
};

export default function Todo({ data }: TTodoPageProps) {
    return (
        <>
            <MetaLayout title="id" description="todo item description">
                <h1>Todo Item: {data.todo.id}</h1>
                <p>{data.todo.title}</p>
            </MetaLayout>
        </>
    );
}

export const getStaticPaths = async () => {
    const { data, errors } = await client.query<TTodosQueryData>({
        query: GET_TODOS,
    });

    const paths = data.todos.map((todo) => ({
        params: { id: todo.id.toString() },
    }));

    return {
        paths,
        fallback: true,
    };
};

export async function getStaticProps(context: GetStaticPropsContext) {
    const { data, errors } = await client.query<TTodos>({
        query: GET_TODO,
        variables: {
            id: context?.params?.id,
        },
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
        revalidate: 60,
    };
}
