import RootLayout from '@/components/Layouts/RootLayout';
import StarRating from '@/components/UI/StartRating';
import { addProduct } from '@/redux/features/product/productSlice';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const CategoryProducts = ({ products }) => {

    const dispatch = useDispatch()
    return (
        <>
            <Head>
                <title>PC Net - Products</title>
                <meta
                    name="description"
                    content="This is PC Builder application made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=" p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

                {
                    products?.map((product) => (
                        <div key={product._id} className="rounded-lg flex flex-col items-center justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">
                            {/* <img src={product?.image} alt="product" width={300} /> */}
                            <Image
                                src={product?.image}
                                width={300}
                                height={200}
                                responsive
                                alt="product image"
                            />
                            <h1 className="text-xl font-semibold my-3 flex items-start w-full">{product?.name}</h1>

                            <div className='flex justify-between w-full items-center mb-2'>
                                <p className="text-xl text-indigo-500 font-bold">${product?.price}</p>
                                <p className='px-4 py-1 rounded-full bg-indigo-300 font-semibold'>{product?.status}</p>
                            </div>
                            <div className='flex justify-between w-full items-center'>
                                <p>Category: <span className='font-semibold'>{product?.category.category}</span></p>
                                <StarRating rating={product?.average_rating} />
                            </div>
                            <div className='w-full mt-6'>
                                <Link href='/category'>
                                    <label onClick={() => dispatch(addProduct(product))} className='border-2 border-indigo-500 hover:bg-indigo-500 text-black rounded px-4 py-2  hover:text-white flex items-center justify-center gap-1 font-semibold cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                        </svg>
                                        Add To Builder
                                    </label>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-backend-phi.vercel.app/api/v1/products/category/${params.id}`)
    const data = await res.json()
    return {
        props: {
            products: data.data
        }
    }
}