import { Box, Text, Image, Flex, Carousel } from "@chakra-ui/react";
import PreloadImage from "../AppComponents/PreloadImage";

const banners = [
  {
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    title: "PAK VS AUS",
    subtitle: "JOIN NOW & WIN",
  },
  {
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    title: "IND VS ENG",
    subtitle: "BIGGEST CONTEST",
  },
  {
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    title: "IPL 2026",
    subtitle: "PLAY & EARN",
  },
];

function Banner() {
  return (
    <Box px="1" mt="5">
      <Carousel.Root
        slideCount={banners.length}
        autoplay={{ delay: 2000 }}
        loop
      >
        <Carousel.ItemGroup>
          {banners.map((banner, index) => (
            <Carousel.Item key={index} index={index}>
              <Box
                h={{ base: "100px", md: "120px", lg: "130px" }}
                borderRadius={{ base: "2xl", md: "2xl", lg: "3xl" }}
                overflow="hidden"
                position="relative"
              >
                {/* <Image
                  src={banner.image}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  opacity="0.6"
                /> */}
                <PreloadImage
                  src={banner.image}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  opacity="0.6"
                />

                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-r, blackAlpha.500, blackAlpha.200)"
                />

                <Flex
                  position="absolute"
                  inset="0"
                  align="center"
                  justify="center"
                  direction="column"
                  zIndex="1"
                >
                  <Text
                    fontFamily="body-1"
                    fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
                    fontWeight="900"
                    color="white"
                  >
                    {banner.title}
                  </Text>

                  <Text
                    fontFamily="body-1"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="600"
                    color="white"
                  >
                    {banner.subtitle}
                  </Text>
                </Flex>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        {/* Dots */}
        <Carousel.IndicatorGroup
          position="absolute"
          bottom="2"
          left="50%"
          transform="translateX(-50%)"
          zIndex="2"
        >
          {banners.map((_, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              bg="whiteAlpha.700"
              _current={{
                bg: "#FF4655",
              }}
            />
          ))}
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    </Box>
  );
}

export default Banner;
