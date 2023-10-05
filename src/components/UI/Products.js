import Link from 'next/link';
import React from 'react';

const Products = ({ products }) => {
    return (
        <div className=" p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {
                products?.map((product) => (
                    <Link key={product._id} href={`/product/${product._id}`} >
                        <div className="rounded-2xl h-[500px] flex flex-col items-start justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">
                            <img src={product?.image} alt="product" width={300} />
                            <h1 className="text-xl font-semibold mt-2">{product?.name}</h1>

                            <div className='flex justify-between w-full items-center'>
                                <p className="text-xl text-indigo-500 font-bold">${product?.price}</p>
                                <p className='px-4 py-1 rounded-full bg-indigo-300'>{product?.status}</p>
                            </div>
                            <div className='flex justify-between w-full items-center '>
                                <p>Category: <span className='font-semibold'>{product?.category.category}</span></p>
                                <p>Ratings:  <span className='font-semibold'>{product?.average_rating}</span></p>

                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Products;