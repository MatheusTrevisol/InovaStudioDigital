import { Container } from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export function SwiperButtons({ swiperContainerRef }) {
  return (
    <Container>
      <button className="left-button" onClick={() => swiperContainerRef.current.swiper.slidePrev()}>
        <MdKeyboardArrowLeft size={24} />
      </button>
      <button className="right-button" onClick={() => swiperContainerRef.current.swiper.slideNext()}>
        <MdKeyboardArrowRight size={24} />
      </button>
    </Container>
  )
}
