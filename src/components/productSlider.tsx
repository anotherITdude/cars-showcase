import React from "react";
import ProductItem from "./productItem";
import { CarState } from "../../src/context/Context";
import { CarsInterface } from "../models/cars";
import { useSpringCarousel } from "react-spring-carousel-js";
import { Flex, SelectInput } from "vcc-ui";

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

  const handleFilter = (e: any) => {
    console.log(e.target.value);
  };
  const [value, setValue] = React.useState("");

  return (
    <Flex>
      <Flex
        extend={{
          padding: 20,
        }}
      >
        <SelectInput
          label={"Label"}
          value={value}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="bilmodell">Bilmodell</option>
          <option value="c30" disabled>
            Volvo C30
          </option>
          <option value="c70">Volvo C70</option>
          <option value="c90">Volvo C90</option>
          <option value="c40">Volvo S40</option>
          <option value="s60">Volvo S60</option>
          <option value="s80">Volvo S80</option>
          <option value="s90">Volvo S90</option>
        </SelectInput>
        <select>
          <option selected onChange={(e) => handleFilter}>
            Select Filter
          </option>
          <option value="suv">SUV</option>
          <option value="estate">ESTATE</option>
          <option value="sedan">SEDAN</option>
        </select>
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
      <ul className="d-none mobileThumbs">
        {carList.map((car: CarsInterface) => (
          <li
            key={car.id}
            onClick={() => slideToItem(car.id)}
            className=""
          ></li>
        ))}
      </ul>
    </Flex>
  );
};

export default ProductSlider;
