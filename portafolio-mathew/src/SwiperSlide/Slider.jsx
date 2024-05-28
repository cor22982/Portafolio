import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { generateSlides } from "./utils";
import { SlideContainer } from "./styledComponents";
import { SliderProps, Slide } from "./types";
import SlideItem from "./SlideItem.jsx";

class Slider extends Component<SliderProps> {
  renderSlide = ({ id, ...rest }: Slide, idx: number) => (
    <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
  );

  render() {
    const { hasImage, params, id, ...styles } = this.props;
    const data = generateSlides({ id, hasImage });

    return (
      <SlideContainer {...styles} id={id}>
        <Swiper {...params}>{data.map(this.renderSlide)}</Swiper>
      </SlideContainer>
    );
  }
}

export default Slider;
