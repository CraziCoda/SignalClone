import { View, StyleSheet, Text, Pressable } from "react-native";
import IconLabel from "../../components/IconLabel";
import { Ionicons } from '@expo/vector-icons';

export default function Donate() {
	return (
		<View style={styles.container}>
			<View style={styles.KillIcon}>
				<View style={styles.profileI}>
					<Text style={styles.profileT}>k</Text>
				</View>
			</View>
			<View style={styles.PoP}>
				<Text style={styles.PoPText}>Privacy over profit</Text>
				<Text style={{ textAlign: "center", marginTop: 0 }}>
					Private messaging, funded by you. No ads, no tracking, no compromise.
					Donate now to support Signal.{" "}
					<Text style={{ color: "blue" }}>Read more</Text>
				</Text>
			</View>
			<Pressable style={styles.DButton}>
				<Text style={{ color: "white" }}>Donate To Signal</Text>
			</Pressable>
            <View style={{height:0.5, borderColor:"#ddd", borderWidth:0.5, marginVertical: 10}}/>
            
            <View>
                <Text style={{fontWeight:"500", fontSize:15, marginLeft:20, marginTop:25}}>Other ways to give</Text>
            </View>

            <IconLabel icon={<Ionicons name="gift-outline" size={24} color="black" />} text="Donate for a Friend"/>
            
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	profileI: {
		height: 80,
		width: 80,
		backgroundColor: "#fcc",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	profileT: {
		fontSize: 30,
		fontWeight: "500",
		color: "#a00",
	},
	KillIcon: {
		marginTop: 50,
		alignItems: "center",
	},
	PoPText: {
		height: 30,
		marginBottom: 0,
		fontWeight: "500",
		fontSize: 20,
	},
	PoP: {
		alignItems: "center",
		flexDirection: "column",
		height: 100,
		fontSize: 40,
		alignContent: "center",
		paddingHorizontal: "10%",
		justifyContent: "center",
	},
	DButton: {
		backgroundColor: "#22f",
		paddingVertical: 12,
		paddingHorizontal: 10,
		alignItems: "center",
		width: 150,
		alignSelf: "center",
		borderRadius: 20,
		marginTop: 10,
        marginBottom: 20
	},
});
