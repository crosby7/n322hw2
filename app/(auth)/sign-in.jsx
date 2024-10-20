import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Signin() {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        keyboardType="email-address"
        placeholder="Email..."
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value="{password}"
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button mode="outlined" onPress={onSignInPress}>
        Sign In
      </Button>
      <View>
        <Text>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </View>
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
