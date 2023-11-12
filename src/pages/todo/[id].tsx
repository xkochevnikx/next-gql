import MetaLayout from '@/seo/MetaLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';

// export type TodoItemPage<T extends string> = {
//     params: Record<T, string>;
// };

export default function Todo() {
    const { query } = useRouter();

    return (
        <>
            <MetaLayout title="id">
                <h1>Todo Item {query.id} </h1>;
            </MetaLayout>
        </>
    );
}
