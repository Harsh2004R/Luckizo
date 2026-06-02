import {
  Box,
  Text,
  Flex,
  Avatar,
  Progress,
  Icon,
  ScrollArea,
} from "@chakra-ui/react";
import Caption from "../AppComponents/Caption";
import Header from "../AppComponents/Header";
import {
  FaBell,
  FaWallet,
  FaCrown,
  FaCog,
  FaSignOutAlt,
  FaHeadset,
  FaUserShield,
} from "react-icons/fa";

const menuItems = [
  { title: "Notifications", icon: FaBell },
  { title: "Account", icon: FaUserShield },
  { title: "Transactions", icon: FaWallet },
  { title: "VIP Club", icon: FaCrown },
  { title: "Contact Us", icon: FaHeadset },
  { title: "Settings", icon: FaCog },
  { title: "Logout", icon: FaSignOutAlt },
];

function MenuCard({ title, icon: Icon }) {
  return (
    <Flex
      align="center"
      gap="14px"
      p="16px"
      borderRadius="18px"
      // border="1px solid red"
      cursor="pointer"
      transition="all .20s ease"
      bg="whiteAlpha.50"
      _hover={{
        bg: "#191f3570",
        transform: "translateX(4px)",
      }}
    >
      <Box fontSize="20px">
        <Icon
          boxSize={"16px"}
          color="white"
          filter="drop-shadow(0 0 5px gold)"
        />
      </Box>

      <Text fontFamily={"body-2"} color="white" fontWeight="600">
        {title}
      </Text>
    </Flex>
  );
}

// function StatCard({ label, value, color }) {
//   return (
//     <Box
//       flex="1"
//       minW="120px"
//       bg="whiteAlpha.50"
//       p="20px"
//       borderRadius="20px"
//       border="1px solid"
//       borderColor="whiteAlpha.200"
//     >
//       <Text color="gray.400" fontSize="sm">
//         {label}
//       </Text>

//       <Text mt="6px" color={color} fontWeight="bold" fontSize="2xl">
//         {value}
//       </Text>
//     </Box>
//   );
// }

function Profile() {
  return (
    <ScrollArea.Root height="90vh" w="100%">
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
            w="full"
            minH="auto"
            bg="linear-gradient(135deg,#222222,#0F172A,#222222 ,#FF4655)"
            p={{ base: "16px", md: "30px" }}
          >
            <Flex
              maxW="1400px"
              mx="auto"
              gap="14px"
              direction={{ base: "column", lg: "column" }}
            >
              <Box
                flex="1"
                w={{ base: "100%", md: "360px", lg: "360px" }}
                bg="rgba(255,255,255,0.04)"
                backdropFilter="blur(18px)"
                borderRadius="32px"
                border="1px solid rgba(255,255,255,.08)"
                p={{ base: "10px", md: "15px" }}
              >
                <Flex direction="column" gap="10px">
                  {/* Avatar */}

                  <Avatar.Root
                    size="2xl"
                    border="3px solid"
                    borderColor="#FF6B76"
                    ml="5%"
                  >
                    <Avatar.Image src="https://i.pravatar.cc/300" />
                    <Avatar.Fallback>HG</Avatar.Fallback>
                  </Avatar.Root>

                  {/* User Info */}

                  <Text fontFamily={"body-2"} ml="5%">
                    Harsh Sharma.{" "}
                  </Text>
                  <Caption
                    fontWeight="bold"
                    ml="5%"
                    mt="-8px"
                    textAlign="left"
                    color="yellow.400"
                  >
                    {" "}
                    @harshgaming
                  </Caption>

                  {/* VIP CARD */}
                  <Box
                    w="100%"
                    p="20px"
                    borderRadius="24px"
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(255,215,0,.25)"
                  >
                    <Flex justify="space-between" mb="12px">
                      <Text
                        fontFamily={"body-2"}
                        color="white.200"
                        fontWeight="bold"
                      >
                        <Icon
                          as={FaCrown}
                          boxSize={"16px"}
                          color="yellow.400"
                          filter="drop-shadow(0 0 8px gold)"
                        ></Icon>{" "}
                        VIP LEVEL 7
                      </Text>

                      <Caption color="white">78%</Caption>
                    </Flex>

                    <Progress.Root value={78}>
                      <Progress.Track h="10px" borderRadius="full">
                        <Progress.Range colorPalette="blue" />
                      </Progress.Track>
                    </Progress.Root>

                    <Caption
                      mt="10px"
                      fontWeight="bold"
                      color="gray.400"
                      fontSize="11px"
                    >
                      220 points remaining for VIP 8
                    </Caption>
                  </Box>

                  {/* Wallet */}
                  <Box
                    w="100%"
                    bg="linear-gradient(135deg,#1E293B,#0F172A)"
                    borderRadius="24px"
                    p="20px"
                  >
                    <Text fontFamily={"body-2"} color="white.400">
                      Wallet Balance
                    </Text>

                    <Text color="#FF6B76" fontSize="3xl" fontWeight="bold">
                      ₹24,500
                    </Text>
                  </Box>

                  {/* Stats */}
                  {/* <Flex fontFamily="body-thin" w="100%" gap="15px" wrap="wrap">
              <StatCard label="Games" value="856" color="cyan.300" />

              <StatCard label="Wins" value="734" color="green.300" />

              <StatCard label="Rank" value="Diamond" color="yellow.300" />
            </Flex> */}
                </Flex>
              </Box>

              {/* RIGHT SIDE */}
              <Box
                w={{
                  base: "100%",
                  lg: "360px",
                }}
                bg="rgba(255,255,255,0.04)"
                backdropFilter="blur(18px)"
                borderRadius="32px"
                border="1px solid rgba(255,255,255,.08)"
                p="24px"
              >
                <Flex direction="column" gap="12px">
                  {menuItems.map((item) => (
                    <MenuCard
                      key={item.title}
                      title={item.title}
                      icon={item.icon}
                    />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}

export default Profile;
