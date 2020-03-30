import React from "react";
import {
  Linking,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/Weather-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Weather</Text>
        </View>
        <TouchableOpacity onPress={this._handlePressTestFlight}>
          <View style={styles.appStoreButton}>
            <FontAwesome
              name="apple"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.appStoreText}>Get the TestFlight Beta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._handlePressGithub}>
          <View style={styles.githubButton}>
            <FontAwesome
              name="github"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.githubText}>Source Code</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  _handlePressTestFlight = () => {
    Linking.openURL();
  };

  _handlePressGithub = () => {
    Linking.openURL("https://github.com/Josh1794/myWeatherApp");
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 150,
    width: 150
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    marginBottom: 10
  },
  appStoreButton: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 20
  },
  githubButton: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  appStoreText: {
    color: "black",
    fontSize: 18
  },
  githubText: {
    color: "black",
    fontSize: 18
  }
});
