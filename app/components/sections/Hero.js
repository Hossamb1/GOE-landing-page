"use client";
import { useState } from "react";
import {
  Box,
  Button,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  Container,
} from "@chakra-ui/react";
import LocationInput from "../UI/LocationInput";
import DateInput from "../UI/DateInput";
import GuestsAndRoomsInput from "../UI/guestsinput";

const Hero = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(null);

  function handleOpenState(InputId) {
    setIsOpen(isOpen === InputId ? null : InputId);
  }

  return (
    <Box
      position="relative"
      bgImage="url('/images/HeroBG.png')"
      bgSize="cover"
      bgPosition="center"
      minH="85vh"
      objectFit="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="black/60"
        zIndex={0}
      />

      <Container maxW="1140px">
        <Box color="#F6EEE5" fontWeight="semibold" spaceY={1} py={6}>
          <Text fontSize="20px" pb={1}>
            <Image
              src="/icons/Navigation.svg"
              alt="nav"
              display="inline"
              mr="10px"
            />
            Egypt
          </Text>
          <Text fontSize={{ base: "24px", md: "40px" }} lineHeight={1.25}>
            Hey{isLoggedIn ? ", Hossam!" : "!"} <br />
            Tell us where you want to stay
          </Text>
          <Text fontWeight="medium" fontSize={{ base: "16px", md: "24px" }}>
            Book 450+ Curated Egyptian Hotels
          </Text>
        </Box>

        <SimpleGrid
          align="center"
          columns={{ base: 2, md: 4 }}
          spacing={4}
          mx={4}
          minH={{ base: "220px", md: "70px" }}
          position="relative"
        >
          <Box
            borderRadius={{ base: "8px", md: "50px" }}
            top="0"
            minH={{ base: "135px", md: "70px" }}
            w={{ base: "full", md: "calc(100% + 9px)" }}
            textAlign="center"
            position="absolute"
            bg={isLoggedIn ? "white/25" : "white/15"}
            backdropFilter={isLoggedIn ? "blur(17px)" : "blur(10px)"}
          />

          <LocationInput
            isOpen={isOpen}
            isLoggedIn={isLoggedIn}
            onClick={() => handleOpenState("location")}
          />

          <DateInput
            isOpen={isOpen}
            isLoggedIn={isLoggedIn}
            onClick={() => handleOpenState("date")}
          />
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <GuestsAndRoomsInput
              isOpen={isOpen}
              isLoggedIn={isLoggedIn}
              onClick={() => handleOpenState("guestsAndRooms")}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }} display="flex">
            <Button
              bgColor="#346D52"
              color="#F6EEE5"
              w="full"
              borderRadius="full"
              fontWeight="semibold"
              fontSize="16px"
              _hover={{ bg: "#296347" }}
              align="center"
              my="auto"
              py={6}
            >
              Explore Stays
            </Button>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
