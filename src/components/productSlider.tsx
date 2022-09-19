import React from "react";
import ProductItem from "./productItem";
import { CarState } from "../../src/context/Context";
import { CarsInterface } from "../models/cars";

const ProductSlider: React.FC = () => {
  const {
    state: { carList },
  } = CarState();
  return (
    <React.Fragment>
      {carList.map((car: CarsInterface) => (
        <ProductItem
          key={car.id}
          id={car.id}
          modelName={car.modelName}
          bodyType={car.bodyType}
          modelType={car.modelType}
          imageUrl={car.imageUrl}
        />
      ))}
    </React.Fragment>
  );
};

export default ProductSlider;
