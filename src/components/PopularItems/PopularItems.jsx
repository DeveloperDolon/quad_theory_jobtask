import Container from '@mui/material/Container';
import { Navigation, FreeMode } from 'swiper/modules';
import axios from "axios";
import 'swiper/css/navigation';
// Import Swiper React components
import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ArrowForwardIos } from '@mui/icons-material';


const PopularItems = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
        .then(res => {
            setData(res.data.Items);
        }).catch(err => console.log(err));
    }, []);

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <Container maxWidth="lg" sx={{position: "relative"}} className='relative'>
            <div className='flex justify-between items-center'>
                <p className='md:text-2xl text-xl pb-4 font-medium'>
                    Popular
                </p>

                <p>
                    <span className='md:text-base text-sm text-[#f0a638] pr-5 font-semibold'>AddMore</span>
                    <button ref={navigationPrevRef} className='disabled:text-gray-400'><ArrowBackIosNewIcon></ArrowBackIosNewIcon></button>
                    <button ref={navigationNextRef} className='disabled:text-gray-400'><ArrowForwardIos></ArrowForwardIos></button>
                </p>
            </div>
            <Swiper
                slidesPerView={5}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                freeMode={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, FreeMode]}
                className="mySwiper overflow-visible mt-10"
            >
                {/* <SwiperNavButtons className={"absolute -top-1 text-red-500 left-0 z-40 "}></SwiperNavButtons> */}
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