import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  Spinner,
  Tabs,
  Tab,
  Container,
  Header,
  TabHeading,
  Icon,
  Text
} from "native-base";
import MapView from "react-native-maps";
import { UrlTile } from "react-native-maps";

import { API_KEY } from "./secrets";
import Weather from "./components/Weather";

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
    tempMin: 0,
    tempMax: 0,
    latitude: null,
    longitude: null,
    windSpeed: 0,
    humidity: 0
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },

      error => {
        this.setState({
          error: "Error Getting Your Location"
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          tempMin: json.main.temp_min,
          tempMax: json.main.temp_max,
          weatherCondition: json.weather[0].main,
          isLoading: false,
          latitude: json.coord.lat,
          longitude: json.coord.lon,
          windSpeed: json.wind.speed,
          humidity: json.main.humidity

          //TEST DUMMY DATA
          // latitude: 40,
          // longitude: -74,
          // temperature: 30,
          // tempMin: 20,
          // tempMax: 40,
          // weatherCondition: "Snow"
          // windSpeed: 10,
          // humidity: 69
        });
      });
  }

  render() {
    const {
      isLoading,
      weatherCondition,
      temperature,
      tempMin,
      tempMax,
      windSpeed,
      humidity
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark" backgroundColor="#6a51ae" />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Spinner color="white" />
            <Text style={styles.loadingText}>Hold on a minute</Text>
          </View>
        ) : (
          <Container>
            <StatusBar barStyle="dark" backgroundColor="#6a51ae" />
            <Header style={styles.header} hasTabs />
            <Tabs>
              <Tab
                heading={
                  <TabHeading style={styles.header}>
                    <Icon name="ios-information-circle" />
                    <Text>Weather</Text>
                  </TabHeading>
                }
              >
                <Weather
                  weather={weatherCondition}
                  temperature={temperature}
                  tempMin={tempMin}
                  tempMax={tempMax}
                  windSpeed={windSpeed}
                  humidity={humidity}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={styles.header}>
                    <Icon name="ios-navigate" />
                    <Text>Map</Text>
                  </TabHeading>
                }
              >
                <MapView
                  showsUserLocation
                  style={styles.map}
                  initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                ></MapView>
              </Tab>
            </Tabs>
          </Container>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  loadingText: {
    fontSize: 30,
    color: "white"
  },
  map: {
    flex: 1
  },
  header: {
    backgroundColor: "black"
  }
});
