import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { FaGamepad, FaCrown, FaGift, FaUser } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import colors from "../../Constants/colors";

const theme = colors.navbar_theme;

const navItems = [
  {
    label: "Games",
    icon: FaGamepad,
    path: "/games",
  },
  {
    label: "VIP",
    icon: FaCrown,
    path: "/vip",
  },
  {
    label: "Rewards",
    icon: FaGift,
    path: "/rewards",
  },
  {
    label: "Profile",
    icon: FaUser,
    path: "/profile",
  },
];

function Navigator() {
   const location = useLocation();
  return (
    <Box
      position="fixed"
      bottom="15px"
      left="50%"
      transform="translateX(-50%)"
      w={{ base: "95%", md: "500px" }}
      bg={theme.background}
      backdropFilter="blur(24px)"
      border={`1px solid ${theme.border}`}
      borderRadius="20px"
      boxShadow={`
        0 12px 40px ${theme.shadow},
        0 0 25px ${theme.glow}
      `}
      zIndex="1000"
      py={2}
    >
      <HStack justify="space-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <VStack
                gap={1}
                cursor="pointer"
                color={isActive ? theme.active : theme.inactive}
                transition="all .25s ease"
                _hover={{
                  color: theme.activeHover,
                  transform: "translateY(-2px)",
                }}
              >
                <Box
                  p={2}
                  borderRadius="14px"
                  bg={isActive ? theme.activeBg : "transparent"}
                  border={`1px solid ${
                    isActive
                      ? theme.activeBorder
                      : "transparent"
                  }`}
                  boxShadow={
                    isActive
                      ? `0 0 20px ${theme.active}`
                      : "none"
                  }
                >
                  <item.icon size={14} />
                </Box>

                <Text
                  fontSize={{
                    base: "9px",
                    md: "10px",
                    lg: "10px",
                  }}
                  fontWeight="600"
                  letterSpacing=".5px"
                >
                  {item.label}
                </Text>
              </VStack>
            </NavLink>
          );
        })}
      </HStack>
    </Box>
  );
}

export default Navigator;
