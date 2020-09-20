import React from "react";
import { StyleSheet, Image, View, AsyncStorage } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Wellcome = ({ navigation }) => {
  const completeOnboarding = async () => {
    await AsyncStorage.setItem(
      "hasOnboarded",
      JSON.stringify({
        hasOnboarded: true,
      })
    );
    navigation.navigate("Login");
  };
  return (
    <Onboarding
      onDone={completeOnboarding}
      onSkip={completeOnboarding}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/loader.gif")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/loader.gif")} />,
          title: "2",
          subtitle: "D2ng Swiper",
        },
      ]}
    />
  );
};

export default Wellcome;

const styles = StyleSheet.create({});
