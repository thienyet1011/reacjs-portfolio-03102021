import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import GlobalStyles from "./styles/global";
import Typography from "./styles/fonts";

ReactDOM.render(
    <>
      <GlobalStyles />
      <Typography />
      <App />
    </>,
    document.getElementById("root"),
);
