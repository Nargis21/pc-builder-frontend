import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Categories = ({ categories }) => {
    return (
        <div className='lg:w-[80%] w-[90%] mx-auto'>
            <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    categories?.map((category) => (
                        <Link key={category._id} href={`products/${category._id}`} >
                            <div className="rounded-lg flex flex-col items-center justify-between p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all bg-white">
                                {/* <img src={category?.image} alt="category" width={300} /> */}
                                <Image
                                    src={category?.image}
                                    width={150}
                                    height={100}
                                    responsive
                                    alt="category image"
                                />
                                <h1 className="text-xl font-semibold mt-2">{category?.category}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;