import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Switch,
} from "react-native";
import React, { useState } from "react";

const ChatScreen = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.align}>
				<TouchableOpacity style={styles.button} onPress={toggleSwitch}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Generate link previews</Text>

							<Text style={styles.txt1} numberOfLines={2}>
								Retrieve link previews directly from websites{" "}
							</Text>
							<Text>for messages you send.</Text>
						</View>
						<View>
							<Switch
								style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
								trackColor={{ false: "#767577", true: "#81b0ff" }}
								thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
								onValueChange={toggleSwitch}
								value={isEnabled}
								ios_backgroundColor="#3e3e3e"
							/>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.align}>
				<TouchableOpacity style={styles.button} onPress={toggleSwitch}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Use address book photos</Text>

							<Text style={styles.txt1} numberOfLines={2}>
								Display contact photos from your address book if available.
							</Text>
						</View>
						<View>
							<Switch
								style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
								trackColor={{ false: "#767577", true: "#81b0ff" }}
								thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
								onValueChange={toggleSwitch}
								value={isEnabled}
								ios_backgroundColor="#3e3e3e"
							/>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.align}>
				<TouchableOpacity style={styles.button} onPress={toggleSwitch}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Keep Muted Chats Archived</Text>

							<Text style={styles.txt1} numberOfLines={3}>
								Muted chats that are archived{" "}
							</Text>
							<Text>will remain archived when a new </Text>
							<Text>message arrive.</Text>
						</View>
						<View>
							<Switch
								style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
								trackColor={{ false: "#767577", true: "#81b0ff" }}
								thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
								onValueChange={toggleSwitch}
								value={isEnabled}
								ios_backgroundColor="#3e3e3e"
							/>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.line}></View>

			<View style={styles.align}>
				<View style={styles.view}>
					<View>
						<Text style={styles.txt}> Keyboard</Text>
					</View>
					<View></View>
				</View>
			</View>
			<View style={styles.align}>
				<TouchableOpacity style={styles.button} onPress={toggleSwitch}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Use system emoji</Text>
						</View>
						<View>
							<Switch
								style={{
									transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
									paddingLeft: 160,
								}}
								trackColor={{ false: "#767577", true: "#81b0ff" }}
								thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
								onValueChange={toggleSwitch}
								value={isEnabled}
								ios_backgroundColor="#3e3e3e"
							/>
						</View>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.align}>
				<TouchableOpacity style={styles.button} onPress={toggleSwitch}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Enter key sends</Text>
						</View>
						<View>
							<Switch
								style={{
									transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
									paddingLeft: 165,
								}}
								trackColor={{ false: "#767577", true: "#81b0ff" }}
								thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
								onValueChange={toggleSwitch}
								value={isEnabled}
								ios_backgroundColor="#3e3e3e"
							/>
						</View>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.line}></View>

			<View style={styles.align}>
				<TouchableOpacity style={styles.button}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Backups</Text>
						</View>
						<View style={styles.h}></View>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.align}>
				<TouchableOpacity style={styles.button}>
					<View style={styles.view}>
						<View>
							<Text style={styles.txt}>Chat backups</Text>
							<Text>Disabled</Text>
						</View>
						<View style={styles.h}></View>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({
	h: {
		paddingBottom: 40,
	},
	view: {
		flexDirection: "row",
		alignItems: "center",
	},
	align: {
		paddingBottom: 25,
		padding: 10,
		backgroundColor: "white",
	},

	line: {
		height: 2,

		backgroundColor: "grey",
	},
	button: {
		backgroundColor: "white",
		padding: 5,
	},
	txt: {
		fontWeight: "800",
	},
	txt1: {
		fontWeight: "100",
		fontSize: 13,
	},
});
