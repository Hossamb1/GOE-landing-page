"use client";

import { useEffect, useState, useCallback } from "react";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

const TrendingSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const cards = [
    {
      title: "Unveil secrets of ancient wonders.",
      location: "Cairo",
      overlay: "linear-gradient(135deg, #FC8E50 10%, #FC8E5000 80%)",
      image: "images/pyramids.png",
    },
    {
      title: "Sunshine, beaches, and vibrant reefs.",
      location: "Hurghada",
      overlay: "linear-gradient(135deg, #6497C4 10%, #6497C400 80%)",
      image: "images/hurgada-hotel.png",
    },
    {
      title: "Dive into breathtaking underwater vistas.",
      location: "Sharm El-Shiekh",
      overlay: "linear-gradient(135deg, #BB5050 10%, #BB505000 80%)",
      image: "images/blue-ocean.png",
    },
    {
      title: "Journey through timeless historic treasures.",
      location: "Luxor & Aswan",
      overlay: "linear-gradient(135deg, #F29E22 10%, #F29E2200 80%)",
      image: "images/hurgada-hotel.png",
    },
  ];

  return (
    <Box py={7}>
      <Text
        color="#F6EEE5"
        fontSize={{ base: "26px", md: "40px" }}
        fontWeight="extrabold"
        mb={7}
      >
        Trending Destinations
      </Text>
      <Box position="relative">
        <Box ref={emblaRef} overflow="hidden">
          <Flex gap={4}>
            {cards.map((card, index) => (
              <Card.Root
                key={index}
                borderRadius="24px"
                border={0}
                overflow="hidden"
                position="relative"
                h="fit"
                flex={{ base: "0 0 80%", md: "0 0 55%", lg: "0 0 40%" }}
              >
                <Box
                  position="absolute"
                  px={4}
                  top="5%"
                  zIndex={1}
                  fontWeight="semibold"
                >
                  <Text
                    color="#F6EEE5"
                    fontWeight="semibold"
                    fontSize={{ base: "32px", md: "48px" }}
                  >
                    {card.location}
                  </Text>
                  <Text
                    zIndex={1}
                    color="#F6EEE5"
                    lineHeight={1.1}
                    fontSize={{ base: "18px", md: "26px" }}
                  >
                    {card.title}
                  </Text>
                </Box>
                <Button
                  position="absolute"
                  borderRadius="20px"
                  px={{ base: "35px", md: "45px" }}
                  h={{ base: "35px", md: "45px" }}
                  fontSize={{ md: "20px" }}
                  _hover={{ bg: "#f1f1f1" }}
                  bg="white"
                  color="black"
                  left="16px"
                  bottom="5%"
                  zIndex={1}
                  fontWeight="semibold"
                >
                  See Hotels
                </Button>

                <Box position="absolute" w="full" h="full" bg={card.overlay} />
                <Image
                  src={card.image}
                  alt={card.title}
                  objectFit="cover"
                  maxH="360px"
                />
              </Card.Root>
            ))}
          </Flex>
        </Box>

        <Button
          onClick={scrollPrev}
          disabled={prevDisabled}
          bg="#F6EEE5"
          borderRadius="20px"
          p={0}
          position="absolute"
          left="-15px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
        >
          <Image src="icons/arrow-features-left.svg" />
        </Button>
        <Button
          onClick={scrollNext}
          disabled={nextDisabled}
          bg="#F6EEE5"
          borderRadius="20px"
          p={0}
          position="absolute"
          right="-15px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
        >
          <Image src="icons/arrow-features-right.svg" />
        </Button>
      </Box>
    </Box>
  );
};

export default TrendingSection;
