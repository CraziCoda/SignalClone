import {
	GestureResponderEvent,
	StyleSheet,
	TouchableHighlight,
	View,
	Text,
} from "react-native";

type item = { name: string; onPressed: (event: GestureResponderEvent) => void };

interface MenuPopUpProps {
	items: item[];
	visible: boolean;
}

export default function MenuPopUp({ items, visible }: MenuPopUpProps) {
	return (
		<View style={[styles.container, { display: visible ? "flex" : "none" }]}>
			{items.map((el, index) => (
				<TouchableHighlight
					style={{
						height: 40,
						justifyContent: "center",
						paddingLeft: 10,
					}}
					key={index}
					onPress={el.onPressed}
					underlayColor={"#ddd"}
				>
					<Text>{el.name}</Text>
				</TouchableHighlight>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minWidth: 200,
		minHeight: 100,
		zIndex: 100,
		position: "absolute",
		backgroundColor: "#fff",
		right: 20,
		top: -30,
		borderRadius: 10,
		paddingTop: 5,
	},
});
