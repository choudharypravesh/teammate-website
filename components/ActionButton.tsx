import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ActionButton = (props: any) => {
  return (
    <View style={styles.actionContainer}>
      <TouchableOpacity style={{...styles.actionButton, ...props.buttonStyles}} onPress={props.onPress}>
        {props.prefix}
        <Text style={{...styles.actionText, ...props.titleStyles}}>{props.title}</Text>
        {props.suffix}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    height: 89,
    padding: 20,
  },
  actionButton: {
    flexDirection: "row",
    height: 48,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: '#000',
    justifyContent: "center",
  },
  actionText: {
    fontSize: 18,
    color: '#FFF',
  },
});


export default ActionButton
