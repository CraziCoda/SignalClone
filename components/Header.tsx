import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	GestureResponderEvent,
} from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { makeVisible } from "../redux/reducers/MenuSlice";

interface MainHeaderProps {
	onSearchInput?: (event: GestureResponderEvent) => void;
	onMenuPressed?: (event: GestureResponderEvent) => void;
}

export default function Header({
	onMenuPressed,
	onSearchInput,
}: MainHeaderProps) {
	const navigation = useNavigation();

	return (
		<View style={styles.header}>
			<View style={styles.headerLeft}>
				<TouchableWithoutFeedback
					onPress={() => navigation.navigate("Settings" as never)}
				>
					<View style={styles.profileI}>
						<Text style={styles.profileT}>k</Text>
					</View>
				</TouchableWithoutFeedback>
				<Text style={styles.headerLeftText}>Signal</Text>
			</View>
			<View style={styles.headerRight}>
				<IonIcons name="search-outline" size={26} />
				<IonIcons
					name="ellipsis-vertical-sharp"
					size={26}
					onPress={onMenuPressed}
				/>
			</View>
			<View style={{ display: "none" }}></View>
		</View>
	);
}

export function SinglePersonHeader() {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();

	return (
		<View style={styles2.container}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<AntDesign
					name="arrowleft"
					size={24}
					color="black"
					style={{ marginRight: 20 }}
					onPress={() => {
						navigation.goBack();
					}}
				/>

				<View style={styles2.profileI}>
					<Text style={styles2.profileT}>AC</Text>
				</View>
				<Text style={{ fontSize: 20, marginRight: 5 }}>Ann CS</Text>
				<Ionicons name="ios-person-circle-outline" size={14} color="black" />
			</View>

			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<AntDesign
					name="videocamera"
					size={24}
					color="black"
					style={{ marginHorizontal: 15 }}
				/>

				<Ionicons
					name="call-outline"
					size={24}
					color="black"
					style={{ marginHorizontal: 15 }}
				/>

				<MaterialCommunityIcons
					name="dots-vertical"
					size={24}
					color="black"
					onPress={() => {
						const items = [
							{ name: "Disappearing messages", onPressed: () => {} },
							{ name: "All media", onPressed: () => {} },
							{ name: "Chat settings", onPressed: () => {} },
							{ name: "Search", onPressed: () => {} },
							{ name: "Add to home screen", onPressed: () => {} },
							{ name: "Format text", onPressed: () => {} },
						];

						dispatch(makeVisible({ payload: items, type: "" }));
					}}
				/>
			</View>
		</View>
	);
}

export function GroupHeader() {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();

	return (
		<View style={styles2.container}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<AntDesign
					name="arrowleft"
					size={24}
					color="black"
					style={{ marginRight: 20 }}
					onPress={() => {
						navigation.goBack();
					}}
				/>

				<TouchableWithoutFeedback onPress={()=> navigation.navigate("GroupInfo" as never)}>
					<View style={styles2.profileI}>
						<IonIcons name="people-outline" size={24} style={styles.profileT} />
					</View>
				</TouchableWithoutFeedback>
				<View>
					<Text style={{ fontSize: 20, marginRight: 5, marginTop: 5 }}>
						Group 1 Signal Clone
					</Text>
					<Text>Ann CS, SpiderMan</Text>
				</View>
			</View>

			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<AntDesign
					name="videocamera"
					size={24}
					color="black"
					style={{ marginHorizontal: 15 }}
				/>

				<MaterialCommunityIcons
					name="dots-vertical"
					size={24}
					color="black"
					onPress={() => {
						const items = [
							{ name: "Disappearing messages", onPressed: () => {} },
							{ name: "All media", onPressed: () => {} },
							{ name: "Chat settings", onPressed: () => {} },
							{ name: "Search", onPressed: () => {} },
							{ name: "Add to home screen", onPressed: () => {} },
							{ name: "Mute notifications", onPressed: () => {} },
						];

						dispatch(makeVisible({ payload: items, type: "" }));
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
		height: 100,
		width: "100%",
	},
	headerLeft: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "30%",
	},
	headerLeftText: {
		fontSize: 22,
	},
	profileI: {
		height: 30,
		width: 30,
		backgroundColor: "#fcc",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 30,
	},
	profileT: {
		fontSize: 18,
		fontWeight: "400",
		color: "#a00",
	},
	headerRight: {
		flexDirection: "row",
		width: 70,
		justifyContent: "space-between",
	},
});

const styles2 = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		height: 100,
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: "space-between",
	},

	profileI: {
		height: 30,
		width: 30,
		backgroundColor: "#fcc",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 15,
	},
	profileT: {
		fontSize: 18,
		fontWeight: "400",
		color: "#a00",
	},
});
