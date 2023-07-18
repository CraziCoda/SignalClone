import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import SwitchLabel from "../../components/SwitchLabel";
import { StyleSheet } from "react-native";

export default function Notifications() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 20 }}>
					Messages
				</Text>
				<SwitchLabel name="Notifications" />
				<DoubleLabel label="Customize" value="Change sound and vibrations" />
				<SwitchLabel name="In-chat sounds" />
				<DoubleLabel label="Repeat alerts" value="Never" />
				<DoubleLabel label="Show" value="Name and message" />

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
					Calls
				</Text>

				<SwitchLabel name="Notifications" />
				<DoubleLabel label="Show" value="Name and message" />
				<SwitchLabel name="Vibrate" />

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>

				<Text
					style={{
						fontWeight: "600",
						fontSize: 16,
						marginLeft: 20,
						marginBottom: 20,
					}}
				>
					Notification profiles
				</Text>

				<DoubleLabel
					label="Profile"
					value="Create a profile to receive notificatiobs only from preople and groups you choose"
				/>

				<View
					style={{
						height: 0,
						borderColor: "#ddd",
						borderWidth: 0.5,
						width: "100%",
						marginVertical: 25,
					}}
				/>
				<Text
					style={{
						fontWeight: "600",
						fontSize: 16,
						marginLeft: 20,
						marginBottom: 20,
					}}
				>
					Notify when...
				</Text>
				<SwitchLabel name="Contact joins Signal" />
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

const styles = StyleSheet.create({
	container: {
        marginTop: 10
    },
});
