import { createRoot } from "react-dom/client";
// import "./index.css";
import { Provider as ChakraProvider } from "../src/components/ui/provider.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./fonts.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);
