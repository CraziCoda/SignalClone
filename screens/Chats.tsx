import { View, Text, StyleSheet } from "react-native";
import ChatItem from "../components/ChatItem";

export default function Chats() {
	return (
		<View style={styles.main}>
			<ChatItem />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
        flexDirection: 'column',
		alignItems: "center",
	},
});
