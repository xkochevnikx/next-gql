import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <Link href={'/'}>home</Link>
            <Link href={'/todo'}>todo</Link>
        </div>
    );
}
