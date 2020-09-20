import React, { useState } from "react";
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import Error from "../components/Error";
import { Loading } from "../components/Loading";
import Heading from "../components/Heading";

export default function Login({ navigation }) {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleLogin = () => {
    setLoading(true);
    navigation.navigate("Main");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Heading style={styles.title}>Đăng nhập</Heading>
      <Error error={error} />
      <Input
        style={styles.input}
        onChangeText={setID}
        placeholder="Mã sinh viên"
      />
      <Input
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Mật khẩu"
        secureTextEntry
      />
      <FilledButton
        style={styles.loginButton}
        onPress={handleLogin}
        title="Đăng nhập"
      />
      <Loading loading={loading} />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: "center",
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
