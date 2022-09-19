import React from "react";
import ProductItem from "./productItem";
import { CarState } from "../../src/context/Context";
import { CarsInterface } from "../models/cars";
import { useSpringCarousel } from "react-spring-carousel-js";
import { Flex } from "vcc-ui";

const ProductSlider: React.FC = () => {
  const {
    state: { carList },
  } = CarState();
  const {
    carouselFragment,
    thumbsFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    itemsPerSlide: 4,
    withLoop: false,
    withThumbs: true,
    items: carList.map((car: CarsInterface) => ({
      id: car.id,
      renderItem: (
        <Flex extend={{ padding: 10 }}>
          <ProductItem
            key={car.id}
            id={car.id}
            modelName={car.modelName}
            bodyType={car.bodyType}
            modelType={car.modelType}
            imageUrl={car.imageUrl}
          />
        </Flex>
      ),
      renderThumb: <div color="black"></div>,
    })),
  });
  useListenToCustomEvent((event) => {
    //console.log(event.eventName);

    // Triggered during drag gestures
    // if (event.eventName === "onDrag") {
    //   console.log("drag");
    // }
    // Triggered when the slide is about to slide
    if (event.eventName === "onSlideStartChange") {
      console.log("onSlideStartChange");
    }
    // Triggered when the slide animation is completed
    // if (event.eventName === "onSlideChange") {
    //   console.log("onSlideChange");
    // }
    // Triggered on fullscreen change
    // else if (event.eventName === "onFullscreenChange") {
    //     console.log("onFullscreenChange");
    // }
  });
  return (
    <Flex>
      <Flex
        extend={{
          border: "1px solid grey",
          padding: 20,
        }}
      >
        Hello
      </Flex>
      {carouselFragment}
      <div className="navigationButtons">
        <button
          onClick={slideToPrevItem}
          className="navigation prevButton rotate-180"
        >
          <img
            width="40"
            height="40"
            src="/images/chevron-circled.svg"
            role="presentation"
            alt="previous"
          />
        </button>
        <button onClick={slideToNextItem} className="navigation nextButton">
          <img
            width="40"
            height="40"
            src="/images/chevron-circled.svg"
            role="presentation"
            alt="previous"
          />
        </button>
      </div>
      <div>{thumbsFragment}</div>
      <ul>
        {carList.map((car: CarsInterface) => (
          <li key={car.id} onClick={() => slideToItem(car.id)} className="">
            {car.id}
          </li>
        ))}
      </ul>
    </Flex>
  );
};

export default ProductSlider;
