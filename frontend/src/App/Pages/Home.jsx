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

import {
  FaCompass,
  FaDice,
  FaFutbol,
  FaWallet,
  FaBell,
  FaTrophy,
} from "react-icons/fa";
import TopBar from "../PageComponents/TopBar";
import Caption from "../AppComponents/Caption";
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

      <Flex justify="space-between" align="center" p="4">
        <Text
          fontSize="3xl"
          fontFamily={"body-2"}
          fontWeight="900"
          bgGradient="linear-gradient(135deg,#FF4655,#FFFFFF,#29B6F6 ,#555555)"
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
            <Text>₹0.56</Text>
          </Flex>

          <Icon size="lg">
            <FaWallet />
          </Icon>

          <Icon size="lg">
            <FaBell />
          </Icon>
        </HStack>
      </Flex>

      {/* TOP BAR */}
      <TopBar />
      {/* BANNER */}

      <Box px="4" mt="5">
        <Box
          h={{ base: "100px", md: "120px", lg: "130px" }}
          borderRadius="24px"
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

      {/* RECENTLY PLAYED */}

      <Box px="4" mt="8" >
        <Text fontFamily={"body-2"} fontSize="3xl" fontWeight="bold">
          <Text as="span" color="#FF4655">
            R
          </Text>
          ecently Played
        </Text>

        <HStack
        // border="1px solid red"
          mt="5"
          bg="transparent"
          overflowX="auto"
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
              minW="170px"
              borderRadius="24px"
              overflow="hidden"
              bg="linear-gradient(135deg,#0F172A,#FF4655,#222222 ,#222222)"
              
            >
              <Image src={game.image} h="180px" w="100%" objectFit="cover" />

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
        </HStack>
      </Box>

      {/* CASINO */}

      <Box px="4" mt="10" >
        <Flex justify="space-between" align="center" mb="5">
          <Text fontFamily={"body-2"} fontSize="3xl" fontWeight="bold">
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
              p="2px"
              borderRadius="24px"
              // border="1px solid lime"
              bgGradient="linear(135deg,#00F5A0,#00D9F5,#8B5CF6,#FF4655)"
            >
              <Box
                borderRadius="22px"
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
                <Image src={game.image} h="200px" w="100%" objectFit="cover" />

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
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* BOTTOM NAVBAR */}
    </Box>
  );
}

export default Home;
