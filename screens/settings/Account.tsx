import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import SwitchLabel, { SwitchDoubleLabel } from "../../components/SwitchLabel";
import { StyleSheet } from "react-native";

export default function Account() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 20 }}>
					Signal Pin
				</Text>

				<Label label="Change your pin" />

				<SwitchDoubleLabel
					label="PIN reminders"
					value="You will be asked less frequently over time"
				/>
				<SwitchDoubleLabel
					label="Registration Lock"
					value="Require your Signal PIN to register your phone number with Signal again"
				/>

				<Label label="Advance PIN settings" />

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
					Account
				</Text>

				<Label label="Change phone number" />

				<DoubleLabel
					label="Transfer"
					value="Transfer account to a new Android device"
				/>

				<Label label="Your account data" />

				<Label label="Delete account" isRed />
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
