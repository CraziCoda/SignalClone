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

export function SinglePersonHeader() {}

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
		height: 100,
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
