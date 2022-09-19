import { Block } from "vcc-ui";
import { View } from "vcc-ui";
import ProductSlider from "../src/components/productSlider";
import { CarState } from "../src/context/Context";

const Home = () => {
  const {
    state: { carList },
  } = CarState();
  return (
    <View className="container">
      <ProductSlider />
    </View>
  );
};

export default Home;
