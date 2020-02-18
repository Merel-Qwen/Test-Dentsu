import React from "react";
import { CarouselProvider, Slider, DotGroup, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Slider.css";
import review from "./img/review.png";
import woman from "./img/woman.png";
import woman2 from "./img/woman2.png";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider naturalSlideWidth={100} totalSlides={3}>
        <Slider>
          <Slide className="slider" index={0}>
            <div className="slide">
              <img src={review} className="review" />
              <p className="happy">
                "I am so happy becoude i fount this recipe, and it just made my
                life easier. <br /> Thanks so much for sharing!"
              </p>
              <p className="michael"> - Michael Dawson, San Francisco, CA -</p>
              <DotGroup />
            </div>
          </Slide>
          <Slide className="slider" index={1}>
            <div className="slide">
              <img src={woman} className="woman" />

              <p className="happy">
                "I am so happy becoude i fount this recipe, and it just made my
                life easier. <br /> Thanks so much for sharing!"
              </p>
              <p className="michael">- Michael Dawson, San Francisco, CA -</p>
              <DotGroup />
            </div>
          </Slide>
          <Slide className="slider" index={2}>
            <div className="slide">
              <img src={woman2} className="woman" />
              <p className="happy">
                "I am so happy becoude i fount this recipe, and it just made my
                life easier. <br /> Thanks so much for sharing!"
              </p>
              <p className="michael">- Michael Dawson, San Francisco, CA -</p>
              <DotGroup />
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
