import React, { ReactNode } from "react";
import { StyleSheet, TouchableHighlight, Text, View, GestureResponderEvent } from "react-native";


interface IconLabelProps{
    icon: ReactNode,
    onPress?: (event: GestureResponderEvent) => void,
    text: string
}

export default function IconLabel(props:IconLabelProps) {
	return (
		<TouchableHighlight
			activeOpacity={0.6}
			underlayColor="#ccc"
			onPress={props.onPress}
		>
			<View style={styles.container}>
				<View>
					{props.icon}
				</View>
				<View style={styles.right}>
					<Text style={styles.text}>{props.text}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 60,
		alignItems: "center",
		paddingLeft: 30,
		flexDirection: "row",
	},

	right: {
		height: "100%",
		justifyContent: "center",
		marginLeft: 20,
	},
	text: {
		fontSize: 16,
	},
});
