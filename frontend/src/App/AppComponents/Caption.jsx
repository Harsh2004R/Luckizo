import React from "react";
import colors from "../../Constants/colors";
import { Text } from "@chakra-ui/react";
function Caption({
  children,
  textAlign = "center",
  color = colors.caption_text_color,
  fontSize = "10px",
  fontWeight = "400",
  mt = "5px",
  letterSpacing = "0.4px",
  fontFamily="caption-thin",

  ...props
}) {
  return (
    <Text
      textAlign={textAlign}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      mt={mt}
      fontFamily={fontFamily}
      letterSpacing={letterSpacing}
      {...props}
    >
      {children}
    </Text>
  );
}

export default Caption;
