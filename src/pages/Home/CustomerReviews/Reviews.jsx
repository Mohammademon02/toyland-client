import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Reviews = ({review}) => {

    return (    
        <div className="flex flex-col h-full text-center items-center justify-center ">
            <h4 className="lg:mb-7 md:mb-5 mb-3 text-3xl font-semibold">{review?.name}</h4>
            <Rating
                style={{ maxWidth: 100 }}
                value={review?.rating}
                readOnly
            />
            <p className="flex-wrap my-5  font-mono">{review?.review}</p>
        </div>
    );
};

export default Reviews;