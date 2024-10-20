import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Signup() {
  return (
    <View style={styles.container}>
      <>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          keyboardType="email-address"
          placeholder="Email..."
          onChangeText={(email) => setEmailAddress(email)}
        />
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button mode="outlined" onPress={onSignUpPress}>
          <Text>Sign Up</Text>
        </Button>
      </>

      <>
        <TextInput
          value={code}
          placeholder="Code..."
          keyboardType="numeric"
          onChangeText={(code) => setCode(code)}
        />
        <Button mode="outlined" onPress={onPressVerify}>
          Verify Email
        </Button>
      </>
    </View>
  );
}

const styles = StyleSheet.create({});
