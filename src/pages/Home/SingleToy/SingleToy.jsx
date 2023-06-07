import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const SingleToy = ({ toy }) => {
    console.log(toy?.rating)

    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={toy?.photoUrl} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {toy?.title} </h5>
                <Rating
                    style={{ maxWidth: 130 }}
                    value={toy?.rating}
                    readOnly
                />

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${toy?.price}</span>
                    <Link to={`/details/${toy?._id}`} className="text-white bg-gradient-to-r from-[#1CB5E0] to-[#000851] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">View Details</Link>
                </div>
            </div>
        </div>


    );
};

export default SingleToy;