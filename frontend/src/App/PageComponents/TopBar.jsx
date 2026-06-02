import React from "react";
import { HStack, Text, VStack, Icon } from "@chakra-ui/react";

import {
  FaCompass,
  FaDice,
  FaFutbol,
  FaTrophy,
} from "react-icons/fa";
function TopBar() {
  const categories = [
    { name: "Explore", icon: FaCompass },
    { name: "Casino", icon: FaDice },
    { name: "Fantasy", icon: FaTrophy },
    { name: "Sports", icon: FaFutbol },
  ];
  return (
    <HStack
      overflowX="auto"
      gap="8"
      px="4"
      py="3"
      bg="whiteAlpha.50"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {categories.map((item) => (
        <VStack key={item.name} minW="70px">
          <Icon size="lg">
            <item.icon />
          </Icon>

          <Text fontFamily={"body-1"} fontSize="sm">{item.name}</Text>
        </VStack>
      ))}
    </HStack>
  );
}

export default TopBar;
