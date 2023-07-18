import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Switch,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import React, { useState} from 'react';

export default function Account() {
	// const [isEnabled, setIsEnabled] = useState(true);
	// const toggleSwitch = () =>
	// setIsEnabled(previousState => !previousState);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "whitesmoke",
			}}
		>
			{/* <View
				style={{
					marginHorizontal: 12,
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<TouchableOpacity
					onPress={() => NavigationPreloadManager.goBack()}
					style={{
						position: "absolute",
						left: 0,
					}}
				>
					<AntDesign name="left" size={15} color="silver" />
				</TouchableOpacity>

				<Text style={{ fontWeight: "bold", fontSize: 20 }}>Accounts</Text>
			</View> */}

			<ScrollView style={{ marginHorizontal: 12 }}>
				<View
					style={{
						flexDirection: "column",
						marginBottom: 15,
					}}
				></View>
				<Text
					style={{
						fontWeight: "bold",
						marginVertical: 25,
						marginHorizontal: 20,
						fontSize: 18,
					}}
				>
					Signal PIN
				</Text>
				<View
					style={{
						height: 50,
						width: "90%",
						borderColor: "white",
						backgroundColor: "white",
						borderWidth: 0.5,
						borderRadius: 4,
						marginVertical: 0,
						marginHorizontal: 15,
						justifyContent: "center",
						paddingLeft: 8,
					}}
				>
					<Text
						style={{ fontSize: 18, marginHorizontal: 10, marginVertical: 12 }}
					>
						Change your PIN{" "}
					</Text>
					{/* <Text style = {{fontSize: 18, marginHorizontal: 10, marginVertical: 12}}>PIN Reminders</Text> */}

					<TouchableOpacity
						// onPress = {()=>NavigationPreloadManager.goBack()}
						style={{
							position: "absolute",
							right: 5,
						}}
					>
						<AntDesign name="right" size={12} color="silver" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						height: 50,
						width: "90%",
						borderColor: "white",
						backgroundColor: "white",
						borderWidth: 0.5,
						borderRadius: 4,
						marginVertical: 0,
						marginHorizontal: 15,
						justifyContent: "center",
						paddingLeft: 8,
					}}
				>
					<Text
						style={{ fontSize: 18, marginHorizontal: 10, marginVertical: 12 }}
					>
						PIN Reminders
					</Text>
					{/* <Switch>
                trackColor = {{false: 'grey', true: 'green'}}
                thumbColor = {isEnabled ? 'white' : 'grey'}
                onValueChange = {toggleSwitch}
                value={isEnabled}
               </Switch> */}
				</View>

				<Text
					style={{
						marginHorizontal: 25,
						marginVertical: 12,
						fontSize: 13,
						color: "dimgray",
					}}
				>
					<Text>
						PINs keep information stored with Signal encrypted so only you can
						access it.
					</Text>
					<Text>
						{" "}
						Your PIN cannot be recovered. Your profile, settings, and contacts
						will restore when you reinstall Signal.
					</Text>
					<Text style={{ color: "black" }}>Learn More</Text>
				</Text>

				<View
					style={{
						flexDirection: "column",
						marginBottom: 15,
					}}
				/>
				<Text
					style={{
						fontWeight: "bold",
						marginVertical: 25,
						marginHorizontal: 15,
						fontSize: 18,
					}}
				></Text>
				<View
					style={{
						height: 50,
						width: "90%",
						borderColor: "white",
						backgroundColor: "white",
						borderWidth: 0.5,
						borderRadius: 4,
						marginVertical: 0,
						marginHorizontal: 15,
						justifyContent: "center",
						paddingLeft: 8,
					}}
				>
					<Text style={{ fontSize: 18, marginHorizontal: 10 }}>
						Registration Lock
					</Text>
					{/* <Switch>
                trackColor = {{false: 'grey', true: 'green'}}
                thumbColor = {isEnabled ? 'white' : 'grey'}
                onValueChange = {toggleSwitch}
                value={isEnabled}
               </Switch>
                */}
				</View>
				<Text
					style={{
						marginHorizontal: 25,
						marginVertical: 12,
						fontSize: 13,
						color: "dimgray",
					}}
				>
					<Text>
						Require your Signal PIN to register your phone number again with
						Signal.
					</Text>
				</Text>

				<View
					style={{
						flexDirection: "column",
						marginBottom: 15,
					}}
				/>
				<Text
					style={{
						fontWeight: "bold",
						marginVertical: 0,
						marginHorizontal: 15,
						fontSize: 18,
					}}
				></Text>
				<View
					style={{
						height: 50,
						width: "90%",
						borderColor: "white",
						backgroundColor: "white",
						borderWidth: 0.5,
						borderRadius: 4,
						marginVertical: 0,
						marginHorizontal: 15,
						justifyContent: "center",
						paddingLeft: 8,
					}}
				>
					<Text style={{ fontSize: 18, marginHorizontal: 10 }}>
						Advanced PIN Settings
					</Text>

					<TouchableOpacity
						// onPress = {()=>NavigationPreloadManager.goBack()}
						style={{
							position: "absolute",
							right: 5,
						}}
					>
						<AntDesign name="right" size={12} color="silver" />
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: "column",
						marginBottom: 20,
					}}
				>
					<Text
						style={{
							fontWeight: "bold",
							marginVertical: 25,
							marginHorizontal: 20,
							fontSize: 18,
						}}
					>
						Account
					</Text>
					<View
						style={{
							height: 50,
							width: "90%",
							borderColor: "white",
							backgroundColor: "white",
							borderWidth: 0.5,
							borderRadius: 4,
							marginVertical: 0,
							marginHorizontal: 15,
							justifyContent: "center",
							paddingLeft: 8,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								marginHorizontal: 10,
								marginVertical: 12,
								borderBottomWidth: 1,
								borderBottomColor: "grey",
								alignItems: "flex-start",
							}}
						>
							Change Phone number{" "}
						</Text>
						{/* <Text style = {{fontSize: 18, marginHorizontal: 10, marginVertical: 12}}>Your Account Data</Text> */}
						{/* <Text style = {{fontSize: 18, marginHorizontal: 10, marginVertical: 12, fontColor: "red"}}>Delete Account</Text> */}

						<TouchableOpacity
							// onPress = {()=>NavigationPreloadManager.goBack()}
							style={{
								position: "absolute",
								right: 5,
							}}
						>
							<AntDesign name="right" size={12} color="silver" />
						</TouchableOpacity>
					</View>
					<View
						style={{
							height: 50,
							width: "90%",
							borderColor: "white",
							backgroundColor: "white",
							borderWidth: 0.5,
							borderRadius: 4,
							marginVertical: 0,
							marginHorizontal: 15,
							justifyContent: "center",
							paddingLeft: 8,
						}}
					>
						{/* <Text style = {{fontSize: 18, marginHorizontal: 10, marginVertical: 12, borderBottomWidth: 1,
  borderBottomColor: 'grey',
  alignItems: 'flex-start'}}>Change Phone number  </Text> */}
						<Text
							style={{ fontSize: 18, marginHorizontal: 10, marginVertical: 12 }}
						>
							Your Account Data
						</Text>
						{/* <Text style = {{fontSize: 18, marginHorizontal: 10, marginVertical: 12, fontColor: "red"}}>Delete Account</Text> */}

						<TouchableOpacity
							// onPress = {()=>NavigationPreloadManager.goBack()}
							style={{
								position: "absolute",
								right: 5,
							}}
						>
							<AntDesign name="right" size={12} color="silver" />
						</TouchableOpacity>
					</View>

					<View
						style={{
							height: 50,
							width: "90%",
							borderColor: "white",
							backgroundColor: "white",
							borderWidth: 0.5,
							borderRadius: 4,
							marginVertical: 0,
							marginHorizontal: 15,
							justifyContent: "center",
							paddingLeft: 8,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								marginHorizontal: 10,
								marginVertical: 12,
								color: "red",
							}}
						>
							Delete Account
						</Text>

						<TouchableOpacity
							// onPress = {()=>NavigationPreloadManager.goBack()}
							style={{
								position: "absolute",
								right: 5,
							}}
						>
							<AntDesign name="right" size={12} color="silver" />
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
