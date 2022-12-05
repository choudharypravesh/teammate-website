import React from 'react'
import {StyleSheet, TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";

interface IconButtonProps {
  onPress: any
  iconName: any
  borderRadius?: any
  size?: number
  iconSize?: number
  iconColor?: string
  backgroundColor?: string
}

const IconButton = ({onPress, iconName, borderRadius, size, iconSize, iconColor, backgroundColor}: IconButtonProps) => {
  const customStyles = {
    borderRadius: borderRadius || 10,
    height: size || 40,
    width: size || 40,
    iconSize: iconSize || 24,
    iconColor: iconColor || 'black',
    backgroundColor: backgroundColor || '#F7F8F9'
  }

  return (
    <TouchableOpacity style={{...styles.base, ...customStyles}} onPress={onPress}>
      <AntDesign name={iconName} size={customStyles.iconSize} color={customStyles.iconColor}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  }
})
export default IconButton
