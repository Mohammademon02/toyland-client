import { Carousel } from "flowbite-react";
import reviewsData from "./ReviewsData";
import Reviews from "./Reviews";

const CustomerReviews = () => {
    return (
        <div className="container mx-auto px-5">
            <h1 className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">Our Customer Reviews</h1>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel className="h-auto max-w-full">
                    {
                        reviewsData.map(review => <Reviews
                        review={review}
                        key={review.id}
                        ></Reviews>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default CustomerReviews;