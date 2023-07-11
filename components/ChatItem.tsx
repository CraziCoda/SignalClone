import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	GestureResponderEvent,
} from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";

interface ChatItemProps {
	onPress?: (event: GestureResponderEvent) => void;
}

export default function ChatItem(props: ChatItemProps) {
	return (
		<TouchableHighlight
			activeOpacity={1.0}
			underlayColor="#ddd"
			onPress={props.onPress}
			style={styles.touch}
		>
			<View style={styles.container}>
				<View style={styles.profile}>
					<ProfileIcon />
				</View>
				<View style={styles.main}>
					<Text style={styles.name}>Ann CS</Text>
					<Text style={styles.msg}>Hello world</Text>
				</View>
				<View style={styles.info}>
					<Text>Now</Text>
					<IonIcons name="checkmark-circle-outline" />
				</View>
			</View>
		</TouchableHighlight>
	);
}

const ProfileIcon = () => {
	return (
		<View style={styles.profileIcon}>
			<Text style={styles.profileText}>AC</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		width: "95%",
		height: 80,
        paddingRight: 10
	},
	touch: {
		borderRadius: 30,
	},

	profile: {
		width: "15%",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5,
	},
	profileIcon: {
		backgroundColor: "#faa",
		width: 50,
		height: 50,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	profileText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	info: {
		width: "10%",
		justifyContent: "space-around",
		alignItems: "center",
		height: "50%",
	},
	main: {
		width: "70%",
		marginLeft: 15,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		height: "60%",
	},
	name: {
		fontSize: 18,
	},
	msg: {
		fontSize: 12,
	},
});
