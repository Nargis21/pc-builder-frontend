import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarRating from './StartRating';

const Products = ({ products }) => {
    return (
        <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {products?.map((product) => (
                <Link key={product._id} href={`/product/${product._id}`}>
                    <div className="rounded-lg flex flex-col items-center justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">
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
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;
