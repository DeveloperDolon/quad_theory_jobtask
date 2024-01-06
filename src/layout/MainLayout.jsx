
import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import PopularItems from "../components/PopularItems/PopularItems";
import Recommended from "../components/RecommendedSection/RecommendedPart";

const MainLayout = () => {
    return (
        <div className="bg-[#eeeff0]">
            <div className="">
                <NavBar></NavBar>
                <Banner></Banner>
                <PopularItems></PopularItems>
                <Recommended></Recommended>
            </div>
        </div>
    );
};

export default MainLayout;