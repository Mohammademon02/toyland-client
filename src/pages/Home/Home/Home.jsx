import CustomerReviews from "../CustomerReviews/CustomerReviews";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ToyCategories from "../ToyCategories/ToyCategories";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ToyCategories></ToyCategories>
            <PhotoGallery></PhotoGallery>
            <CustomerReviews></CustomerReviews>
        </div>
    );};

export default Home;