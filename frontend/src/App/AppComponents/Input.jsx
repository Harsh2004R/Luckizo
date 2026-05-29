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
  w = "full",
  h = { base: "38px", md: "40px", lg: "40px" },
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
      bgColor={"transparent"}
      {...props}
    >
      
    </ChakraInput>
  );
}

export default Input;
