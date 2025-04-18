import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Button,
  Container,
  Grid,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#121212" color="#F6EEE5" overflow="hidden">
      <Container maxW="1140px" position="relative" pt={20} pb={4} zIndex={2}>
        <Flex
          justifyContent="space-between"
          align={{ base: "center", md: "flex-end" }}
          gap={{ base: 10, md: 0 }}
          justifyItems="center"
          textAlign={{ base: "center", md: "left" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box spaceY={8} flexBasis="40%">
            <Image
              src="images/logo-2.png"
              alt="logo"
              h={16}
              m={{ base: "auto", md: "0" }}
            />
            <Text
              m={{ base: "auto", md: "0" }}
              fontSize={{ base: "30px", lg: "36px" }}
              fontWeight="semibold"
              lineHeight={1.2}
              maxW="400px"
            >
              Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
            </Text>
            <Button
              bg="#d2ac71"
              borderRadius="20px"
              px={7}
              h="45px"
              fontSize="20px"
              fontWeight="semibold"
              _hover={{ bg: "#9d8156" }}
            >
              Discover More
            </Button>
            <Flex
              align="center"
              justifyContent="center"
              gap={{ base: "10px", xl: "30px" }}
            >
              <Link
                columnSpan={4}
                color="white"
                gap={0}
                href="/"
                fontSize={{ base: "12px", lg: "18px" }}
              >
                Home
              </Link>
              <Link
                color="white"
                gap={0}
                href="/"
                fontSize={{ base: "12px", lg: "18px" }}
              >
                <span className="font-semibold text-primary">Egy</span>
                Book
              </Link>
              <Link
                color="white"
                gap={0}
                href="/"
                fontSize={{ base: "12px", lg: "18px" }}
              >
                <span className="font-semibold text-primary">Egy</span>
                Explore
              </Link>

              <Link
                color="white"
                gap={0}
                href="/"
                fontSize={{ base: "12px", lg: "18px" }}
              >
                <span className="font-semibold text-primary">Egy</span>
                Tales
              </Link>
              <Link
                color="white"
                gap={0}
                padding={0}
                fontSize={{ base: "12px", lg: "18px" }}
              >
                <span className="font-semibold text-primary">Egy</span>
                Treasure
              </Link>
            </Flex>
          </Box>
          <Box textAlign="right" m={{ base: "auto", md: "0" }}>
            <Flex
              h={{ base: "50px", md: "60px" }}
              justifyContent="space-between"
              gap={4}
            >
              <Image src="icons/instagram.svg" alt="instagram icon" />
              <Image src="icons/facebook.svg" alt="facebook icon" />
              <Image src="icons/tiktok.svg" alt="tiktok icon" />
              <Image src="icons/twitter.svg" alt="twitter icon" />
              <Image src="icons/linkedIn.svg" alt="LinkedIn icon" />
            </Flex>
            <Text fontSize="20px" mt="18px">
              {" "}
              Copyright Gates of Egypt © 2024 <br />
              All rights reserved
            </Text>
          </Box>
          <Box
            position="absolute"
            top="30%"
            left="-10%"
            width="120%"
            borderRadius="50%"
            height="150%"
            bg="#D2AC7130"
            opacity={0.5}
            filter="blur(80px)"
            zIndex={-1}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
