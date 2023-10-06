import { signIn } from 'next-auth/react';
import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';
import Head from 'next/head';


const Login = () => {
    return (
        <>
            <Head>
                <title>PC Net - Login</title>
                <meta
                    name="description"
                    content="This is PC Builder application made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='lg:w-[30%] w-[95%] p-12 shadow-2xl rounded-lg bg-white'>
                    <button className=' border-2 border-indigo-500 hover:bg-indigo-500 text-black rounded px-4 py-2  hover:text-white flex items-center justify-center gap-2 font-semibold w-full mb-4' onClick={() => signIn('github', { callbackUrl: 'https://pc-builder-nu-two.vercel.app' })}>
                        <Image
                            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                            width={30}
                            height={20}
                            responsive
                            alt="product image"
                        />
                        <p>Continue With Github</p>
                    </button>
                    <button className=' border-2 border-indigo-500 hover:bg-indigo-500 text-black rounded px-4 py-2  hover:text-white flex items-center justify-center gap-2 font-semibold w-full' onClick={() => signIn('google', { callbackUrl: 'https://pc-builder-nu-two.vercel.app' })}>
                        <Image
                            src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png'
                            width={30}
                            height={20}
                            responsive
                            alt="product image"
                        />
                        <p>Continue With Google</p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;

// using layout
Login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};