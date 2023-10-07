import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import Categories from '@/components/UI/Categories';
import Products from '@/components/UI/Products';
import Head from 'next/head';
import React from 'react';

const HomePage = ({ products, categories }) => {

  return (
    <div>
      <Head>
        <title>PC Net - Home</title>
        <meta
          name="description"
          content="This is PC Builder application made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner></Banner>
      <div className='font-semibold text-center pt-10 bg-gray-200'>
        <h1 className='text-2xl'>Featured Products</h1>
        <p className='pt-2'>Check & Get Your Desired Product!</p>
      </div>
      <Products products={products}></Products>
      <div className='font-semibold text-center pt-10'>
        <h1 className='text-2xl'>Featured Categories</h1>
        <p className='pt-2'>Get Your Desired Product from Featured Category!</p>
      </div>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default HomePage;

// using layout
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// Fetch random 6 products data and all categories data with SSG
export const getStaticProps = async () => {
  // Fetch random 6 products data
  const productsRes = await fetch('https://pc-builder-backend-phi.vercel.app/api/v1/products/random-products');
  const productsData = await productsRes.json();

  // Fetch all categories data
  const categoriesRes = await fetch('https://pc-builder-backend-phi.vercel.app/api/v1/categories');
  const categoriesData = await categoriesRes.json();

  return {
    props: {
      products: productsData.data,
      categories: categoriesData.data
    },
    revalidate: 30
  }
}
