import { Box, Text, Image, Flex } from "@chakra-ui/react";
function Banner() {
  return (
    <Box px="1" mt="5">
      <Box
        h={{ base: "100px", md: "120px", lg: "130px" }}
        borderRadius={{base:"2xl",md:"2xl",lg:"3xl"}}
        overflow="hidden"
        bgGradient="linear(135deg,#00C853,#005C97)"
        position="relative"
      >
        <Image
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
          w="100%"
          h="100%"
          objectFit="cover"
          opacity="0.6"
        />

        <Flex
          position="absolute"
          inset="0"
          align="center"
          justify="center"
          direction="column"
        >
          <Text fontFamily={"body-1"} fontSize="4xl" fontWeight="900">
            PAK VS AUS
          </Text>

          <Text fontWeight={"body-1"}>JOIN NOW & WIN</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Banner;
