import React from "react";
import { TouchableOpacity, Text, Stylesheet } from "react-native";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return <TouchableOpacity style={[style]}></TouchableOpacity>;
};

const styles = (style) =>
  Stylesheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
    },
  });
