import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import App from "./App.jsx";
import Spinner from "./components/Spinner";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
