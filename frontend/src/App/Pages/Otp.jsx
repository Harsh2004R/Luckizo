import { Box, Button, Text, Center, PinInput, Flex } from "@chakra-ui/react";
import Header from "../AppComponents/Header";
import Btn from "../AppComponents/Btn";
import Caption from "../AppComponents/Caption";
const Otp = () => {
  return (
    <>
      <Center
        flexDirection={"column"}
        minH={"50vh"}
        //   border={"1px solid red"}
      >
        {/* <Header>OTP</Header> */}

        <Center
          flexDirection={"column"}
          w="full"
          //   border={"1px solid blue"}
          height="30vh"
        >
          <Flex
            h="50px"
            //    border="1px solid red"
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <PinInput.Root otp>
              <PinInput.HiddenInput />
              <PinInput.Control color={"#000"}>
                <PinInput.Input index={0} />
                <PinInput.Input index={1} />
                <PinInput.Input index={2} />
                <PinInput.Input index={3} />
              </PinInput.Control>
            </PinInput.Root>
            <Btn mt="0" ml="20px">
              Verify
            </Btn>
          </Flex>

          <Caption
            textDecoration="underline"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
              color="blue.500"
          >
            Resend{" "}
          </Caption>
          <Caption
            fontWeight="bold"
          >
            if you don't receive otp click resend
          </Caption>
        </Center>
      </Center>
    </>
  );
};

export default Otp;

// bgImage={
//   "url(https://raw.githubusercontent.com/Harsh2004R/full-stack-wev-project/main/src/Luckizo/otp_start.png)"
// }
// bgImage="url(https://raw.githubusercontent.com/Harsh2004R/full-stack-wev-project/main/src/Luckizo/otp_mid.png)"

// bgImage={
//   "url(https://raw.githubusercontent.com/Harsh2004R/full-stack-wev-project/main/src/Luckizo/otp_end.png)"
// }
