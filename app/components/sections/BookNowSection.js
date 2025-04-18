import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const BookNowSection = () => {
  return (
    <Flex
      mt={8}
      mx="auto"
      bg="#BFDBC9"
      maxW={{ base: "400px", md: "full" }}
      borderRadius="24px"
      align="center"
      justify="center"
      textAlign={{ base: "center", md: "left" }}
    >
      {/* Text Area */}
      <Box px={6} py={10} color="#0F1F18" spaceY={5} lineHeight="normal">
        <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight="Bold">
          Ready to Book Your Next Adventure?
        </Text>
        <Text fontSize={{ base: "16px", lg: "24px" }}>
          Get exclusive deals and immersive previews with our smart booking
          platform.
        </Text>
        <Button
          bg="#458465"
          _active={{ bg: "#296347" }}
          w="75%"
          h="45px"
          borderRadius="20px"
          fontSize="20px"
        >
          Book Now
        </Button>
      </Box>

      {/* Image Area */}
      <Image
        src="images/hotel-island.png"
        display={{ base: "none", md: "block" }}
        alt="hotel island"
        h={{ md: "350px", lg: "450px" }}
      />
    </Flex>
  );
};

export default BookNowSection;
