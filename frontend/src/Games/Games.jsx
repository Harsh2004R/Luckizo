import { Center, ScrollArea, Box } from "@chakra-ui/react";
function Games() {
  return (
    <ScrollArea.Root height="98vh" w="100%">
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
          <Center
            flexDirection={"column"}
            w="full"
            minH="100vh"
            bg="linear-gradient(135deg,#222222,#0F172A,#222222 ,#FF4655)"
          >
            {/* rendering all games list here..... */}
          </Center>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}

export default Games;
