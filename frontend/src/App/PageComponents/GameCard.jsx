import { Box, Image, Text } from "@chakra-ui/react";

function GameCard({ game }) {
  return (
    <Box
      position="relative"
      h={{ base: "100px", md: "130px", lg: "150px" }}
      w={{ base: "90px", md: "110px", lg: "120px" }}
      overflow="hidden"
      borderRadius="28px"
      cursor="pointer"
      transition="all .25s ease"
      bg={game.bg}
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(0,0,0,.5)",
      }}
    >
      <Image
        src={game.image}
        alt={game.name}
        h="100%"
        w="100%"
        objectFit="cover"
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="45%"
        bgGradient="
          linear(
            to-t,
            rgba(0,0,0,.9),
            rgba(0,0,0,.4),
            transparent
          )
        "
      />

      <Text
        position="absolute"
        bottom="18px"
        left="0"
        right="0"
        textAlign="center"
        fontWeight="900"
        fontSize="40px"
        lineHeight="0.9"
        textTransform="uppercase"
        letterSpacing="1px"
        color="white"
        textShadow="
          0 0 8px rgba(255,0,0,.7),
          0 0 20px rgba(255,0,0,.5)
        "
      >
        {game.name}
      </Text>
    </Box>
  );
}

export default GameCard;
