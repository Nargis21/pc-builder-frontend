import RootLayout from '@/components/Layouts/RootLayout';
import Products from '@/components/UI/Products';
import Head from 'next/head';
import React from 'react';

const ProductsPage = ({ products }) => {
    return (
        <div>
            <Head>
                <title>PC Net - Products</title>
                <meta
                    name="description"
                    content="This is PC Builder application made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Products products={products}></Products>
        </div>
    );
};

export default ProductsPage;

// using layout
ProductsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

//Dynamic data fetching with SSG
export const getStaticPaths = async () => {
    const res = await fetch('https://pc-builder-backend-phi.vercel.app/api/v1/products')
    const products = await res.json()

    const paths = products?.data?.map((product) => (
        {
            params: { categoryId: product?.category._id }
        }
    ))

    return { paths, fallback: false }
}


export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-backend-phi.vercel.app/api/v1/products/category/${params.categoryId}`)
    const data = await res.json()

    return {
        props: {
            products: data.data
        },
        revalidate: 30
    }
} 
