// import "./App.css";
import { Container } from "@chakra-ui/react";
import AllRoutes from "../src/Routes/AllRoutes";

function App() {
  return (
    <Container p="0" mx="auto" bg="#19191d" w="100%" minH="100vh">
      <Container
        // border={"1px solid tomato"}
        borderRight={"1px solid #ffffff1e"}
        borderLeft={"1px solid #ffffff1e"}
        maxWidth={{ base: "100%", md: "md", lg: "xl" }}
        minH="100vh"
        py="1vh"
        px="10px"
        bg="#19191d"
      >
        <AllRoutes />
      </Container>
    </Container>
  );
}

export default App;
