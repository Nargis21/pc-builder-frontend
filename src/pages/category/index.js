import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryPage = ({ allCategory }) => {
    return (
        <div className='pt-12'>
            <div className='lg:w-[60%] w-[90%] mx-auto shadow-xl p-8'>
                <h1 className='text-xl font-semibold text-center mb-6'>PC Builder | Build Your Own Computer | PC Net</h1>
                {
                    allCategory.map((category) => (
                        <div key={category._id} className='p-4 border border-gray-300 mt-4 flex lg:flex-row flex-col justify-between items-center'>
                            <div className='flex flex-col justify-center'>
                                <Image
                                    src={category?.image}
                                    width={50}
                                    height={50}
                                    responsive
                                    alt="category image"
                                />
                                <h1 className=" font-semibold mt-2">{category?.category}</h1>
                            </div>
                            <div>
                                <Link href={`/category/${category._id}`}>
                                    <h1 className='btn btn-sm btn-primary'>Choose</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }
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
    const res = await fetch('https://pc-builder-backend-phi.vercel.app/api/v1/categories')
    const data = await res.json()
    return {
        props: {
            allCategory: data.data
        }
    }
}