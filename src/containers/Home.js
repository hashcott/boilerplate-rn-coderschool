import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Home);

const styles = StyleSheet.create({});
