import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuSlice, { makeVisible } from "./reducers/MenuSlice";

const store = configureStore({
	reducer: {
		menu: menuSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		}),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
