import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-violet-300">
                <h1 className="text-center">First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
                <Image src={"/images/profile_pic_1.jpeg"} height={516} width={516} alt="Your name"></Image>
            </div>
            <style></style>
        </>
    );
}