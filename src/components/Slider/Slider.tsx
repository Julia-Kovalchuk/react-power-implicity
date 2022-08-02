import { ReactComponent as Dot } from "../../assets/dot.svg";
import { ReactComponent as DotActive } from "../../assets/dot-active.svg";

import "./slider.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__slide">
          <h2 className="slider__title">The Power of Simplicity </h2>
          <p className="slider__subtitle">
            Instead of spending time searching for the right app, our AI will
            bring the right app to you.
          </p>
          <button className="slider__button">
            <p className="slider__button-name">Learn</p>
          </button>
        </div>
        <div className="slider__dots">
          <Dot className="slider__dot" />
          <Dot className="slider__dot" />
          <DotActive className="slider__dot slider__dot--active" />
          <Dot className="slider__dot" />
          <Dot className="slider__dot" />
        </div>
      </div>
    </div>
  );
};
