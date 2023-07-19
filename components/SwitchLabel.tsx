import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Switch,
	TouchableHighlight,
} from "react-native";

interface SwitchLabelProps {
	name: string;
}

export default function SwitchLabel(props: SwitchLabelProps) {
	const [isOn, setOn] = useState(false);

	const changeState = () => {
		setOn(!isOn);
	};

	return (
		<TouchableHighlight underlayColor={"#ddd"} onPress={changeState}>
			<View style={styles.container}>
				<Text style={{ fontSize: 16 }}>{props.name}</Text>
				<Switch
					trackColor={{ false: "#ddda", true: "blue" }}
					thumbColor={isOn ? "#fff" : "#000a"}
					value={isOn}
					onChange={changeState}
				/>
			</View>
		</TouchableHighlight>
	);
}

interface SwitchDoubleLabelProps {
	label: string;
	value: string;
}

export function SwitchDoubleLabel(props: SwitchDoubleLabelProps) {
	const [isOn, setOn] = useState(false);

	const changeState = () => {
		setOn(!isOn);
	};

	return (
		<TouchableHighlight underlayColor={"#ddd"} onPress={changeState}>
			<View style={styles.container}>
				<View style={{paddingVertical: 10,}}>
					<Text style={{ fontSize: 16 }}>{props.label}</Text>
					<Text style={{ fontSize: 14, color: "#888", maxWidth: "90%" }}>{props.value}</Text>
				</View>
				<Switch
					trackColor={{ false: "#ddda", true: "blue" }}
					thumbColor={isOn ? "#fff" : "#000a"}
					value={isOn}
					onChange={changeState}
				/>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: 60,
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 20,
		justifyContent: "space-between",
	},
});
