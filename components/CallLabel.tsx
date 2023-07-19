import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "../redux/hooks";
import { makeDrawerVisible } from "../redux/reducers/DrawerSlice";

interface CallLabelProps {
	name: string;
	type: string;
	date: string;
}

export default function CallLabel({ name, type, date }: CallLabelProps) {
	const dispatch = useAppDispatch();

	const name_split = name.split(" ");
	const initials =
		name_split[0][0] + (name_split.length > 1 ? name_split[1][0] : "");

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<TouchableWithoutFeedback
					onPress={() => {
						dispatch(makeDrawerVisible({}));
					}}
				>
					<View style={styles.contact}>
						<Text style={{ color: "#666", fontSize: 20, fontWeight: "500" }}>
							{initials}
						</Text>
					</View>
				</TouchableWithoutFeedback>

				<View>
					<Text style={{ marginLeft: 20 }}>{name}</Text>
					<View
						style={{
							flexDirection: "row",
							marginLeft: 10,
							alignItems: "flex-end",
						}}
					>
						<Feather name="arrow-up-right" size={16} color="black" />
						<Text style={{ marginLeft: 10 }}>
							{type} · {date}
						</Text>
					</View>
				</View>
			</View>

			<Ionicons name="call-outline" size={24} color="black" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		alignItems: "center",
		marginVertical: 15,
	},
	contact: {
		backgroundColor: "lightgrey",
		height: 43,
		width: 43,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
