import { IMeta } from '@/types/Index';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

export default function MetaLayout(props: PropsWithChildren & IMeta) {
    const { children, title, description } = props;

    const getTitle = (title: string) => `Todo test | ${title}`;

    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                {description ? (
                    <meta name={description} content={description} />
                ) : (
                    <meta name="robots" content="noindex, nofollow" />
                )}
            </Head>
            {children}
        </>
    );
}
