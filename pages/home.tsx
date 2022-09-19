import { Block } from "vcc-ui";
import { useTheme, View } from "vcc-ui";

const Home = () => {
  const theme = useTheme();
  return (
    <View
      extend={{
        background: theme.color.background.primary,
        color: theme.color.foreground.alert,
      }}
    >
      Hello themed component
    </View>
  );
};

export default Home;
