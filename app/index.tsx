import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/images/dev-workshop-logo.png")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.tagLineTop}>
          Learn <Text style={styles.brownText}>CODE!</Text>
        </Text>
        <Text style={styles.tagLineTop}>Come and check us out!</Text>
        <Text style={styles.tagLine}>
          We are located in the heart of the big city. This is where it all
          happens.
        </Text>
        <Button
          style={styles.btn}
          mode="text"
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={styles.whiteText}>Sign In</Text>
        </Button>
        <Button
          style={styles.btn}
          mode="text"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={styles.whiteText}>Sign Up Today!</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: -50,
  },
  subContainer: {
    padding: 20,
    marginTop: -20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  brownText: {
    color: Colors.DEV_PRIMARY,
  },
  tagLineTop: {
    fontSize: 30,
    textAlign: "center",
  },
  tagLine: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.GRAY,
  },
  btn: {
    backgroundColor: Colors.DEV_PRIMARY,
    padding: 10,
    borderRadius: 50,
    marginTop: 50,
  },
  whiteText: {
    color: "#fff",
    textAlign: "center",
  },
});
