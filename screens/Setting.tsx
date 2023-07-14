import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from "react-native";

import IconLabel from "../components/IconLabel";
import MatCIcon from "@expo/vector-icons/MaterialCommunityIcons";
import MatIcon from "@expo/vector-icons/MaterialIcons";
import EntypoIcons from "@expo/vector-icons/Entypo";
import SimpleIcons from "@expo/vector-icons/SimpleLineIcons";
import FeatureIcons from "@expo/vector-icons/Feather";


export default function Settings({navigation}) {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.main}>
				<TouchableHighlight
					activeOpacity={1.0}
					underlayColor="#eee"
					onPress={() => {}}
				>
					<View style={styles.profile}>
						<View style={styles.profileI}>
							<Text style={styles.profileT}>k</Text>
						</View>
						<View>
							<Text style={styles.name}>Killcode</Text>
							<Text style={styles.num}>+233 55 837 1654</Text>
						</View>
					</View>
				</TouchableHighlight>

				<IconLabel
					text="Account"
					icon={<MatCIcon name="account-circle-outline" size={24} />}
					onPress={() => {}}
				/>
				<IconLabel
					text="Linked devices"
					icon={<MatIcon name="devices" size={24} />}
					onPress={() => {}}
				/>
				<IconLabel
					text="Donate to Signal"
					icon={<MatCIcon name="cards-heart-outline" size={24} />}
					onPress={() => {}}
				/>
				<View style={styles.hr}></View>

				<IconLabel
					text="Appearance"
					icon={<MatCIcon name="brightness-6" size={24} />}
					onPress={() => navigation.navigate("Appearance")}
				/>

				<IconLabel
					text="Chats"
					icon={<MatCIcon name="chat-outline" size={24} />}
					onPress={() => {}}
				/>
				<IconLabel
					text="Stories"
					icon={<EntypoIcons name="documents" size={24} />}
					onPress={() => {}}
				/>

				<IconLabel
					text="Notifications"
					icon={<SimpleIcons name="bell" size={24} />}
					onPress={() => {}}
				/>

				<IconLabel
					text="Privacy"
					icon={<SimpleIcons name="lock" size={24} />}
					onPress={() => {}}
				/>
				<IconLabel
					text="Data and storage"
					icon={<SimpleIcons name="pie-chart" size={24} />}
					onPress={() => {}}
				/>

				<View style={styles.hr}></View>

				<IconLabel
					text="Payments"
					icon={<FeatureIcons name="credit-card" size={24} />}
					onPress={() => {}}
				/>

				<View style={styles.hr}></View>

				<IconLabel
					text="Help"
					icon={<FeatureIcons name="help-circle" size={24} />}
					onPress={() => {}}
				/>

				<IconLabel
					text="Invite your friends"
					icon={<FeatureIcons name="mail" size={24} />}
					onPress={() => {}}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%'
	},
	header: {
		minHeight: 50,
		borderBottomColor: "#000",
		borderStyle: "solid",
	},
	main: {
		width: "100%",
		marginBottom: 0
	},
	profileI: {
		height: 60,
		width: 60,
		backgroundColor: "#fcc",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 20,
	},
	profileT: {
		fontSize: 25,
		fontWeight: "600",
		color: "#a00",
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 30,
		paddingVertical: 20,
	},
	name: {
		fontSize: 18,
	},
	num: {
		fontSize: 12,
	},

	hr: {
		width: "100%",
		borderColor: "#ddd",
		borderStyle: "solid",
		borderWidth: 0.5,
		marginVertical: 0,
	},
});
