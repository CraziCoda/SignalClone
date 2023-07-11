import { StyleSheet, View, Text, ColorValue } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import { ReactNode } from "react";

interface CardProps {
	icon: ReactNode;
	text: string;
	bgColor: ColorValue;
}

export default function Card(props: CardProps) {
	return (
		<View style={[styles.container, { backgroundColor: props.bgColor }]}>
			<IonIcons name="close-outline" size={24} style={styles.close} />
			{props.icon}
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 90,
		width: 150,
		backgroundColor: "#faa",
		borderRadius: 30,
		marginHorizontal: 10,
		alignItems: "center",
	},
	close: {
		position: "relative",
		left: 45,
		top: 10,
	},
	text: {
		alignSelf: "center",
		fontWeight: "500",
	},
});
