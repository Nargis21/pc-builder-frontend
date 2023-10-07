import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Banner.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useGetCategoriesQuery } from '@/redux/api/apiSlice';
import Image from 'next/image';

const Banner = () => {
    const { data, error, isLoading } = useGetCategoriesQuery()
    return (
        <div className='flex flex-col lg:flex-row items-center py-16'>
            <div className='w-full'>
                <h1>Heading</h1>
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
