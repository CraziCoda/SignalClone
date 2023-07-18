import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	ColorValue,
	GestureResponderEvent,
} from "react-native";
import { ReactNode } from "react";

interface IconButtonProps {
	bgColor: ColorValue;
	children: ReactNode;
	onPress?: (event: GestureResponderEvent) => void;
}

export default function IconButton(props: IconButtonProps) {
	return (
		<TouchableHighlight
			activeOpacity={0.6}
			style={[styles.container, { backgroundColor: props.bgColor }]}
			underlayColor={"#ccf"}
			onPress={props.onPress}
		>
			<View>{props.children}</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		elevation: 10,
		margin: 10,
	},
	shadowProps: {
		shadowColor: "black",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});
