import React from "react";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker, useTheme } from "vcc-ui";
import Home from "./home";
import Context from "../src/context/Context";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Context>
            <Home />
          </Context>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
