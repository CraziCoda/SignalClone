import { useState } from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableHighlight,
	View,
	Text,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { makeInvincible } from "../redux/reducers/MenuSlice";

type item = { name: string; onPressed: (event: GestureResponderEvent) => void };

interface MenuPopUpProps {
	items: item[];
}

export default function MenuPopUp({ items }: MenuPopUpProps) {
	const isVisible= useAppSelector(state => state.menu.visible)
	const dispatch = useAppDispatch()

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				dispatch(makeInvincible())
			}}
		>
			<View style={[styles.overlay, { display: isVisible ? "flex" : "none" }]}>
				<View style={[styles.container]}>
					{items.map((el, index) => (
						<TouchableHighlight
							style={{
								height: 50,
								justifyContent: "center",
								paddingLeft: 10,
							}}
							key={index}
							onPress={el.onPressed}
							underlayColor={"#ddd"}
						>
							<Text>{el.name}</Text>
						</TouchableHighlight>
					))}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		minWidth: 200,
		zIndex: 100,
		position: "absolute",
		backgroundColor: "#fff",
		right: 15,
		top: 45,
		borderRadius: 10,
		paddingTop: 5,
		elevation: 10
	},
	overlay: {
		position: "absolute",
		backgroundColor: "transparent",
		flex: 1,
		width: width,
		height: height,
		top: 25,
		left: 0,
		zIndex: 100,
	},
});
