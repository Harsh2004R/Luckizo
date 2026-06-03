import { Center, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaBell, FaWallet } from "react-icons/fa";

function Header() {
  return (
    <Flex justify="space-between" align="center" p="1.5">
      <Text
        fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
        fontFamily={"body-2"}
        fontWeight="900"
        bgGradient="linear-gradient(135deg,#000000,#FFFFFF,#FF4655 ,#29B6F6)"
        bgClip="text"
      >
        LUCKIZO
      </Text>

      <HStack gap="4">
        <Flex
          align="center"
          gap="2"
          bg="whiteAlpha.100"
          px="4"
          py="2"
          borderRadius="full"
        >
          <Text
            fontFamily="number"
            fontWeight="900"
            fontSize="xs"
            textShadow="0 0 1px currentColor"
          >
            ₹ 0.56
          </Text>
        </Flex>

        <Center
          flexDirection={"row"}
          // bg="linear-gradient(#FFFFFF,#FFB300,#FFFFFF ,#FFFFFF)"
          bg="whiteAlpha.100"
          borderRadius="full"
          gap={3}
          px="4"
          py="2"
        >
          <Icon color="#00E676" size="sm">
            <FaWallet />
          </Icon>

          <Icon color="#FF4655" size="sm">
            <FaBell />
          </Icon>
        </Center>
      </HStack>
    </Flex>
  );
}

export default Header;
