import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GestureResponderEvent } from "react-native";

type item = { name: string; onPressed: (event: GestureResponderEvent) => void };

interface menuType {
	visible: boolean;
	items: item[];
}

const initialState: menuType = {
	visible: false,
	items: [],
};

const menuSlice = createSlice({
	name: "menu",
	initialState,

	reducers: {
		makeVisible: (state, { payload }: { payload: PayloadAction<item[]> }) => {
			state.visible = true;
			state.items = payload.payload;
		},
		makeInvincible: (state) => {
			state.visible = false;
		},
	},
});

export const { makeInvincible, makeVisible } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice;
