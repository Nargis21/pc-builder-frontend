import RootLayout from '@/components/Layouts/RootLayout';
import { addProduct } from '@/redux/features/product/productSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const CategoryProducts = ({ products }) => {

    const dispatch = useDispatch()
    return (
        <div className=" p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {
                products?.map((product) => (
                    <div key={product._id} className="rounded-2xl flex flex-col items-center justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">
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
                            <p>Ratings:  <span className='font-semibold'>{product?.average_rating}</span></p>
                        </div>
                        <div className='flex justify-end w-full mt-6'>
                            <Link href='/category'>
                                <label onClick={() => dispatch(addProduct(product))} className='btn btn-primary w-full'>
                                    Add To Builder
                                </label>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
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