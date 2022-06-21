import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-violet-300">
                <p className="text-center text-3xl">First Post</p>
                <p>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </p>
                <Image src={"/images/profile_pic_1.jpeg"} height={516} width={516} alt="Your name"></Image>
            </div>
            <style></style>
        </Layout>
    );
}