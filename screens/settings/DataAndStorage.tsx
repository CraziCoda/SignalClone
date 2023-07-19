import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import SwitchLabel, { SwitchDoubleLabel } from "../../components/SwitchLabel";
import { StyleSheet } from "react-native";

export default function DataAndStorage() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<DoubleLabel label="Manage Storage" value="0 B" />

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>

				<Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 20 }}>
					Media auto-download
				</Text>

				<DoubleLabel label="When using mobile data" value="Images, Audio" />
				<DoubleLabel
					label="When using Wi-Fi"
					value="Images, Audio, Video, Documents"
				/>
				<DoubleLabel label="When roaming" value="None" />

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>

				<Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 20 }}>
					Media quality
				</Text>

				<DoubleLabel label="Sent media quality" value="Standard" />

				<Text style={{ marginLeft: 20 }}>
					Using less data may improve calls on bed networks
				</Text>

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>

				<Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 20 }}>
					Media quality
				</Text>

				<DoubleLabel label="Use proxy" value="Proxy" />
			</View>
		</ScrollView>
	);
}

const DoubleLabel = ({ label, value }: { label: string; value: string }) => {
	return (
		<TouchableHighlight underlayColor={"#ddd"} onPress={() => {}}>
			<View
				style={{ height: 70, justifyContent: "center", paddingHorizontal: 20 }}
			>
				<Text style={{ fontSize: 18 }}>{label}</Text>
				<Text style={{ color: "#777" }}>{value}</Text>
			</View>
		</TouchableHighlight>
	);
};

const Label = ({ label, isRed }: { label: string; isRed?: boolean }) => {
	return (
		<TouchableHighlight underlayColor={"#ddd"} onPress={() => {}}>
			<View
				style={{ height: 50, justifyContent: "center", paddingHorizontal: 20 }}
			>
				<Text style={{ fontSize: 18, color: isRed ? "red" : "black" }}>
					{label}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
});
