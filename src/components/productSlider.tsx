import React, { useEffect } from "react";
import ProductItem from "./productItem";
import { CarState } from "../../src/context/Context";
import { CarsInterface } from "../models/cars";
import { useSpringCarousel } from "react-spring-carousel-js";
import { Flex } from "vcc-ui";

const ProductSlider: React.FC = () => {
  const {
    state: { carList, bodyType },
    dispatch,
  } = CarState();

  const productList = () => {
    let sortedProducts = carList;
    if (bodyType) {
      sortedProducts = sortedProducts.filter(
        (item: CarsInterface) => item.bodyType === bodyType
      );
    }
    return sortedProducts;
  };

  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    itemsPerSlide: 4,
    withLoop: false,
    withThumbs: true,
    items: productList().map((car: CarsInterface) => ({
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

  return (
    <Flex className="clikable">
      Filter Cars
      <a
        onClick={() => {
          slideToItem(0);
          dispatch({
            type: "SORT_BY_BodyType",
            payload: "",
          });
        }}
      >
        All
      </a>
      <a
        onClick={() => {
          slideToItem(0);
          dispatch({
            type: "SORT_BY_BodyType",
            payload: "suv",
          });
        }}
      >
        SUV
      </a>
      <a
        onClick={() => {
          slideToItem(0);
          dispatch({
            type: "SORT_BY_BodyType",
            payload: "estate",
          });
        }}
      >
        ESTATE
      </a>
      <a
        onClick={() => {
          slideToItem(0);
          dispatch({
            type: "SORT_BY_BodyType",
            payload: "sedan",
          });
        }}
      >
        SEDAN
      </a>
      <Flex
        extend={{
          padding: 20,
        }}
      ></Flex>
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
      <ul className="d-none mobileThumbs">
        {productList().map((car: CarsInterface, index: number) => (
          <li key={car.id} onClick={() => slideToItem(index)} className=""></li>
        ))}
      </ul>
    </Flex>
  );
};

export default ProductSlider;
