import { Input as ChakraInput } from "@chakra-ui/react";
function Input({
  type = "text",
  varient,
  placeholder,
  _placeholder = {
    color: "gray.400",
    fontSize: "12px",
    fontFamily: "caption-thin",
  },
  fontFamily = "body-1",
  fontSize = "sm",
  w = "full",
  h = { base: "38px", md: "40px", lg: "40px" },
  py="18px",
  my="3px",
  ...props
}) {
  return (
    <ChakraInput
      w={w}
      h={h}
      _placeholder={_placeholder}
      placeholder={placeholder}
      variant={varient}
      type={type}
      fontFamily={fontFamily}
      bgColor={"transparent"}
      fontSize={fontSize}
      py={py}
      my={my}
      {...props}
    ></ChakraInput>
  );
}

export default Input;
