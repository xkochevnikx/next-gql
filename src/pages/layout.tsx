import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={inter.className}>
            <div className="body">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
