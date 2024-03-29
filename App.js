import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { useState } from "react";
import Cat from "./Cat";

export default function App() {
  const [boxColor1, setBoxColor1] = useState("red");
  const [boxColor2, setBoxColor2] = useState("red");
  const [boxColor3, setBoxColor3] = useState("red");
  var [count, setCount] = useState(0);

  function setColorFunction1(boxColor1, count) {
    setBoxColor1(boxColor1);
    if (boxColor1 == "green") {
      setCount((count += 1));
    } else if (boxColor1 == "red") {
      setCount((count -= 1));
    }
  }

  function setColorFunction2(boxColor2, count) {
    setBoxColor2(boxColor2);
    if (boxColor2 == "green") {
      setCount((count += 1));
    } else if (boxColor2 == "red") {
      setCount((count -= 1));
    }
  }

  function setColorFunction3(boxColor3, count) {
    setBoxColor3(boxColor3);
    if (boxColor3 == "green") {
      setCount((count += 1));
    } else if (boxColor3 == "red") {
      setCount((count -= 1));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("./assets/house.png")}
        />

        <Text style={styles.text}>SmartHome</Text>
      </View>
      <Text style={styles.text}>Rooms</Text>
      <View style={styles.rooms}>
        <View style={styles.roomsContainer}>
          <View style={styles.roomsbackground}>
            <Image
              style={styles.image}
              source={require("./assets/living_room.png")}
            />
            <Text>Living Room</Text>
          </View>

          <View style={styles.roomsbackground}>
            <Image style={styles.image} source={require("./assets/bed.png")} />
            <Text>Bedroom</Text>
          </View>

          <View style={styles.roomsbackground}>
            <Image
              style={styles.image}
              source={require("./assets/kitchen.png")}
            />
            <Text>Kitchen</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>Devices</Text>
      <View style={{ width: "100%" }}>
        <View style={styles.devices}>
          <View style={styles.yellowBox}>
            <View style={styles.livingRoom}>
              <View
                style={{
                  padding: 10,
                  marginHorizontal: 10,
                  backgroundColor: boxColor1,
                }}
              />
              <Text>Living Room Lamp</Text>
            </View>

            <View>
              <Button
                title="On"
                onPress={() => setColorFunction1("green", count)}
              ></Button>
              <Button
                title="Off"
                onPress={() => setColorFunction1("red", count)}
              ></Button>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View style={styles.devices}>
          <View style={styles.yellowBox}>
            <View style={styles.livingRoom}>
              <View
                style={{
                  padding: 10,
                  marginHorizontal: 10,
                  backgroundColor: boxColor2,
                }}
              />
              <Text>Heater</Text>
            </View>

            <View>
              <Button
                title="On"
                onPress={() => setColorFunction2("green", count)}
              ></Button>
              <Button
                title="Off"
                onPress={() => setColorFunction2("red", count)}
              ></Button>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View style={styles.devices}>
          <View style={styles.yellowBox}>
            <View style={styles.livingRoom}>
              <View
                style={{
                  padding: 10,
                  marginHorizontal: 10,
                  backgroundColor: boxColor3,
                }}
              />
              <Text>Kitchen</Text>
            </View>

            <View>
              <Button
                title="On"
                onPress={() => setColorFunction3("green", count)}
              ></Button>
              <Button
                title="Off"
                onPress={() => setColorFunction3("red", count)}
              ></Button>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.text}>Total devices on: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeigh: "bold,",
  },

  // Rooms
  rooms: {
    width: "100%",
    alignItems: "center",
  },

  roomsContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  roomsbackground: {
    backgroundColor: "lightblue",
    padding: 12,
  },

  image: {
    width: 100,
    height: 100,
  },

  // Devices
  devices: {
    alignItems: "center",
    width: "100%",
  },

  yellowBox: {
    width: "90%",
    padding: 5,
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#F4FD89",
  },

  livingRoom: {
    width: "87%",
    flexDirection: "row",
    alignItems: "center",
  },
});
