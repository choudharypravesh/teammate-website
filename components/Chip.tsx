import React from 'react'
import {StyleSheet, Text, View} from "react-native";

const Chip = ({
                text,
                active = false,
                style,
                inactiveBg = 'rgba(216, 221, 227, 0.2)',
                inactiveText = '#7E8792'
              }: any) => {
  let containerStyles = {...styles.chip, backgroundColor: inactiveBg}
  let textStyles = {...styles.chip_text, color: inactiveText}

  if (active) {
    containerStyles = {...containerStyles, ...styles.chip_active}
    textStyles = {...textStyles, ...styles.chip_text_active}
  }

  return (
    <View style={{...containerStyles, ...style}}>
      <Text style={textStyles}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chips_container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 22,
  },
  chip: {
    borderColor: 'red',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  chip_active: {
    backgroundColor: '#1B3750',
  },
  chip_text: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  chip_text_active: {
    color: '#FFF',
    fontSize: 14,
  },

});


export default Chip
