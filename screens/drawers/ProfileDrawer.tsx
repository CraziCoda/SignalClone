import {
	Dimensions,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Text,
} from "react-native";
import IconButton from "../../components/IconButton";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import IconLabel from "../../components/IconLabel";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { makeDrawerInvisible } from "../../redux/reducers/DrawerSlice";
import { useNavigation } from "@react-navigation/native";

export default function ProfileDrawer() {
	const drawerVisible = useAppSelector((state) => state.drawer.visible);
	const dispatch = useAppDispatch();

	const navigation = useNavigation();

	return (
		<TouchableWithoutFeedback
			style={[styles.overlay]}
			onPress={() => {
				dispatch(makeDrawerInvisible({}));
			}}
		>
			<View
				style={[styles.overlay, { display: drawerVisible ? "flex" : "none" }]}
			>
				<View style={styles.container}>
					<View style={styles.profileIcon}>
						<Text style={styles.profileText}>AC</Text>
					</View>

					<Text style={{ fontSize: 24, marginTop: 10 }}>Ann CS</Text>
					<Text style={{ marginTop: 10, marginBottom: 10 }}>
						+233 55 015 3933
					</Text>

					<View
						style={{
							flexDirection: "row",
							width: 300,
							justifyContent: "space-between",
						}}
					>
						<View style={{ alignItems: "center" }}>
							<IconButton
								bgColor={"#ddf"}
								onPress={() => {
									dispatch(makeDrawerInvisible({}));
									navigation.navigate("Messages" as never);
								}}
							>
								<Ionicons name="chatbubble-outline" size={24} color="black" />
							</IconButton>
							<Text>Message</Text>
						</View>

						<View style={{ alignItems: "center" }}>
							<IconButton bgColor={"#ddf"} onPress={() => {}}>
								<Ionicons name="videocam-outline" size={24} color="black" />
							</IconButton>
							<Text>Video</Text>
						</View>

						<View style={{ alignItems: "center" }}>
							<IconButton bgColor={"#ddf"} onPress={() => {}}>
								<Ionicons name="call-outline" size={24} color="black" />
							</IconButton>
							<Text>Audio</Text>
						</View>
					</View>

					<View
						style={{
							height: 0,
							borderColor: "#ddd",
							borderWidth: 0.5,
							width: "100%",
							marginVertical: 25,
						}}
					/>
					<View style={{ width: "100%" }}>
						<IconLabel
							icon={<Entypo name="block" size={24} color="black" />}
							text="Block"
							onPress={() => {}}
						/>
						<IconLabel
							icon={<AntDesign name="addusergroup" size={24} color="black" />}
							text="Add to Group"
							onPress={() => {}}
						/>
						<IconLabel
							icon={<AntDesign name="plus" size={24} color="black" />}
							text="Add to Contacts"
							onPress={() => {}}
						/>

						<IconLabel
							icon={
								<Ionicons
									name="shield-checkmark-outline"
									size={24}
									color="black"
								/>
							}
							text="View safety number"
							onPress={() => {}}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "#888a",
		flexDirection: "column-reverse",
		position: "absolute",
		bottom: 0,
		height,
		width,
	},
	container: {
		backgroundColor: "#fff",
		height: (height * 2) / 3,
		borderTopEndRadius: 30,
		borderTopStartRadius: 30,
		alignItems: "center",
		paddingTop: 25,
	},
	profileIcon: {
		backgroundColor: "#faa",
		width: 80,
		height: 80,
		borderRadius: 45,
		justifyContent: "center",
		alignItems: "center",
	},
	profileText: {
		fontSize: 30,
		fontWeight: "400",
	},
});
