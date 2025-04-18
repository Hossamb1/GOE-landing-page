"use client";

import { useEffect, useState, useCallback } from "react";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

const HotelsSection = () => {
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
      title: "Kempinski Hotel Soma Bay",
      description: "From $214 per person",
      location: "Soma Bay",
      rating: "4.7 (1,274)",
      image: "images/gepflegte-anlage.png",
    },
    {
      title: "JW Marriott Hotel Cairo",
      description: "From $194 per person",
      location: "Cairo",
      rating: "4.6 (2,274)",
      image: "images/hotel-on-lake.png",
    },
    {
      title: "Kempinski Hotel Soma Bay",
      description: "From $214 per person",
      location: "Soma Bay",
      rating: "4.7 (1,274)",
      image: "images/gepflegte-anlage.png",
    },
    {
      title: "JW Marriott Hotel Cairo",
      description: "From $194 per person",
      location: "Cairo",
      rating: "4.6 (2,274)",
      image: "images/hotel-on-lake.png",
    },
    {
      title: "Kempinski Hotel Soma Bay",
      description: "From $214 per person",
      location: "Soma Bay",
      rating: "4.7 (1,274)",
      image: "images/gepflegte-anlage.png",
    },
    {
      title: "JW Marriott Hotel Cairo",
      description: "From $194 per person",
      location: "Cairo",
      rating: "4.6 (2,274)",
      image: "images/hotel-on-lake.png",
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
        The Most Relevant
      </Text>
      <Box position="relative">
        <Box ref={emblaRef} overflow="hidden">
          <Flex gap={4}>
            {cards.map((card, index) => (
              <Card.Root
                key={index}
                borderRadius="42px"
                border={0}
                overflow="hidden"
                position="relative"
                flex={{ base: "0 0 80%", md: "0 0 55%", lg: "0 0 40%" }}
              >
                <Flex
                  position="absolute"
                  top="16px"
                  justifyContent="space-between"
                  w="full"
                  px={4}
                  zIndex={1}
                >
                  <Box
                    bg="#F6EEE5"
                    color="#346D52"
                    borderRadius="20px"
                    padding="6px 12px"
                    h="fit"
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    {card.location}
                  </Box>
                  <Image
                    src="/icons/Heart.svg"
                    borderRadius="full"
                    p={{ base: 1, md: 2 }}
                    border="1px solid #D2AC71"
                    bg="#F6EEE5"
                  />
                </Flex>

                <Image
                  src={card.image}
                  alt={card.title}
                  objectFit="cover"
                  maxH="300px"
                  borderRadius="42px"
                />

                <Card.Body
                  p={{ base: "12px", md: "24px 16px" }}
                  justifyContent="space-between"
                  align="center"
                  flexDir="row"
                >
                  <Box>
                    <Text
                      fontSize={{ base: "12px", md: "16px" }}
                      fontWeight="bold"
                      lineClamp="1"
                    >
                      {card.title}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "16px" }} mt="-6px">
                      {card.description}
                    </Text>
                  </Box>
                  <Flex mt="4px" justifyContent="flex-end" flexBasis="100px">
                    <Image
                      src="icons/star.svg"
                      alt="star"
                      boxSize="16px"
                      mt="1px"
                    />
                    <Text
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight="medium"
                    >
                      {card.rating}
                    </Text>
                  </Flex>
                </Card.Body>
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

export default HotelsSection;
