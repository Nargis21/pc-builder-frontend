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
            <h1 className='text-2xl font-semibold text-center mb-6'>
                PC Builder | Build Your Own Computer | PC Net
            </h1>
            <div className='lg:w-[60%] w-[90%] mx-auto shadow-xl p-8'>
                {allCategory.map((category) => {
                    const categoryId = category._id;
                    const categoryProduct = products.find((product) => product.category._id === categoryId);

                    return (
                        <div
                            key={categoryId}
                            className='p-4 border border-gray-300 mt-4 flex lg:flex-row flex-col justify-between items-center gap-5'
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
                                        <h1 className='btn btn-sm btn-primary'>Choose</h1>
                                    </Link>
                                )}
                            </div>
                        </div>
                    );
                })}
                <div className='flex justify-end w-full'>
                    <button disabled={products.length < 6} className='btn btn-primary mt-4'>Complete Build</button>
                </div>
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
