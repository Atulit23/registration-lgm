import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import twReducer from "./reducer.js";

const rootReducer = combineReducers({
  msgs: twReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

// export default () => {
//     let store = createStore(persistedReducer, applyMiddleware(thunk))
//     let persistor = persistStore(store)
// };

export let persistor = persistStore(store);
