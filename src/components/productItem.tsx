import React, { ReactElement } from "react";
import { Block, Flex } from "vcc-ui";
import { CarsInterface } from "../models/cars";

const ProductItem = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}: CarsInterface): ReactElement => {
  return (
    <Flex>
      <Block className="productPanel">
        <div className="bodyType">{bodyType}</div>
        <div className="subHeading">
          <span className="modelname">{modelName}</span>
          <span className="modelType">{modelType}</span>
        </div>
        <img className="productPanel_image" alt={modelName} src={imageUrl} />
        <div className="callToAction">
          <a title="Learn" href={`/learn/${id}`}>
            Learn <i className="icon icon-link-chevron">&nbsp;</i>
          </a>
          <a title="Shop" href={`/shop/${id}`}>
            Shop <i className="icon icon-link-chevron">&nbsp;</i>
          </a>
        </div>
      </Block>
    </Flex>
  );
};

export default ProductItem;
