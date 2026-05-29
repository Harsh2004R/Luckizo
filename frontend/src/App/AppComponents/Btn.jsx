import { Button } from "@chakra-ui/react";
function Btn({
  children,
  mt = {
    base: "3",
    md: "4",
    lg: "5",
  },
  w = {
    base: "100px",
    md: "60px",
    lg: "80px",
  },
  p = "0",
  h = {
    base: "30px",
    md: "25px",
    lg: "30px",
  },
  onClick,
  type = "button",
  color = "#ffffff",
  bgColor = "#178eea",
  borderRadius = "sm",
  fontFamily = "caption-regular",
  fontSize="14px",
  ...props
}) {
  return (
    <Button
      display={"block"}
      type={type}
      fontFamily={fontFamily}
      onClick={onClick}
      h={h}
      w={w}
      borderRadius={borderRadius}
      color={color}
      bgColor={bgColor}
      mt={mt}
      p={p}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </Button>
  );
}

export default Btn;
