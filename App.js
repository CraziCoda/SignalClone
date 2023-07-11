import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/Setting";
import Chats from "./screens/Chats";
import Calls from "./screens/Calls";
import Stories from "./screens/Stories";
import IonIcons from "@expo/vector-icons/Ionicons";
import EntypoIcons from "@expo/vector-icons/Entypo";
import Header from "./components/Header";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Settings />
		</SafeAreaView>
		// <NavigationContainer>
		// 	<Tab.Navigator
		// 		screenOptions={({ route }) => ({
		// 			tabBarIcon: ({ focused, color, size }) => {
		// 				let iconName;

		// 				if (route.name == "Chats") {
		// 					iconName = !focused ? "chatbubble-outline" : "chatbubble-sharp";
		// 				} else if (route.name == "Calls") {
		// 					iconName = !focused ? "call-outline" : "call-sharp";
		// 				} else if (route.name == "Stories") {
		// 					iconName = !focused ? "copy-outline" : "copy";
		// 				}

		// 				return <IonIcons name={iconName} size={size} color={color} />;
		// 			},
		// 			tabBarActiveTintColor: "black",
		// 			tabBarStyle: styles.tabBar,
		// 			tabBarItemStyle: styles.tabBarItem,
		// 			tabBarLabelStyle: styles.tabBarLabel,
		// 			tabBarIconStyle: styles.tabBarIcon,
		// 			header: () => <Header />,
		// 		})}
		// 	>
		// 		<Tab.Screen name="Chats" component={Chats} />
		// 		<Tab.Screen name="Calls" component={Calls} />
		// 		<Tab.Screen name="Stories" component={Stories} />
		// 	</Tab.Navigator>
		// </NavigationContainer>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	tabBar: {
		height: 80,
		backgroundColor: "#efefff",
	},

	tabBarItem: {},
	tabBarIcon: {
		marginTop: 10,
	},
	tabBarLabel: {
		marginBottom: 10,
		color: "black",
		fontSize: 12,
	},
});
