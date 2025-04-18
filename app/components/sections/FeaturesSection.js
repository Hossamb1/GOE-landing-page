"use client";

import { Box, Grid, Text, Image, Flex } from "@chakra-ui/react";

const FeaturesSection = () => {
  return (
    <Box py={7} color="#F6EEE5">
      <Text fontSize={{ base: "26px", md: "40px" }} fontWeight="bold" mb={12}>
        Why Choose <span className="font-semibold text-primary">Egy</span>Book?
      </Text>

      <Grid
        templateColumns="repeat(auto-fill, minmax(330px, 1fr))"
        gap={4}
        textAlign={{ base: "center", md: "left" }}
        alignItems="start"
        justifyItems="center"
      >
        {/* Feature 1 */}
        <Box maxW="330px">
          <Flex
            h="65px"
            align="center"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Image src="icons/mouse-click.svg" alt="Smart Booking" />
          </Flex>
          <Text
            my={{ base: "10px", md: "20px" }}
            fontSize="22px"
            fontWeight="bold"
          >
            <span className="font-light text-primary">Seamless</span> &{" "}
            <span className="font-bold text-[#346D52]">Smart</span> Booking
          </Text>
          <Text fontSize="18px" fontWeight="medium">
            Quick, user-friendly platform that simplifies the reservation
            process.
          </Text>
        </Box>

        {/* Feature 2 */}
        <Box maxW="330px">
          <Flex
            h="65px"
            align="center"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Image src="icons/vr-label.svg" alt="VR Preview" />
          </Flex>
          <Text
            my={{ base: "10px", md: "20px" }}
            fontSize="22px"
            fontWeight="bold"
          >
            <span className="font-bold italic text-[#346D52] mr-1">
              Immersive
            </span>{" "}
            VR Previews
          </Text>
          <Text fontSize="18px" fontWeight="medium">
            Explore hotels and rooms in 360° before you book—giving you total
            confidence.
          </Text>
        </Box>

        {/* Feature 3 */}
        <Box maxW="330px">
          <Flex
            h="65px"
            align="center"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Image src="icons/piggy-bank.svg" alt="Best Price" />
          </Flex>
          <Text
            my={{ base: "10px", md: "20px" }}
            fontSize="22px"
            fontWeight="bold"
          >
            <span className="font-bold text-[#346D52] mr-1">Exclusive</span>{" "}
            Best-Price Deals
          </Text>
          <Text fontSize="18px" fontWeight="medium">
            Save more with special offers and real-time price comparisons.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
