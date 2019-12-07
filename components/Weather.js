import React from "react";
import { Text } from "native-base";
import { View, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { weatherConditions } from "../utils/WeatherConditions";

const Weather = ({
  weather,
  temperature,
  tempMin,
  tempMax,
  windSpeed,
  humidity
}) => {
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <StatusBar barStyle="dark" backgroundColor="#6a51ae" />
      <View style={styles.headerContainer}>
        <View style={styles.nowContainer}>
          <Text style={styles.headerText}>Today's Weather</Text>
          <View style={styles.tempContainer}>
            <Ionicons
              style={styles.icon}
              size={72}
              name={weatherConditions[weather].icon}
              color={"#fff"}
            />
            <Text style={styles.spacer}>{"    "}</Text>
            <Text style={styles.tempText}>{temperature.toFixed(0)}˚</Text>
          </View>
        </View>
      </View>
      <View style={styles.HLContainer}>
        <Text style={styles.tempMaxText}>High: {tempMax.toFixed(0)}˚</Text>
        <Text style={styles.tempMinText}>Low: {tempMin.toFixed(0)}˚</Text>
        <Text style={styles.windSpeedText}>
          Wind Speed: {windSpeed.toFixed(0)} mph
        </Text>
        <Text style={styles.humidityText}>
          Humidity: {humidity.toFixed(0)}%
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  spacer: {
    fontSize: 25
  },
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20
  },
  headerText: {
    fontSize: 40,
    color: "#fff"
  },
  icon: {
    alignSelf: "center"
  },
  tempContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
    padding: 10
  },
  HLContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  tempText: {
    fontSize: 40,
    color: "#fff"
  },
  bodyContainer: {
    flex: 1.75,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50
  },
  title: {
    fontSize: 40,
    color: "#fff"
  },
  subtitle: {
    fontSize: 18,
    color: "#fff"
  },
  tempMinText: {
    fontSize: 16,
    color: "#fff"
  },
  tempMaxText: {
    fontSize: 16,
    color: "#fff"
  },
  windSpeedText: {
    fontSize: 16,
    color: "#fff"
  },
  humidityText: {
    fontSize: 16,
    color: "#fff"
  }
});

export default Weather;
