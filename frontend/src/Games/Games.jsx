import { Center, ScrollArea, Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "../App/PageComponents/GameCard.jsx";
import TopBar from "../App/PageComponents/TopBar.jsx";
import Header from "../App/PageComponents/Header.jsx";
import Banner from "../App/PageComponents/Banner.jsx";
const games = [
  {
    id: 1,
    title: "Valorant",
    genre: "FPS",
    platform: "PC",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    description:
      "A tactical 5v5 hero shooter where precision and strategy matter.",
  },
  {
    id: 2,
    title: "GTA V",
    genre: "Open World",
    platform: "PC",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    description: "Explore Los Santos, complete missions and dominate the city.",
  },
  {
    id: 3,
    title: "PUBG",
    genre: "Battle Royale",
    platform: "Mobile",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    description: "Survive till the end in intense battle royale matches.",
  },
  {
    id: 4,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Cross Platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    description: "Build, explore and survive in an infinite block world.",
  },
  {
    id: 1,
    title: "Valorant",
    genre: "FPS",
    platform: "PC",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    description:
      "A tactical 5v5 hero shooter where precision and strategy matter.",
  },
  {
    id: 2,
    title: "GTA V",
    genre: "Open World",
    platform: "PC",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    description: "Explore Los Santos, complete missions and dominate the city.",
  },
  {
    id: 3,
    title: "PUBG",
    genre: "Battle Royale",
    platform: "Mobile",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    description: "Survive till the end in intense battle royale matches.",
  },
  {
    id: 4,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Cross Platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    description: "Build, explore and survive in an infinite block world.",
  },
  {
    id: 1,
    title: "Valorant",
    genre: "FPS",
    platform: "PC",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    description:
      "A tactical 5v5 hero shooter where precision and strategy matter.",
  },
  {
    id: 2,
    title: "GTA V",
    genre: "Open World",
    platform: "PC",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    description: "Explore Los Santos, complete missions and dominate the city.",
  },
  {
    id: 3,
    title: "PUBG",
    genre: "Battle Royale",
    platform: "Mobile",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    description: "Survive till the end in intense battle royale matches.",
  },
  {
    id: 4,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Cross Platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    description: "Build, explore and survive in an infinite block world.",
  },
];

function Games() {
  return (
    <>
    <Header/>
    <TopBar />
    <Banner />
      <ScrollArea.Root height="55vh" w="100%" >
        <ScrollArea.Viewport
          css={{
            "--scroll-shadow-size": "4rem",
            maskImage: "linear-gradient(#000, #000)",
            "&[data-overflow-y]": {
              maskImage:
                "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
              "&[data-at-top]": {
                maskImage:
                  "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
              },
              "&[data-at-bottom]": {
                maskImage:
                  "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
              },
            },
          }}
        >
          <ScrollArea.Content>
            <Box
              p={{ base: 3, md: 4, lg: 5 }}
              w="full"
              minH="100vh"
              bg="linear-gradient(135deg,#222222,#0F172A,#222222 ,#FF4655)"
            >
              {/* rendering all games list here..... */}

              <SimpleGrid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={4}
              >
                {games.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </SimpleGrid>
            </Box>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </>
  );
}

export default Games;
