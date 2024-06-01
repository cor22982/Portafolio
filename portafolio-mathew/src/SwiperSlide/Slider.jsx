import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import PropTypes from 'prop-types'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Profile from '../Pages/Profile';
import TextAnimate from '../Components/TextAnimate/TextAnimate';
import Tools from '../Pages/Tools';
import Work from '../Pages/Work/Work';
import Portafolio from '../Pages/Portafoliop/Portafoliop';
import Study from '../Pages/Study/Study';
import Contact from '../Pages/Contact/Contact';

const Slider = ({goto}) => {
  
  const steps = [
    
    'Programador Junior',
    'Estudiante Ingenieria en Sistemas',
    'Desarrollador Fronted'
  ];

  return (
    <div className="container">
      <TextAnimate steps={steps}></TextAnimate>
     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
            <Profile></Profile>
           
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slide-wrapper" onClick={ () => goto(1)}>
            <Portafolio></Portafolio>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper" onClick={ () => goto(2)}>
            <Tools></Tools>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper" onClick={ () => goto(3)}>
            <Work></Work>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper" onClick={ () => goto(4)}>
            <Study></Study>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper" onClick={ () => goto(5)}>
            <Contact></Contact>
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    
    </div>
  );
}

Slider.propTypes = {
  goto: PropTypes.func
}

export default Slider;
