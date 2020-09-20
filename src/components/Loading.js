import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

export function Loading({ loading }) {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={"black"} />
        <Text style={styles.text}>
          Đang cập nhật dữ liệu cho lần đâu tiên sử dụng.{"\n"}Vui lòng chờ
          trong giây lát
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 30,
    borderRadius: 8,
    width: "80%",
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
