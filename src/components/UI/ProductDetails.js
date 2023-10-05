const ProductDetails = ({ product }) => {
    const keyFeaturesArray = Object.entries(product.key_features).map(([key, value]) => `${key}: ${value}`);
    return (
        <div className="lg:flex mx-auto items-center border-b border-gray-300 lg:w-[80%] w-[95%]">
            <div className="lg:w-[50%]">
                <img src={product?.image} alt="" />
            </div>
            <div className="lg:w-[50%] space-y-2 font-semibold">
                <h1 className="text-3xl ">{product?.name}</h1>
                <p className="text-xl text-indigo-500 font-bold">${product?.price}</p>
                <p><span className="font-bold">Category: </span>{product?.category.category}</p>
                <p><span className="font-bold">Status: </span>{product?.status}</p>
                <p><span className="font-bold">Key Features: </span>{keyFeaturesArray.join(', ')}</p>
                <p><span className="font-bold">Description: </span>{product?.description}</p>
                <p><span className="font-bold">Individual Ratings: </span>{product?.individual_rating}</p>
                <p><span className="font-bold">Average Rating: </span>{product?.average_rating}</p>
                <p className="font-bold">Reviews: </p>
                <ul className="space-y-1 text-sm ml-6">
                    {product?.reviews?.map((review) => (
                        <li key={review}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;
