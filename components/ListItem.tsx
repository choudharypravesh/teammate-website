import React from 'react'
import {StyleSheet, Text, View} from "react-native";

const ListItem = (props: { children?: any, prefix?: any, suffix?: any, text?: any }) => (
  <View style={styles.listItemContainer}>
    <View style={styles.leftSide}>
      {props.prefix}
      {props.children}
      {props.text && <Text style={styles.listText}>{props.text}</Text>}
    </View>

    {props.suffix}
  </View>
);

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listText: {
    fontSize: 16,
    marginLeft: 14,
    color: '#212121'
  }
});


export default ListItem
