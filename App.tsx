import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./screens/Setting";
import Chats from "./screens/Chats";
import Calls from "./screens/Calls";
import Stories from "./screens/Stories";
import IonIcons from "@expo/vector-icons/Ionicons";
import Header, { SinglePersonHeader } from "./components/Header";
import Appearance from "./screens/settings/Appeareance";
import Messages from "./screens/chat/Messages";
import MenuPopUp from "./components/MenuPopUp";
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import store from "./redux/store";
import { makeInvincible, makeVisible } from "./redux/reducers/MenuSlice";
import Help from "./screens/settings/Help";
import AppIcon from "./screens/settings/Appearance/AppIcon";
import Account from "./screens/settings/Account";
import Donate from "./screens/settings/Donate";
import ProfileDrawer from "./screens/drawers/ProfileDrawer";
import GroupInfo from "./screens/chat/GroupInfo";
import Notifications from "./screens/settings/Notifications";
import Privacy from "./screens/settings/Privacy";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name == "Chats") {
						iconName = !focused ? "chatbubble-outline" : "chatbubble-sharp";
					} else if (route.name == "Calls") {
						iconName = !focused ? "call-outline" : "call-sharp";
					} else if (route.name == "Stories") {
						iconName = !focused ? "copy-outline" : "copy";
					}

					return <IonIcons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "black",
				tabBarStyle: styles.tabBar,
				tabBarItemStyle: styles.tabBarItem,
				tabBarLabelStyle: styles.tabBarLabel,
				tabBarIconStyle: styles.tabBarIcon,
				header: ({ route }) => {
					if (route.name == "Chats")
						return (
							<Header
								onMenuPressed={() => {
									const items = [
										{ name: "New group", onPressed: () => {} },
										{ name: "Mark all read", onPressed: () => {} },
										{ name: "Invite friends", onPressed: () => {} },
										{ name: "Filter unread chats", onPressed: () => {} },
										{
											name: "Settings",
											onPressed: () => {
												dispatch(makeInvincible());
												navigation.navigate("Settings" as never);
											},
										},
										{ name: "Notification profile", onPressed: () => {} },
									];

									dispatch(makeVisible({ payload: items, type: "" }));
								}}
							/>
						);
					else if (route.name == "Calls")
						return (
							<Header
								onMenuPressed={() => {
									const items = [
										{ name: "Clear call history", onPressed: () => {} },
										{ name: "Filter missed calls", onPressed: () => {} },
										{
											name: "Settings",
											onPressed: () => {
												dispatch(makeInvincible());
												navigation.navigate("Settings" as never);
											},
										},
										{ name: "Notification Profile", onPressed: () => {} },
									];

									dispatch(makeVisible({ payload: items, type: "" }));
								}}
							/>
						);
					else if (route.name == "Stories")
						return (
							<Header
								onMenuPressed={() => {
									const items = [
										{ name: "Story privacy", onPressed: () => {} },
									];
									dispatch(makeVisible({ payload: items, type: "" }));
								}}
							/>
						);
				},
			})}
		>
			<Tab.Screen name="Chats" component={Chats} />
			<Tab.Screen name="Calls" component={Calls} />
			<Tab.Screen name="Stories" component={Stories} />
		</Tab.Navigator>
	);
};

export function All() {
	const menuItems = useAppSelector((state) => state.menu.items);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={Main}
					options={{ headerShown: false }}
				/>

				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="Appearance" component={Appearance} />
				<Stack.Screen name="AppIcon" component={AppIcon} />
				<Stack.Screen name="GroupInfo" component={GroupInfo} />
				<Stack.Screen name="Notifications" component={Notifications} />
				<Stack.Screen name="Privacy" component={Privacy} />
				<Stack.Screen name="Account" component={Account} />
				<Stack.Screen name="Donate" component={Donate} />
				<Stack.Screen name="Help" component={Help} />
				<Stack.Screen
					name="Messages"
					component={Messages}
					options={{ header: () => <SinglePersonHeader /> }}
				/>
			</Stack.Navigator>

			<MenuPopUp items={menuItems} />
			<ProfileDrawer />
		</NavigationContainer>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<All />
		</Provider>
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
