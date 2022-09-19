import React, { ReactElement } from "react";
import { Block } from "vcc-ui";
import { CarsInterface } from "../models/cars";

const ProductItem = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}: CarsInterface): ReactElement => {
  return (
    <Block>
      <h3>{bodyType}</h3>
      <h4>
        dasd
        {modelName}
        <span>{modelType}</span>
      </h4>
      <img alt={modelName} src={imageUrl} />
      <div>
        <a title="Learn" href={`/learn/${id}`}>
          Learn
        </a>
        <a title="Shop" href={`/shop/${id}`}>
          Shop
        </a>
      </div>
    </Block>
  );
};

export default ProductItem;
