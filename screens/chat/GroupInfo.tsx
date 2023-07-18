import { ScrollView, StyleSheet, View, Text } from "react-native";
import {
	Ionicons,
	SimpleLineIcons,
	Octicons,
	AntDesign,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import IconButton from "../../components/IconButton";
import { useNavigation } from "@react-navigation/native";
import IconLabel from "../../components/IconLabel";
import { ReactNode } from "react";

export default function GroupInfo() {
	// const navigation = useNavigation();
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.profileI}>
					<Ionicons name="people-outline" size={24} style={styles.profileT} />
				</View>

				<Text style={{ fontSize: 24, marginTop: 10 }}>
					Group 4 Signal Clone
				</Text>

				<Text style={{ marginTop: 10, marginBottom: 10, color: "#000a" }}>
					Add group description...
				</Text>

				<View
					style={{
						flexDirection: "row",
						width: "100%",
						justifyContent: "space-evenly",
						marginTop: 20,
					}}
				>
					<View style={{ alignItems: "center" }}>
						<IconButton
							bgColor={"#ddf"}
							onPress={() => {
								// navigation.navigate("Messages" as never);
							}}
						>
							<Ionicons name="chatbubble-outline" size={24} color="black" />
						</IconButton>
						<Text>Message</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<IconButton bgColor={"#ddf"} onPress={() => {}}>
							<Ionicons name="videocam-outline" size={24} color="black" />
						</IconButton>
						<Text>Video</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<IconButton bgColor={"#ddf"} onPress={() => {}}>
							<SimpleLineIcons name="bell" size={24} color="black" />
						</IconButton>
						<Text>Mute</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<IconButton bgColor={"#ddf"} onPress={() => {}}>
							<Octicons name="search" size={24} color="black" />
						</IconButton>
						<Text>Search</Text>
					</View>
				</View>

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>
				<View style={{ width: "100%" }}>
					<IconLabel
						icon={
							<MaterialCommunityIcons
								name="timer-off-outline"
								size={24}
								color="black"
							/>
						}
						text="Disappearing messages"
						onPress={() => {}}
					/>

					<IconLabel
						icon={
							<Ionicons name="color-palette-outline" size={24} color="black" />
						}
						text="Chat color & wallpaper"
						onPress={() => {}}
					/>

					<IconLabel
						icon={
							<Ionicons name="volume-medium-outline" size={24} color="black" />
						}
						text="Sound & notifications"
						onPress={() => {}}
					/>
				</View>

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>
				<View style={{ width: "100%", paddingLeft: 30 }}>
					<Text style={{ fontWeight: "600" }}>3 members</Text>

					<Contact
						image={<Text style={styles.profileT2}>k</Text>}
						name="You"
						isAdmin
					/>
					<Contact
						image={<Text style={styles.profileT2}>AC</Text>}
						name="Ann CS"
						isAdmin
					/>

					<Contact
						image={<Text style={styles.profileT2}>S</Text>}
						name="Spiderman"
					/>
				</View>

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>

				<View style={{ width: "100%" }}>
					<IconLabel
						icon={<AntDesign name="link" size={24} color="black" />}
						text="Group Link"
						onPress={() => {}}
					/>

					<IconLabel
						icon={<AntDesign name="adduser" size={24} color="black" />}
						text="Requests and invites"
						onPress={() => {}}
					/>

					<IconLabel
						icon={
							<Ionicons name="lock-closed-outline" size={24} color="black" />
						}
						text="Permissions"
						onPress={() => {}}
					/>
				</View>

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>

				<View style={{ width: "100%" }}>
					<IconLabel
						icon={<Ionicons name="ios-exit-outline" size={24} color="red" />}
						text="Group Link"
						onPress={() => {}}
					/>

					<IconLabel
						icon={
							<MaterialCommunityIcons
								name="block-helper"
								size={24}
								color="red"
							/>
						}
						text="Requests and invites"
						onPress={() => {}}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

interface ContactProps {
	image: ReactNode;
	name: string;
	isAdmin?: boolean;
}

const Contact = ({ image, name, isAdmin }: ContactProps) => {
	return (
		<View
			style={{
				flexDirection: "row",
				marginTop: 20,
				alignItems: "center",
				justifyContent: "space-between",
				paddingRight: 20,
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<View style={styles.profileI2}>{image}</View>
				<Text style={{ marginLeft: 10 }}>{name}</Text>
			</View>
			<Text>{isAdmin ? "Admin" : ""}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		marginTop: 50,
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
		fontSize: 50,
		fontWeight: "500",
		color: "#a00",
	},

	profileI2: {
		height: 40,
		width: 40,
		backgroundColor: "#fcc",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	profileT2: {
		fontSize: 20,
		fontWeight: "500",
		color: "#a00",
	},
});
