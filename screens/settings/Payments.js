import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import icons from '../BetaP/assets/images/icons.png'
import coin from '../BetaP/assets/images/coin.png'
import wallet from '../BetaP/assets/images/wallet.png'
import bank from '../BetaP/assets/images/bank.png'
import beta from '../BetaP/assets/images/beta.png'

export default function Payments() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <AntDesign name="left" size={30} color="black" />
        </View>
        <Text style={styles.title}>Payments(Beta)</Text>
      </View>
      <ScrollView>
        <View style={styles.cont1}>
          <Text style={styles.subHeading}>Introducing Payments (Beta)</Text>

          <Image source={icons}
            style={styles.image}
            resizeMode='contain'
          />
          <Text style={styles.subtitle}>Use Signal to send and receive MobileCoin, a new privacy focused digital currency. Activate</Text>
          <View style={styles.buttons}>
            <View style={styles.button1}>
              <Button
                title="Active Payments"
                color='white'
                onPress={() => Alert.alert('Activate Payments')}
              />
            </View>
            <View style={styles.button2}>
              <Button
                title="Restore a Payments Account"
                color='blue'
                onPress={() => Alert.alert('Restore a Payments Account')}
              /></View>
          </View>
        </View>
        <View style={styles.cont2}>
          <View style={styles.leftAlign}>
            <Text style={styles.subHeading2}>About MobileCoin</Text>
            <Text style={styles.subTitle2}>MobileCoin is a new privacy focused on digital currency.</Text>
            <Text style={styles.link}>Learn More</Text>
          </View>
          <Image source={coin}
            style={styles.image2}
            resizeMode='contain'
          />
          <AntDesign name="closecircleo" size={20} color="white" />
        </View>
        <View style={styles.cont2}>
          <View style={styles.leftAlign}>
            <Text style={styles.subHeading2}>Adding Funds</Text>
            <Text style={styles.subTitle2}>You can add funds for use in Signal by sending MobileCoin to your wallet address.</Text>
            <Text style={styles.link}>Learn More</Text>
          </View>
          <Image source={beta}
            style={styles.image3}
            resizeMode='contain'
          />
          <AntDesign name="closecircleo" size={20} color="white" />
        </View>
        <View style={styles.cont2}>
          <View style={styles.leftAlign}>
            <Text style={styles.subHeading2}>Cashing out</Text>
            <Text style={styles.subTitle2}>You can cash out MobileCoin anytime on an exchange that supports MobileCoin.</Text>
            <Text style={styles.link}>Learn More</Text>
          </View>
          <Image source={bank}
            style={styles.image2}
            resizeMode='contain'
          />
          <AntDesign name="closecircleo" size={20} color="white" />
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginRight: 8
  },
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 22,
    marginLeft: 94,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',

  },
  icon: {
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 300,
    // backgroundColor: 'red',
    marginTop: 40,

  },
  button1: {
    backgroundColor: "#221CE2",
    borderRadius: 10,
    width: 329,
    height: 50,
    marginBottom: 5,
    marginHorizontal: 10,
    borderColor: 'darkgray',
    borderEndWidth: StyleSheet.hairlineWidth,

  },
  button2: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    width: 329,
    height: 50,
    marginBottom: 40,
    marginHorizontal: 10,
    borderColor: 'darkgray',
    borderEndWidth: StyleSheet.hairlineWidth,

  },
  buttons: {
    alignItems: 'center',
  },
  cont1: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginLeft: 27,
    marginTop: 20,
    borderRadius: 20
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: '#555555',
    paddingBottom: 20,
    paddingTop: 20

  },
  subHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    padding: 25,

  },
  leftAlign: {
    width: '50%'

  },
  cont2: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginLeft: 27,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  cont3: {},
  cont4: {},
  subHeading2: {
    color: "black",
    fontSize: 20,
    fontWeight: '600',
  },
  subTitle2: {

    fontSize: 15,
    fontWeight: '400',
    color: '#555555',
    paddingBottom: 10,
    paddingTop: 5
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 70

  },
  image3: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 70,
    resizeMode: 'repeat'

  },
  link: {
    color: '#446FFC',
    fontWeight: '600',
    fontSize: 15
  },
});
