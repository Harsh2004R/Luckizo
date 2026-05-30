import colors from "../../Constants/colors";
import { Heading } from "@chakra-ui/react";
function Header({
  children,
  color = colors.header_color,
  size = "6xl",
  fontFamily = "body-1",
  mt = "10px",
  mb = "10px",
  textAlign = "center",
  letterSpacing="0.5px",
  ...props
}) {
  return (
    <Heading
      mt={mt}
      textAlign={textAlign}
      mb={mb}
      size={size}
      color={color}
      fontFamily={fontFamily}
      letterSpacing={letterSpacing}
      {...props}
    >
      {children}
    </Heading>
  );
}

export default Header;
