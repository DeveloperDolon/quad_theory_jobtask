import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";

const SwiperNavButtons = ({className}) => {
    const swiper = useSwiper();

    return (
        <div className={`swiper-nav-btns space-x-5 ${className}`}>
            <button onClick={() => swiper.slidePrev()}>Prev</button>
            <button onClick={() => swiper.slideNext()}>Next</button>
        </div>
    );
};

export default SwiperNavButtons;
SwiperNavButtons.propTypes = {
    className: PropTypes.string,
}