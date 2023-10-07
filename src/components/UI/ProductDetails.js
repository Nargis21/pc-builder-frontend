import Image from "next/image";
import StarRating from "./StartRating";

const ProductDetails = ({ product }) => {
    const keyFeaturesArray = Object.entries(product.key_features).map(([key, value]) => `${key}: ${value}`);
    return (
        <div className="lg:flex mx-auto items-center border-b border-gray-300 lg:w-[80%] w-[95%] pt-12">
            <div className="lg:w-[50%]">
                <Image
                    src={product?.image}
                    width={500}
                    height={200}
                    responsive
                    alt="product image"
                />
            </div>
            <div className="lg:w-[50%] space-y-2 font-semibold">
                <h1 className="text-3xl ">{product?.name}</h1>
                <p className="text-xl text-indigo-500 font-bold">${product?.price}</p>
                <p><span className="font-bold">Category: </span>{product?.category.category}</p>
                <p><span className="font-bold">Status: </span>{product?.status}</p>
                <p><span className="font-bold">Key Features: </span>{keyFeaturesArray.join(', ')}</p>
                <p><span className="font-bold">Description: </span>{product?.description}</p>
                <div className="flex items-center gadiv-2"><span className="font-bold">Individual Ratings: </span><StarRating rating={product?.individual_rating} /></div>
                <div className="flex items-center gap-2"><span className="font-bold">Average Ratings: </span><StarRating rating={product?.average_rating} /></div>
                <p className="font-bold">Reviews: </p>
                <ul className="space-y-1 text-sm ml-6">
                    {product?.reviews?.map((review) => (
                        <li key={review} className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                        </svg>
                            {review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;
