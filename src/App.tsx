import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "@/shared/theme";
import { GlobalStyle } from "@/shared/global";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);
