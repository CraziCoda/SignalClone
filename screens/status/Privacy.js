import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SwitchLabel, { SwitchDoubleLabel } from "../../components/SwitchLabel";

export default function StatusPrivacy() {
	return (
		<View style={styles.container}>
			<View style={styles.header}></View>
			<Text style={styles.Texty}>
				Story updates automatically disappears after 24 hours. Choose who can
				view your story or create new stories with specific viewers or groups.{" "}
			</Text>
			<Text style={styles.Text}>Stories</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingTop: 30,
					paddingLeft: 10,
				}}
			>
				<Ionicons name="add-circle-outline" size={40} color="black" />
				<Text style={styles.Textt}> New Story</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingLeft: 10,
					paddingTop: 20,
				}}
			>
				<View
					style={{
						backgroundColor: "pink",
						height: 40,
						width: 40,
						borderRadius: 20,
						alignItems: "center",
						justifyContent: "center",
						marginRight: 10,
					}}
				>
					<Text style={styles.Texttt}>K</Text>
				</View>
				<View>
					<Text style={{ fontWeight: 600 }}> My Story</Text>
					<Text>Tap to choose your viewers </Text>
				</View>
			</View>
			<View>
				<SwitchDoubleLabel
					label="View receits"
					value="See and share when stories are viewed. If disabled,you won't see
            when others view your story."
				/>
			</View>
			<Text style={styles.offStories}>Turn off stories</Text>
			<Text style={styles.ifopt}>
				If you opt out of stories you will no longer be able to share or view
				stories
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	header: {
		height: 10,
	},
	Text: {
		paddingLeft: 10,
		paddingTop: 30,
		fontWeight: 700,
		fontSize: 18,
	},
	Textt: {
		fontWeight: 600,
		fontSize: 18,
	},
	Texttt: {
		fontWeight: 500,
		fontSize: 17,
	},
	Texty: {
		paddingLeft: 10,
	},
	Texxt: {
		paddingLeft: 10,
		paddingTop: 30,
		fontWeight: 500,
		fontSize: 18,
	},
	text: {
		paddingLeft: 10,
	},
	offStories: {
		paddingLeft: 10,
		paddingTop: 30,
		fontWeight: 500,
		fontSize: 17,
	},
	ifopt: {
		paddingLeft: 10,
	},
});
