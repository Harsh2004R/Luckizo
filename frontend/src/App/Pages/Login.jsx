import {
  Center,
  Container,
  // Input,
  Field,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import colors from "../../Constants/colors";
import Btn from "../AppComponents/Btn.jsx";
import Input from "../AppComponents/Input.jsx";
function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);

    reset();
  };
  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      w="100%"
      p={{ base: "10", md: "18", lg: "28" }}
      minH="100vh"
      // border="1px solid lime"
    >
      <Center
        w="100%"
        minH="50vh"
        border={{
          base: "1px solid #7070703e",
          md: "none",
          lg: "1px solid #7070703e",
        }}
        borderRadius={"lg"}
      >
        <form onSubmit={handleSubmit(handleLogin)}>
          <Field.Root required>
            <Field.Label>
              <Text
                color={colors.input_lable}
                fontFamily={"body-1"}
                letterSpacing={"0.3px"}
              >
                Phone or Email
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
              placeholder={"Your email or phone"}
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
            Login
          </Btn>
        </form>
      </Center>
    </Container>
  );
}

export default Login;
