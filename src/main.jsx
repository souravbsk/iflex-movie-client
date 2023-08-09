import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import AuthProvider from "./Providers/AuthProvider";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';


let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router}></RouterProvider>
        </PersistGate>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
