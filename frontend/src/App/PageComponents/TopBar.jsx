import React from "react";
import { HStack, Text, VStack, Icon } from "@chakra-ui/react";

import { FaCompass, FaDice, FaFutbol, FaTrophy } from "react-icons/fa";
function TopBar() {
  const categories = [
    { name: "Explore", icon: FaCompass },
    { name: "Casino", icon: FaDice },
    { name: "Fantasy", icon: FaTrophy },
    { name: "Sports", icon: FaFutbol },
  ];
  return (
    <HStack
      // border="1px solid white"
      overflowX="auto"
      gap="5px"
      px="2"
      py="2"
      bg="whiteAlpha.50"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {categories.map((item) => (
        <VStack _hover={{cursor:"pointer"}} key={item.name} minW="70px">
          <Icon color="white.100" filter="drop-shadow(0 0 8px gold)" size="sm">
            <item.icon />
          </Icon>

          <Text fontFamily={"body-1"} fontSize="11px">
            {item.name}
          </Text>
        </VStack>
      ))}
    </HStack>
  );
}

export default TopBar;
