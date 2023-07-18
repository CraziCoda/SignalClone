import { View, Text, StyleSheet, ScrollView } from "react-native";
import ChatItem from "../components/ChatItem";
import Card from "../components/Card";
import IonIcons from "@expo/vector-icons/Ionicons";
import IconButton from "../components/IconButton";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MenuPopUp from "../components/MenuPopUp";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";

export default function Chats() {
	const navigation = useNavigation();
	const [menuVisible, setMenuVisiblity] = useState(false);

	return (
		<TouchableWithoutFeedback>
			<View style={styles.main}>
				<View>
					{/* @ts-ignore */}
					<ChatItem onPress={() => navigation.navigate("Messages")} />
				</View>

				<View style={[{ justifyContent: "flex-end", width: "97%" }]}>
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
			</View>
		</TouchableWithoutFeedback>
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
		alignSelf: "flex-end",
	},
});
