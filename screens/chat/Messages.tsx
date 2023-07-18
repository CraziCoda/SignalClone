import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";

export default function Messages() {
	return (
		<View style={styles.container}>
			{/* <View style={[{ height: 60 }]}></View> */}
			<ScrollView
				style={[
					{
						flexDirection: "column",
						height: "80%",
					},
				]}
			>
				<View style={styles.profile}>
					<View style={styles.profileI}>
						<Text style={styles.profileT}>AC</Text>
					</View>
					<Text
						style={[
							{
								fontWeight: "500",
								fontSize: 18,
								marginTop: 10,
							},
						]}
					>
						Ann CS
					</Text>
					<Text
						style={[
							{
								marginTop: 5,
								fontWeight: "300",
							},
						]}
					>
						+233 55 837 1654
					</Text>
				</View>

				<MeText />
				<MeText />

				<OtherText />
				<OtherText />
			</ScrollView>
			<View style={styles.actions}>
				<View style={styles.msgInput}>
					<SimpleLineIcons
						name="emotsmile"
						size={24}
						style={[{ position: "absolute", left: 12, zIndex: 4 }]}
					/>
					<TextInput
						style={styles.input}
						onChange={() => {}}
						placeholder="Enter a message"
					/>
					<View
						style={[
							{
								width: 60,
								flexDirection: "row",
								position: "absolute",
								justifyContent: "space-between",
								right: "5%",
							},
						]}
					>
						<SimpleLineIcons name="camera" size={24} />
						<SimpleLineIcons name="microphone" size={24} />
					</View>
				</View>
				<AntDesign name="pluscircle" size={34} color={"#00f"} />
			</View>
		</View>
	);
}

const MeText = () => {
	return (
		<View
			style={{
				paddingHorizontal: 10,
				paddingVertical: 5,
				backgroundColor: "#00f",
				alignSelf: "flex-end",
				alignItems: "center",
				borderRadius: 20,
				marginRight: 20,
				marginBottom: 10,
			}}
		>
			<Text style={{ color: "#fff" }}>Hello World</Text>
			<View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
				<Text
					style={{
						fontSize: 8,
						color: "#fff",
						marginRight: 4,
						alignSelf: "flex-end",
					}}
				>
					19:10
				</Text>
				<Ionicons name="checkmark-circle" color={"white"} />
			</View>
		</View>
	);
};

const OtherText = () => {
	return (
		<View
			style={{
				paddingHorizontal: 10,
				paddingVertical: 5,
				backgroundColor: "#ccd",
				alignSelf: "flex-start",
				alignItems: "center",
				borderRadius: 20,
				marginLeft: 20,
				marginBottom: 10,
			}}
		>
			<Text style={{ color: "#000" }}>Hello World</Text>
			<View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
				<Text
					style={{
						fontSize: 8,
						color: "#000",
						marginRight: 4,
						alignSelf: "flex-end",
					}}
				>
					19:10
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		justifyContent: "flex-end",
	},
	actions: {
		height: 50,
		borderStyle: "solid",
		borderTopWidth: 0.5,
		borderColor: "#aaa",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	input: {
		backgroundColor: "#dde",
		width: "100%",
		borderRadius: 20,
		height: 40,
		paddingLeft: 50,
		paddingRight: 100,
	},
	msgInput: {
		width: "85%",
		flexDirection: "row",
		alignItems: "center",
	},
	profile: {
		justifyContent: "center",
		alignItems: "center",
		height: 150,
	},
	profileI: {
		height: 80,
		width: 80,
		backgroundColor: "#fcc",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	profileT: {
		fontSize: 36,
		fontWeight: "500",
		color: "#a00",
	},
});

export function MsgHeader() {
	return <View></View>;
}
