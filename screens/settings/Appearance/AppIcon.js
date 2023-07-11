import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function AppIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.Textt}>
        {" "}
        Select an app icon and name, which will be visible on your phone's home
        screen and app drawer. Notifications will always display and default
        Signal icon and name.<Text style={styles.Text}>Learn more</Text>
      </Text>

      <View style={styles.imageViews}>
        <View style={styles.imageRow}>
          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />

          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />
          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />

          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />
        </View>

        <View style={styles.imageRow}>
          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />

          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />
          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />

          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />
        </View>


        <View style={styles.imageRow}>
          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />

          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />
          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />

          <Image
            style={styles.signal}
            styles={styles.signal}
            source={require("../../../assets/signal.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 50,
  },
  Text: {
    color: "blue",
  },
  Textt: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  signal: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  imageViews: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  imageRow: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  }
});
