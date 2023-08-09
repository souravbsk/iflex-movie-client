import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice/AuthSlice";
import SearchSlice from "./SearchSlice/SearchSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FavouriteSlice from "./FavouriteSlice/FavouriteSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  auth: AuthSlice,
  search: SearchSlice,
  favouriteCart:FavouriteSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
