import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	Switch,
} from "react-native";
import React, { Component, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Privacy = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const [isEnabled1, setIsEnabled1] = useState(false);
	const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

	const [isEnabled2, setIsEnabled2] = useState(false);
	const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

	const [isEnabled3, setIsEnabled3] = useState(false);
	const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

	const [isEnabled4, setIsEnabled4] = useState(false);
	const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);

	const [isEnabled5, setIsEnabled5] = useState(false);
	const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);

	return (
		<View style={styles.MainPrivacy}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableOpacity onPress={() => console.log("Blocked tapped")}>
					<View style={styles.Blocked}>
						<Text style={styles.BlockedContent}>Blocked</Text>
						<Text style={styles.contactsNum}>0 contacts</Text>
					</View>
				</TouchableOpacity>

				<View style={styles.Messaging}>
					<Text style={{ fontWeight: "bold" }}>Messaging</Text>
					<TouchableOpacity
						style={styles.readReciepts}
						onPress={() => console.log("Read Receipts")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Read receipts</Text>
							<Text style={{ width: "90%" }}>
								If read receipts are disabled, you won't be able to see read
								receipts from others.
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#dcdcdc", true: "#1e90ff" }}
							thumbColor={isEnabled ? "#ffffff" : "#808080"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.appSecurity}
						onPress={() => console.log("Typing indicator")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Typing indicators</Text>
							<Text style={{ width: "90%" }}>
								If typing indicators are disabled, you won't be able to see
								typing indicators from others.
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#dcdcdc", true: "#1e90ff" }}
							thumbColor={isEnabled1 ? "#ffffff" : "#808080"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch1}
							value={isEnabled1}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.Disappearing_Messages}>
					<Text style={{ fontWeight: "bold" }}>Disappearing messages</Text>
					<TouchableOpacity
						style={styles.appSecurity}
						onPress={() => console.log("Default timer")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Default timer for new chat</Text>
							<Text style={{ width: "90%" }}>
								Set default disappearing message timer for all new chats started
								by you.
							</Text>
						</View>
						<View>
							<Text style={{ fontSize: 20 }}>off</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.AppSecurity}>
					<Text style={{ fontWeight: "bold" }}>App Security</Text>
					<TouchableOpacity
						style={styles.appSecurity}
						onPress={() => console.log("Screen Lock")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Screen Lock</Text>
							<Text style={{ width: "90%" }}>
								Lock Signal access with android screen lock or fingerprint
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#dcdcdc", true: "#1e90ff" }}
							thumbColor={isEnabled2 ? "#ffffff" : "#808080"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch2}
							value={isEnabled2}
						/>
					</TouchableOpacity>

					<View style={{ paddingBottom: 15, paddingTop: 15 }}>
						<Text>Screen lock inactivity timeout</Text>
						<Text>None</Text>
					</View>

					<TouchableOpacity
						style={styles.appSecurity}
						onPress={() => console.log("Screen security")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Screen Security</Text>
							<Text style={{ width: "90%" }}>
								Block screenshots in the recents lists and inside the app
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#dcdcdc", true: "#1e90ff" }}
							thumbColor={isEnabled3 ? "#ffffff" : "#808080"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch3}
							value={isEnabled3}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.appSecurity}
						onPress={() => console.log("incognito keyboard")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Incognito Keyboard</Text>
							<Text style={{ width: "90%" }}>
								Request keyboard to disable personalized learning
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#dcdcdc", true: "#1e90ff" }}
							thumbColor={isEnabled4 ? "#ffffff" : "#808080"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch4}
							value={isEnabled4}
						/>
					</TouchableOpacity>
					<View style={{ paddingBottom: 15, paddingTop: 15 }}>
						<Text>
							This setting is not guarantee and your keyboard may ignore it.
							Learn more
						</Text>
					</View>
				</View>
				<View style={styles.Disappearing_Messages}>
					<Text style={{ fontWeight: "bold" }}>Payments</Text>
					<TouchableOpacity
						style={styles.appSecurity}
						onPress={() => console.log("Payment Lock")}
					>
						<View style={styles.ScreenLock_content}>
							<Text style={{ fontSize: 15 }}>Payment lock</Text>
							<Text style={{ width: "90%" }}>
								Require Android screen lock or fingerprint to transfer funds
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#dcdcdc", true: "#1e90ff" }}
							thumbColor={isEnabled5 ? "#ffffff" : "#808080"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch5}
							value={isEnabled5}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.appSecurity}
					onPress={() => console.log("Advance")}
				>
					<View style={styles.ScreenLock_content}>
						<Text style={{ fontSize: 15 }}>Advance</Text>
						<Text style={{ width: "100%" }}>
							Signal messages and calls, always relay calls, and sealed sender
						</Text>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	AppSecurity: {
		paddingTop: 20,
		paddingBottom: 20,
		borderBottomWidth: 1,
	},
	appSecurity: {
		justifyContent: "space-between",
		flexDirection: "row",
		paddingTop: 10,
		paddingBottom: 10,
	},
	backButtonLogo: {
		paddingLeft: 10,
		backgroundColor: "red",
		height: 30,
		width: 30,
	},
	Blocked: {
		paddingTop: 20,
		paddingBottom: 20,
	},
	BlockedContent: {
		fontWeight: "bold",
	},
	contactsNum: {
		fontSize: 15,
	},
	Disappear: {
		justifyContent: "space-between",
		flexDirection: "row",
		paddingTop: 10,
		paddingBottom: 10,
	},
	Disappearing_Messages: {
		paddingTop: 20,

		paddingBottom: 20,
		borderBottomWidth: 1,
	},
	Disappearing_Messages_Content: {
		width: "85%",
		flexWrap: "wrap",
	},
	MainPrivacy: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		borderColor: "grey",
		paddingLeft: 10,
		paddingRight: 10,
	},

	Messaging: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingTop: 20,
		paddingBottom: 20,
	},
	PrivacyHeader: {
		width: "100%",
		flexDirection: "row",
	},
	readReciepts: {
		justifyContent: "space-between",
		flexDirection: "row",
		paddingTop: 10,
		paddingBottom: 10,
	},
	switchButton: {
		backgroundColor: "blue",
		height: 20,
		width: 30,
	},
	ScreenLock_content: {
		width: "85%",
		flexWrap: "wrap",
	},
	typingIndicators: {
		justifyContent: "space-between",
		flexDirection: "row",
		paddingTop: 10,
		paddingBottom: 10,
	},
});

export default Privacy;
