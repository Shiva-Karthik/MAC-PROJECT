import React from "react";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Skeleton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import { getProductsData } from "../../redux/products/action";
import { Heading } from "@chakra-ui/react";
import {
  Center,
  Flex,
  Stack,
  Link,
} from "@chakra-ui/react";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// This list contains all the data for carousels
// This can be static or loaded from a server
const cards = [
  "https://m.media-amazon.com/images/I/61gK+CJQnjL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61od7gDIFEL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61xeNFULzML._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81S9lHJGtqL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71te7JqNo7L._SX3000_.jpg"
];

const LandingPage = () => {
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const dispatch = useDispatch();
  const [slider, setSlider] = useState(React.useState < Slider);
  const navigate = useNavigate();

  const getData = () => {
    dispatch(getProductsData());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Box
        position={"relative"}
        height={{ sm: 200, lg: 500 }}
        // width={'full'}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              // mobile
              // height={'sm'}
              // desktop
              // height={'6xl'}
              // tab
              // height={'3xl'}
              height={{ base: "xl", sm: "sm", lg: "6xl" }}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card})`}
            ></Box>
          ))}
        </Slider>
      </Box>
      <Box
        padding={{
          sm: "10",
          md: "10",
        }}
      >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: "0",
            lg: "12",
          }}
          py={{
            base: "0",
            lg: "12",
          }}
        >
          <Stack
            direction={{
              base: "column-reverse",
              lg: "row",
            }}
            spacing={{
              base: "0",
              lg: "20",
            }}
          >
            <Box
              width={{
                lg: "sm",
              }}
              transform={{
                base: "translateY(-50%)",
                lg: "none",
              }}
              bg={{
                base: useColorModeValue("red.50", "gray.700"),
                lg: "transparent",
              }}
              mx={{
                base: "6",
                md: "8",
                lg: "0",
              }}
              px={{
                base: "6",
                md: "8",
                lg: "0",
              }}
              py={{
                base: "6",
                md: "8",
                lg: "12",
              }}
            >
              <Stack
                spacing={{
                  base: "8",
                  lg: "10",
                }}
              >
                <Stack
                  spacing={{
                    base: "2",
                    lg: "4",
                  }}
                >
                  <Heading
                    size="xl"
                    color={useColorModeValue("red.500", "red.300")}
                  >
                    Misguided
                  </Heading>
                  <Heading size="xl" fontWeight="normal">
                    Refresh your accessories
                  </Heading>
                </Stack>
                <Center>
                  <HStack spacing="3">
                    <Link
                      color={useColorModeValue("red.500", "red.300")}
                      fontWeight="bold"
                      fontSize="lg"
                      onClick={() => navigate("/category/electronics")}
                    >
                      Discover now
                    </Link>
                    <Icon
                      color={useColorModeValue("red.500", "red.300")}
                      as={FaArrowRight}
                    />
                  </HStack>
                </Center>
              </Stack>
            </Box>
            <Flex flex="1" overflow="hidden">
              <Image
                src="https://images.unsplash.com/photo-1596207891316-23851be3cc20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
                alt="Lovely Image"
                fallback={<Skeleton />}
                maxH="450px"
                minW="300px"
                objectFit="cover"
                flex="1"
              />
              <Image
                display={{
                  base: "none",
                  sm: "initial",
                }}
                src="https://images.unsplash.com/photo-1628489479633-fefb4059474f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2glMjBhY2Nlc3Nvcmllc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=772&q=80"
                alt="Lovely Image"
                fallback={<Skeleton />}
                maxH="450px"
                objectFit="cover"
              />
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
