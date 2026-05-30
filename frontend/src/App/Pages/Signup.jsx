import Btn from "../AppComponents/Btn.jsx";
import Input from "../AppComponents/Input.jsx";
import Caption from "../AppComponents/Caption.jsx";
import Header from "../AppComponents/Header.jsx";
import { Text, Center, Field, Container, Image } from "@chakra-ui/react";
import colors from "../../Constants/colors.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <Header>Signup</Header>
      <Container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        w="100%"
        p={{ base: "10", md: "16", lg: "18" }}
        minH="auto"
        // border="1px solid lime"
      >
        <Center
          w="100%"
          minH="auto"
          border={{
            base: "1px solid #7070703e",
            md: "none",
            lg: "none",
          }}
          pt="20px"
          pb="20px"
          // border={ "1px solid #7070703e"}
          flexDirection={"column"}
          borderRadius={"lg"}
        >
          <form onSubmit={handleSubmit(handleSignup)}>
            <Field.Root required>
              <Field.Label>
                <Text
                  color={colors.input_lable}
                  fontFamily={"body-1"}
                  letterSpacing={"0.3px"}
                >
                  Phone
                </Text>
                {/* <Field.RequiredIndicator></Field.RequiredIndicator> */}
              </Field.Label>
              <Input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must contain only 10 digits",
                  },
                })}
                type="number"
                placeholder={"Your phone"}
              />
              <Text
                mt={1}
                color="red.400"
                fontFamily={"caption-thin"}
                fontSize={"xs"}
              >
                {errors.phone?.message}
              </Text>

              <Field.Label>
                <Text
                  color={colors.input_lable}
                  fontFamily={"body-1"}
                  letterSpacing={"0.3px"}
                >
                  Email
                </Text>
                <Field.RequiredIndicator></Field.RequiredIndicator>
              </Field.Label>

              <Input
                {...register("email", {
                  required: "Email must required",
                  pattern: {
                    value: /^([^\s@]+@[^\s@]+\.[^\s@]+|\d{10,15})$/,
                    message: "Invalid Email Address...",
                  },
                })}
                placeholder={"Your email"}
              />
              <Text
                mt={1}
                color="red.400"
                fontFamily={"caption-thin"}
                fontSize={"xs"}
              >
                {errors.email?.message}
              </Text>
              <Field.Label>
                <Text
                  color={colors.input_lable}
                  fontFamily={"body-1"}
                  letterSpacing={"0.3px"}
                >
                  Password
                </Text>
                <Field.RequiredIndicator></Field.RequiredIndicator>
              </Field.Label>

              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must not exceed 20 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
                    message:
                      "Password must include uppercase, lowercase, number and special character",
                  },
                })}
                type="password"
                placeholder={"Your password"}
              />
              <Text
                mt={1}
                color="red.400"
                fontFamily={"caption-thin"}
                fontSize={"xs"}
              >
                {errors.password?.message}
              </Text>
            </Field.Root>
            <Btn disabled={isSubmitting} type="submit" w="full">
              Signup
            </Btn>
          </form>
          <Caption
            textDecoration="underline"
            _hover={{ cursor: "pointer" }}
            mt="10px"
            fontWeight="600"
          >
            <Link to="/login">Login </Link>
          </Caption>
        </Center>
      </Container>
    </>
  );
}

export default Signup;
