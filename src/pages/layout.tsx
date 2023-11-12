import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

const DynamicFooter = dynamic(() => import('@/components/Footer'), {
    ssr: false,
});

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={inter.className}>
            <div className="body">
                <Header />
                <main>{children}</main>
                <DynamicFooter />
            </div>
        </div>
    );
}
