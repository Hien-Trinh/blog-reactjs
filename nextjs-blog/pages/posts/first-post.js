import Link from 'next/link';
import React from 'react';

export default function FirstPost() {
    return (
        <React.Fragment className="flex justify-center content-center">
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </React.Fragment>
    );
}