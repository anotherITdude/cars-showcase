import React, { ReactElement } from "react";
import { Block, Flex, Text, useTheme } from "vcc-ui";
import { CarsInterface } from "../models/cars";

const ProductItem = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}: CarsInterface): ReactElement => {
  const theme = useTheme();
  return (
    <Flex>
      <Block className="productPanel">
        <h4 className="bodyType">{bodyType}</h4>
        <div className="subHeading">
          <h4 className="modelname">{modelName}</h4>
          <h4 className="modelType">{modelType}</h4>
        </div>
        {/*               
              "id": "xc90-recharge",
      "modelName": "XC90 Recharge", 
      "bodyType": "suv",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/xc90_recharge.jpg" */}

        <img className="productPanel_image" alt={modelName} src={imageUrl} />
        <div className="">
          <a title="Learn" href={`/learn/${id}`}>
            Learn
          </a>
          <a title="Shop" href={`/shop/${id}`}>
            Shop
          </a>
        </div>
      </Block>
    </Flex>
  );
};

export default ProductItem;
