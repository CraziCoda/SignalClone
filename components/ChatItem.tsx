import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	GestureResponderEvent,
	TouchableWithoutFeedback,
} from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useAppDispatch } from "../redux/hooks";
import { makeDrawerVisible } from "../redux/reducers/DrawerSlice";

interface ChatItemProps {
	onPress?: (event: GestureResponderEvent) => void;
	type: "single" | "group";
	name: string;
}

export default function ChatItem(props: ChatItemProps) {
	const dispatch = useAppDispatch();

	return (
		<TouchableHighlight
			activeOpacity={1.0}
			underlayColor="#ddd"
			onPress={props.onPress}
			style={styles.touch}
		>
			<View style={styles.container}>
				<TouchableHighlight
					activeOpacity={0.5}
					underlayColor="#ddd"
					onPress={() => {
						dispatch(makeDrawerVisible({}));
					}}
					style={styles.profile}
				>
					{props.type == "single" ? <ProfileIcon /> : <GroupIcon />}
				</TouchableHighlight>

				<View style={styles.main}>
					<Text style={styles.name}>{props.name}</Text>
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

const GroupIcon = () => {
	return (
		<View style={styles.profileIcon}>
			<IonIcons name="people-outline" size={24} style={styles.profileT} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		width: "95%",
		height: 80,
		paddingRight: 10,
	},
	touch: {
		borderRadius: 30,
	},

	profile: {
		width: "15%",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5,
		borderRadius: 50,
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
	profileT: {
		fontSize: 25,
		fontWeight: "500",
		color: "#a00",
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
