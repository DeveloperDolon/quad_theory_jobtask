import Container from '@mui/material/Container';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import axios from "axios";
import 'swiper/css/navigation';
// Import Swiper React components
import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const PopularItems = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
        .then(res => {
            setData(res.data.Items);
        }).catch(err => console.log(err));
    }, []);
    console.log(data)

    return (
        <Container maxWidth="lg">
            <p className='md:text-2xl text-xl pb-4 font-medium'>Popular</p>
            <Swiper
                slidesPerView={5}
                navigation={true}
                freeMode={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    data?.map((item, idx) => <SwiperSlide className='rounded-xl bg-none' key={idx}>
                        <div className='overflow-hidden shadow-lg rounded-xl'>
                            <img className='w-full min-h-[260px]' src={item?.ImageUrl} alt="" />
                        </div>
                        <p className='md:text-base text-sm pt-2 bg-[#eeeff0]'>{item?.Name}</p>
                    </SwiperSlide>)
                }
            </Swiper>
        </Container>
    );
};

export default PopularItems;