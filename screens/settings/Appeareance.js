import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function Appearance() {
	return (
		<View style={styles.container}>
			<Label sub="System default">Language</Label>
			<Label sub="Light">Theme</Label>
			<Label>Chat color & wallpaper</Label>
			<Label>App Icon</Label>
			<Label sub="Normal">Message font size</Label>
			<Label sub="Normal">Navigation bar size</Label>
		</View>
	);
}

function Label(props) {
	return (
		<TouchableHighlight
			activeOpacity={1.0}
			underlayColor={"#ddd"}
			onPress={() => {}}
		>
			<View style={styles.labelContainer}>
				<Text style={styles.labelMain}>{props.children}</Text>
				<Text style={styles.labelSub}>{props.sub}</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {},
	header: {
		height: 50,
	},
	labelContainer: {
		paddingLeft: 20,
		width: "100%",
		height: 60,
		paddingTop: 15,
		paddingBottom: 15,
	},
	labelMain: {
		fontSize: 18,
	},
	labelSub: {
		color: "#888",
	},
});
