import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import PopularItems from "../components/PopularItems/PopularItems";

const MainLayout = () => {
    return (
        <div className="bg-[#eeeff0]">
            <div className="">
                <NavBar></NavBar>
                <Banner></Banner>
                <PopularItems></PopularItems>
            </div>
        </div>
    );
};

export default MainLayout;