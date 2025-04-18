"use client";

import { Box, Menu, Image, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const locations = [
  "Cairo, Egypt",
  "Sharm El-Sheikh, Egypt",
  "Hurghada, Egypt",
  "Luxor & Aswan, Egypt",
];

const LocationInput = ({ isLoggedIn }) => {
  const [selectedLocation, setSelectedLocation] = useState("Location");

  return (
    <Menu.Root zIndex={100} lazyMount>
      <Menu.Trigger
        h="full"
        w="full"
        fontWeight="semibold"
        cursor="pointer"
        position="relative"
      >
        <Flex align="center" justify="center" px={2} gap="4" color="white">
          <Image src="/icons/location.svg" alt="location" />
          {selectedLocation}
        </Flex>
      </Menu.Trigger>

      <Menu.Content
        spacing={1}
        backdropFilter={isLoggedIn ? "blur(17px)" : "blur(10px)"}
        bgColor={isLoggedIn ? "white/25" : "white/15"}
        py={5}
        px={0}
        w={{ base: "fit", md: "25%" }}
        top="75px"
        position="absolute"
        borderRadius="30px"
      >
        {locations.map((loc) => (
          <Menu.Item
            key={loc}
            color="white"
            w="full"
            px={5}
            py={2}
            _hover={{ bg: "white/10", cursor: "pointer" }}
            onClick={() => setSelectedLocation(loc)}
            textAlign="left"
          >
            <Flex gap={4} align="center">
              <Image
                src="/icons/location_on.svg"
                alt="location"
                boxSize="46px"
              />
              <Box lineHeight="1">
                {loc.split(",")[0]}
                <Text fontSize="2xs" color="#F6EEE5/50">
                  City in Egypt
                </Text>
              </Box>
            </Flex>
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default LocationInput;
