import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Banner.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useGetCategoriesQuery } from '@/redux/api/apiSlice';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    const { data, error, isLoading } = useGetCategoriesQuery()
    return (
        <div className='flex flex-col items-center lg:gap-0 gap-5 lg:flex-row lg:py-16 py-8'>
            <div className='w-full lg:pl-12 font-semibold text-gray-600 text-center lg:text-left'>
                <h1 className='lg:text-6xl text-4xl  leading-[5rem] text-gray-600'>Build Your Dream <mark className='bg-indigo-200 px-4 text-gray-600'>PC</mark></h1>
                <p className='mt-4'>Design Your High-Performance Workstation, Choose Your Components, Create Your Masterpiece!</p>
                <Link href='/category'>
                    <button className='btn btn-primary  bg-indigo-500 border-none rounded mt-4 '>Build Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    </button>
                </Link>

            </div>
            <div className='w-full'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className={`${styles.swiper} mySwiper`}
                >
                    {
                        data?.data?.map((category) => (
                            <SwiperSlide key={category._id} className='rounded-lg p-6 bg-white shadow-xl flex justify-center'>
                                <div className='flex flex-col justify-center items-center h-full'>
                                    <div>
                                        <Image
                                            src={category?.image}
                                            width={200}
                                            height={200}
                                            responsive
                                            alt="product image"
                                        />
                                    </div>
                                    <h1 className='font-semibold text-xl mt-4'>{category?.category}</h1>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
