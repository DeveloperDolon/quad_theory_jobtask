import Container from '@mui/material/Container';
import bannerImg from "../../assets/Image1.png";


const Banner = () => {
    return (
        <Container maxWidth="lg">
            <div className="md:bg-[#f99f1c] md:my-32 my-12 text-white rounded-3xl grid md:grid-cols-2 grid-cols-1 items-center">
                <div className='md:py-10 py-5 md:pl-28 md:text-white text-black md:text-left text-center'>
                    <h1 className='md:text-5xl text-3xl font-semibold'>
                        Deliver Food To Your <br /> Door Step|
                    </h1>

                    <p className='md:text-xl text-lg font-extralight mt-7'>
                        Authentic Food Quick Service Fast Delivery
                    </p>
                </div>

                <div>
                    <img className='md:bg-none md:mx-0 mx-auto bg-[#f99f1c] md:rounded-3xl rounded-2xl' src={bannerImg} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;