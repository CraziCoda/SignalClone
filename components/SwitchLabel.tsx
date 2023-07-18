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

const styles = StyleSheet.create({
	container: {
		height: 60,
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 20,
		justifyContent: "space-between",
	},
});
