import React from "react";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker, useTheme } from "vcc-ui";
import Home from "./home";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Home />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
