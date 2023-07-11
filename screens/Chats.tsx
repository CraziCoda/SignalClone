import { View, Text, StyleSheet } from "react-native";
import ChatItem from "../components/ChatItem";

export default function Chats() {
	return (
		<View style={styles.main}>
			<View>
				<ChatItem onPress={() => {}} />
			</View>

			<View style={styles.started}>
				<Text style={styles.startedT}>Get Started</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		height: "100%",
	},
	started: {
		alignSelf: "flex-start",
	},

	startedT: {
		marginLeft: 20,
		fontSize: 20,
        fontWeight: 'bold'
	},
});
