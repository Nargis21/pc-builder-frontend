import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CategoryPage = ({ allCategory }) => {
    const { products } = useSelector((state) => state.product);
    return (
        <div className='pt-12'>
            <Head>
                <title>PC Net - PC Builder</title>
                <meta
                    name="description"
                    content="This is PC Builder application made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col items-center mb-6'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mb-2">
                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                </svg>
                <h1 className='text-2xl font-semibold'>
                    PC Builder | Build Your Own Computer | PC Net
                </h1>
            </div>

            <div className='lg:w-[60%] w-[90%] mx-auto shadow-xl p-8 bg-white rounded-lg'>
                {allCategory.map((category) => {
                    const categoryId = category._id;
                    const categoryProduct = products.find((product) => product.category._id === categoryId);

                    return (
                        <div
                            key={categoryId}
                            className='p-4 border border-gray-300 mt-4 flex lg:flex-row flex-col justify-between items-center gap-5 rounded-lg'
                        >
                            <div className='flex flex-col justify-center lg:items-start items-center'>
                                <Image
                                    src={category?.image}
                                    width={50}
                                    height={50}
                                    responsive
                                    alt='category image'
                                />
                                <h1 className=' font-semibold mt-2'>{category?.category}</h1>
                            </div>
                            <div>
                                {categoryProduct ? (
                                    <div className='flex gap-5 items-center justify-center'>

                                        <div className='font-semibold'>
                                            <h1 className="text-xl">{categoryProduct?.name}</h1>
                                            <p className="text-xl text-indigo-500 mt-2">${categoryProduct?.price}</p>
                                        </div>
                                        <Image
                                            src={categoryProduct?.image}
                                            width={70}
                                            height={70}
                                            responsive
                                            alt='category image'
                                        />
                                    </div>
                                ) : (
                                    <Link href={`/category/${categoryId}`}>
                                        <h1 className="border-2 border-indigo-500 hover:bg-indigo-500 text-black rounded px-4 py-2  hover:text-white ml-2 flex items-center gap-1 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                                        </svg>
                                            Choose</h1>
                                    </Link>
                                )}
                            </div>
                        </div>
                    );
                })}

                <button disabled={products.length < 6} className='btn btn-primary mt-6 w-full flex items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
                    Complete Build</button>

            </div>
        </div>
    );
};

export default CategoryPage;

// using layout
CategoryPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

//all category data fetching with getServerSideProps ---SSR
export const getServerSideProps = async () => {
    const res = await fetch('https://pc-builder-backend-phi.vercel.app/api/v1/categories');
    const data = await res.json();
    return {
        props: {
            allCategory: data.data,
        },
    };
};
