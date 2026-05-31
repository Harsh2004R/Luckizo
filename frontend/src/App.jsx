// import "./App.css";
import { Container } from "@chakra-ui/react";
import AllRoutes from "../src/Routes/AllRoutes";

function App() {
  return (
    <Container p="0" m="0" bg="#19191d" w="100%" minH="100vh">
      <Container
        // border={"1px solid tomato"}
        maxWidth={{ base: "100%", md: "md", lg: "xl" }}
        minH="100vh"
        py="1vh"
        px="0px"
        bg="#19191d"
      >
       
       <AllRoutes />
      </Container>
    </Container>
  );
}

export default App;
