import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="bg-[#eeeff0]">
            <div className="">
                <NavBar></NavBar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default MainLayout;