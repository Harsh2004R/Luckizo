// import "./App.css";
import { Container, ScrollArea, Box } from "@chakra-ui/react";
import AllRoutes from "../Routes/AllRoutes";
function App() {
  return (
    <Container
      // border={"1px solid tomato"}
      maxWidth={{ base: "100%", md: "md", lg: "xl" }}
      minH="100vh"
      py="1vh"
      px="0px"
    >
      <ScrollArea.Root
        px={{ base: "5px", md: "7px", lg: "8px" }}
        // border={"1px solid red"}
        borderRight={"1px solid #ffffff1e"}
        borderLeft={"1px solid #ffffff1e"}
        height="98vh"
        maxW="100%"
      >
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
          <ScrollArea.Content spaceY="4">
            {/* Scroll Container ..... */}
            <AllRoutes />
          </ScrollArea.Content>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Container>
  );
}

export default App;
