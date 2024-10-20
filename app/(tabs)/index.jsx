import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sign in" onPress={() => alert("Sign in")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
