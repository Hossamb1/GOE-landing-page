"use client";
import {
  Dialog,
  Button,
  Input,
  Image,
  Portal,
  VStack,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const locations = [
  "Cairo, Egypt",
  "Sharm El-Sheikh, Egypt",
  "Hurghada, Egypt",
  "Luxor & Aswan, Egypt",
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Dialog.Root motionPreset="slide-in-top">
      <Dialog.Trigger
        bg="#44444425"
        borderRadius="full"
        boxSize="40px"
        cursor="pointer"
      >
        <Image src="/icons/search.svg" alt="Search Icon" m="auto" />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <VStack
              spacing={1}
              mt="30px"
              left={{ base: "-28%", xl: "-34%" }}
              w="350px"
              color="white"
              position="absolute"
            >
              {/* Search Input */}
              <Flex
                backdropFilter="blur(10px)"
                borderRadius="50px"
                bgColor="white/25"
                w="full"
                align="center"
              >
                <Image src="/icons/search.svg" alt="search" p={4} />
                <Input
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  _placeholder={{ color: "#D2AC71/75" }}
                  caretColor={searchQuery ? "white" : "black"}
                  fontSize="20px"
                  border={0}
                  outline="none"
                  color="white"
                />
              </Flex>
              <Box
                backdropFilter="blur(10px)"
                pt={5}
                bgColor="white/25"
                borderRadius="30px"
                w="full"
              >
                <Text
                  fontWeight="medium"
                  px={5}
                  fontSize="16px"
                  color="#D2AC71/75"
                >
                  {searchQuery ? "Locations" : "Most Popular"}
                </Text>
                {/* 📍 Location List */}{" "}
                {filteredLocations.length > 0 ? (
                  searchQuery ? (
                    filteredLocations.map((loc) => (
                      <Dialog.Trigger w="full" key={loc}>
                        <Box
                          w="full"
                          px={5}
                          py={2}
                          _hover={{ bg: "whiteAlpha.200", cursor: "pointer" }}
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
                              <Text fontSize="2xs" color="#F6EEE550">
                                City in Egypt
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Dialog.Trigger>
                    ))
                  ) : (
                    filteredLocations.slice(0, 3).map((loc) => (
                      <Dialog.Trigger w="full" key={loc}>
                        <Box
                          w="full"
                          px={5}
                          py={2}
                          _hover={{ bg: "whiteAlpha.200", cursor: "pointer" }}
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
                              <Text fontSize="2xs" color="#F6EEE550">
                                City in Egypt
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Dialog.Trigger>
                    ))
                  )
                ) : (
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.600"
                    w="full"
                    px={5}
                    py={2}
                    textAlign="center"
                  >
                    No results found.
                  </Text>
                )}
                <Dialog.Footer
                  py={3}
                  px={5}
                  mt={4}
                  boxShadow="0px -1px 5px 0px rgba(0, 0, 0, 0.10)"
                >
                  <Dialog.Trigger w="full" cursor="pointer">
                    <Flex
                      justifyContent="space-between"
                      w="full"
                      fontSize="10px"
                      fontWeight="medium"
                    >
                      <Text>
                        See all results{" "}
                        {searchQuery ? `for "${searchQuery}"` : 'in "Egypt"'}
                      </Text>
                      <Image src="/icons/arrow-right.svg" />
                    </Flex>
                  </Dialog.Trigger>
                </Dialog.Footer>
              </Box>
            </VStack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Search;
