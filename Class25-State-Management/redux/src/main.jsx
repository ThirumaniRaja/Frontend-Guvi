import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Now every component can access the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);