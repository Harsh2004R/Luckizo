import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Badge,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import Header from "../PageComponents/Header.jsx";

import TopBar from "../PageComponents/TopBar.jsx";
import Banner from "../PageComponents/Banner.jsx";
function Home() {
  const recentlyPlayed = [
    {
      title: "Fortune Roulette",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      title: "7UP 7DOWN",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    },
    {
      title: "SIC BO",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    },
    {
      title: "Fortune Roulette",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      title: "7UP 7DOWN",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    },
    {
      title: "SIC BO",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    },
  ];

  const casinoGames = [
    {
      title: "Aviator",
      image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63",
    },
    {
      title: "Chicken Road",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
    },
    {
      title: "Fortune Gems",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    },
    {
      title: "Golden Wings",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      title: "Lucky Wheel",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      title: "Mega Gold",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    },
  ];

  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg,#0F172A,#222222,#FF4655 ,#222222)"
      color="white"
      pb="120px"
    >
      {/* HEADER */}
      <Header />

      {/* TOP BAR */}
      <TopBar />
      {/* BANNER */}

      <Banner />

      {/* RECENTLY PLAYED */}

      <Box
        px="1"
        mt="8"
        // border="1px solid green"
      >
        <Text
          fontFamily={"body-2"}
          fontSize="3xl"
          color="white.100"
          fontWeight="bold"
        >
          <Text as="span" color="#FF4655">
            R
          </Text>
          ecently Played
        </Text>

        <Flex
          // border="1px solid red"
          mt="5"
          bg="transparent"
          overflowX="auto"
          overflowY="hidden"
          scrollBehavior="smooth"
          whiteSpace="nowrap"
          gap="4"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {recentlyPlayed.map((game) => (
            <Box
              // border="1px solid red"
              key={game.title}
              minW={{ base: "100px", md: "110px", lg: "120px" }}
              borderRadius={{ base: "xl", md: "2xl", lg: "2xl" }}
              overflow="hidden"
              bg="linear-gradient(135deg,#0F172A,#FF4655,#222222 ,#222222)"
            >
              <Image
                src={game.image}
                h={{ base: "100px", md: "110px", lg: "120px" }}
                w="100%"
                objectFit="cover"
              />

              <Box p="3">
                <Text
                  textAlign="center"
                  fontFamily={"body-1"}
                  color="#FFFFFF"
                  fontWeight="bold"
                  fontSize="12px"
                >
                  {game.title}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* CASINO */}

      <Box px="1" mt="10">
        <Flex justify="space-between" align="center" mb="5">
          <Text
            fontFamily={"body-2"}
            color="white.100"
            fontSize="3xl"
            fontWeight="bold"
          >
            <Text as="span" color="#29B6F6">
              C
            </Text>
            asino
          </Text>

          <Text fontSize={"xs"} fontWeight={"bold"} fontFamily={"body-regular"}>
            View All
          </Text>
        </Flex>

        <SimpleGrid
          columns={{
            base: 2,
            md: 3,
          }}
          gap="4"
        >
          {casinoGames.map((game) => (
            <Box
              key={game.title}
              // border="1px solid lime"
              minW={{ base: "100px", md: "110px", lg: "120px" }}
              borderRadius={{ base: "xl", md: "2xl", lg: "2xl" }}
              overflow="hidden"
              position="relative"
              bg="linear-gradient(135deg,#0F172A,#FF4655,#222222 ,#222222)"
            >
              <Badge
                position="absolute"
                top="3"
                p={2}
                left="3"
                borderRadius="full"
                zIndex="2"
              >
                🔥 HOT
              </Badge>
              <Image
                src={game.image}
                h={{ base: "100px", md: "110px", lg: "120px" }}
                w="100%"
                objectFit="cover"
              />

              <Box p="3">
                <Text
                  textAlign="center"
                  fontFamily={"body-1"}
                  color="#FFFFFF"
                  fontWeight="bold"
                  fontSize="12px"
                >
                  {game.title}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
