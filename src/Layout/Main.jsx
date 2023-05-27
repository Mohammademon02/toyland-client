import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import FooterSection from "../pages/Shared/FooterSection/FooterSection";


const Main = () => {
    return (
        <div className="container mx-auto">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;