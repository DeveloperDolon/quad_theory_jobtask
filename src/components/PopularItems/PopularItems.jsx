import Container from '@mui/material/Container';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css/navigation';
// Import Swiper React components
import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const PopularItems = () => {

    return (
        <Container maxWidth="lg">
            <p>Popular</p>
            <Swiper
                slidesPerView={5}
                navigation={true}
                freeMode={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[ Navigation , FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 8 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
                <SwiperSlide>Slide 9 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia laboriosam magni, nemo quae suscipit sequi porro ipsum dignissimos nostrum, accusantium quidem minus, quibusdam sint. Quis eum beatae debitis est?</SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default PopularItems;