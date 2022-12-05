import React from 'react'
import {StyleSheet, View} from "react-native";

const Divider = ({mt = 0, mb = 0}) => (
  <View style={{...styles.divider, marginTop: mt, marginBottom: mb}}/>
);

const styles = StyleSheet.create({
  divider: {
    height: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'rgba(216,221,227, .5)',
  },
});


export default Divider
