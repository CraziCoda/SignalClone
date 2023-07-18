import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DrawerType {
	visible: boolean;
}

const initialState: DrawerType = {
	visible: false,
};

const DrawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		makeDrawerVisible: (state, action) => {
			state.visible = true;
		},
		makeDrawerInvisible: (state, action) => {
			state.visible = false;
		},
	},
});

export const { makeDrawerInvisible, makeDrawerVisible } = DrawerSlice.actions;
export default DrawerSlice;
