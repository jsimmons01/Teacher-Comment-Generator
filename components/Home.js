import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import StudentInfo from "./StudentInfo";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Title>Teacher Comment Generator</Card.Title>
          <Card.Divider />
          <StudentInfo />
          <Card.Divider />
          <Directions />
        </Card>
      </View>
    );
  }
}

function Directions() {
  return (
    <Text>
      This app was created to give teachers a format to help them create
      comments. The hardest part is starting the commmnets and this tool is
      meant to help you with your report card comments. It is reccomended to
      flesh these out and add specific detail about sudents. Get started now!
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
  },
});

export default Home;
