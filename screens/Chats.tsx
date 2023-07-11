import { View, Text, StyleSheet, ScrollView } from "react-native";
import ChatItem from "../components/ChatItem";
import Card from "../components/Card";
import IonIcons from "@expo/vector-icons/Ionicons";
import IconButton from "../components/IconButton";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Chats() {
	return (
		<View style={styles.main}>
			<View>
				<ChatItem onPress={() => {}} />
			</View>

			<View style={styles.actionBtns}>
				<IconButton bgColor={"#dde"}>
					<IonIcons name="camera-outline" size={28} />
				</IconButton>

				<IconButton bgColor={"#ddf"}>
					<SimpleLineIcons name="pencil" size={22} />
				</IconButton>
			</View>

			<View style={styles.started}>
				<Text style={styles.startedT}>Get started</Text>
				<ScrollView horizontal={true} style={styles.startedI}>
					<Card
						icon={<IonIcons name="ios-people-outline" size={28} />}
						text="New group"
						bgColor={"#feb"}
					/>
					<Card
						icon={<IonIcons name="mail-outline" size={28} />}
						text="Invite people"
						bgColor={"#9b9"}
					/>
					<Card
						icon={<IonIcons name="ios-person-circle-outline" size={28} />}
						text="Add a profile photo"
						bgColor={"#fdf"}
					/>

					<Card
						icon={<IonIcons name="color-palette-outline" size={28} />}
						text="Chat colors"
						bgColor={"#add"}
					/>
				</ScrollView>
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
		height: 140,
		alignSelf: "flex-start",
	},

	startedT: {
		marginLeft: 20,
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	startedI: {
		height: 100,
	},
	actionBtns: {
		position: "absolute",
		right: 10,
		bottom: 150,
	},
});
