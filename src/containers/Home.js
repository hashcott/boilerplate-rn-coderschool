import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Agenda } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";

const dummy = require("../apis/dummy.json");

export default class AgendaScreen extends Component {
  componentDidMount() {
    this.setState({ items: dummy.timeTable });
  }
  constructor(props) {
    super(props);

    this.state = {
      items: {},
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Agenda
          items={this.state.items}
          // loadItemsForMonth={this.loadItems.bind(this)}
          selected={this.timeToString(new Date().getTime())}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        />
      </SafeAreaView>
    );
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => Alert.alert(item.lopHocPhan)}
      >
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold" }}>{item.lopHocPhan}</Text>
          <Text
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <AntDesign name="clockcircleo" size={18} color="black" />{" "}
            {this.parsePeriods(item.timestamp.start)} -{" "}
            {this.parsePeriods(item.timestamp.end)}
          </Text>
          <Text>{item.location}</Text>
          <Text>{item.giangVien}</Text>
          <Text>Số tín chỉ : {item.soTc}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>Bạn chưa có lịch học vào hôm nay</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
  parsePeriods(time) {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height: 150,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  title: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
