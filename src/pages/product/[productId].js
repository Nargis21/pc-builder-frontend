import RootLayout from '@/components/Layouts/RootLayout';
import ProductDetails from '@/components/UI/ProductDetails';
import Head from 'next/head';
import React from 'react';

const ProductDetailsPage = ({ product }) => {
    return (
        <div>
            <Head>
                <title>PC Net - Product</title>
                <meta
                    name="description"
                    content="This is PC Builder application made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProductDetails product={product}></ProductDetails>
        </div>
    );
};

export default ProductDetailsPage;

// using layout
ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

//Dynamic data fetching with SSG
export const getStaticPaths = async () => {
    const res = await fetch('https://pc-builder-backend-phi.vercel.app/api/v1/products')
    const products = await res.json()

    const paths = products?.data?.map((product) => (
        {
            params: { productId: product?._id }
        }
    ))

    return { paths, fallback: false }
}


export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-backend-phi.vercel.app/api/v1/products/${params.productId}`)
    const data = await res.json()

    return {
        props: {
            product: data.data
        },
        revalidate: 30
    }
} 
