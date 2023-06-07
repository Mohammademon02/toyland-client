import { Carousel } from "flowbite-react";


const Header = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-5">
            <Carousel className="h-auto">
                <img
                    src="https://i.ibb.co/PrMVW3r/banner-3-1.jpg"
                />
                <img
                    src="https://i.ibb.co/F7fsnF5/banner4-1.jpg"
                />
                <img
                    src="https://i.ibb.co/XWd6Z0V/banner-2-1.jpg"
                />
                <img
                    src="https://i.ibb.co/Srvjy9V/banner-1.jpg"
                />
            </Carousel>
        </div>
    );
};

export default Header;