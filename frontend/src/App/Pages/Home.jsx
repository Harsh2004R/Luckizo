import { ScrollArea } from "@chakra-ui/react";
import Navigator from "../AppComponents/Navigator";

function Home() {
  return (
    <>
       <ScrollArea.Root
          // px={{ base: "5px", md: "7px", lg: "8px" }}
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
           
               
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea.Root>

    </>
  );
}

export default Home;
