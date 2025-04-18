"use client";

import { useEffect, useState, useCallback } from "react";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

const PlacesSection = () => {
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
      location: "Red Sea",
      image: "images/main-swimming-pool.png",
    },
    {
      location: "Soma Bay",
      image: "images/soma-bay-hotel.png",
    },
    {
      location: "Giza",
      image: "images/lunch-from-our-roof.png",
    },
    {
      location: "Nile",
      image: "/images/rooftop-pool-during-sunset.png",
    },
    {
      location: "Nabq Bay",
      image: "images/pool-outdoor.png",
    },
    {
      location: "Other",
      image: "images/local-market.png",
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
        Discover New Places
      </Text>
      <Box position="relative">
        <Box ref={emblaRef} overflow="hidden">
          <Flex gap={4}>
            {cards.map((card, index) => (
              <Card.Root
                key={index}
                border={0}
                borderRadius="24px"
                flex={{ base: "0 0 40%", md: "0 0 25%", lg: "0 0 18%" }}
                h="fit"
              >
                <Text
                  position="absolute"
                  left="10%"
                  bottom="16px"
                  textShadow="0 2px 2px rgba(0, 0, 0, 0.5)"
                  zIndex={1}
                  color="#F6EEE5"
                  fontWeight="semibold"
                  fontSize={{ base: "14px", md: "20px" }}
                >
                  {card.location}
                </Text>

                <Image
                  position="relative"
                  src={card.image}
                  alt={card.title}
                  objectFit="cover"
                  borderRadius="24px"
                  maxH="300px"
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

export default PlacesSection;
