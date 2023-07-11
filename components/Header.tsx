import { View, Text, StyleSheet } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";

export default function Header() {
	return (
		<View style={styles.header}>
			<View style={styles.headerLeft}>
				<View style={styles.profileI}>
					<Text style={styles.profileT}>k</Text>
				</View>
				<Text style={styles.headerLeftText}>Signal</Text>
			</View>
			<View style={styles.headerRight}>
                <IonIcons name="search-outline" size={26}/>
                <IonIcons name="ellipsis-vertical-sharp" size={26} />
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
        justifyContent: 'space-between'
    }
});
