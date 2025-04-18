"use client";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Container,
  Drawer,
  CloseButton,
  Portal,
  Button,
  Link,
} from "@chakra-ui/react";

import Search from "../UI/Search";
import DropDownMenu from "../UI/dropdown";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Box as="nav" bg="#121212" px={4} py={4.5}>
      <Container
        centerContent
        padding={0}
        display="flex"
        flexDir="row"
        maxW="1140px"
      >
        <Flex w="100%" align="center" justifyContent="space-between">
          {/* Logo Section */}
          <Flex direction="column" align="center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              display={{ base: "none", lg: "block" }}
            />
            <Text color="white" fontSize="22px" fontWeight="normal" mt="-2px">
              <span className="font-semibold text-primary">Egy</span>
              Book
            </Text>
          </Flex>

          {/* Navigation */}
          <Flex
            align="center"
            gap={{ base: "21px", xl: "30px" }}
            display={{ base: "none", lg: "flex" }}
          >
            {/* Search Icon */}
            <Search />
            <span className="font-medium text-primary">GOE</span>
            <Link
              color="white"
              gap={0}
              href="/"
              fontSize={{ base: "14px", lg: "18px" }}
            >
              <span className="font-semibold text-primary">Egy</span>
              Book
            </Link>
            <Link
              color="white"
              gap={0}
              href="/"
              fontSize={{ base: "14px", lg: "18px" }}
            >
              <span className="font-semibold text-primary">Egy</span>
              Explore
            </Link>
            <Link
              color="white"
              gap={0}
              href="/"
              fontSize={{ base: "14px", lg: "18px" }}
            >
              <span className="font-semibold text-primary">Egy</span>
              Tales
            </Link>
            <Link
              color="white"
              gap={0}
              padding={0}
              fontSize={{ base: "14px", lg: "18px" }}
            >
              <span className="font-semibold text-primary">Egy</span>
              Treasure
            </Link>
          </Flex>

          {/* Auth section */}
          <Flex align="center" display={{ base: "none", lg: "flex" }}>
            <Image
              src="/icons/lang.svg"
              alt="language Icon"
              boxSize="23px"
              mr="6px"
            />
            <Text fontSize="24px" color="white" mr="24px">
              EN
            </Text>
            {!isLoggedIn ? (
              <Flex gap="4">
                <Button
                  fontSize="18px"
                  fontWeight="medium"
                  backgroundColor="#d2ac71"
                  borderRadius="12px"
                  paddingInline="24px"
                  onClick={() => setIsLoggedIn(true)}
                  _hover={{ bg: "#9d8156" }}
                >
                  Login
                </Button>
                <Button
                  fontSize="18px"
                  fontWeight="medium"
                  backgroundColor="#d2ac71"
                  borderRadius="12px"
                  paddingInline="24px"
                  _hover={{ bg: "#9d8156" }}
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign up
                </Button>
              </Flex>
            ) : (
              <>
                {" "}
                <Flex align="center">
                  <Box
                    borderLeftWidth="0.5px"
                    borderColor="white"
                    mr="12px"
                    h="50px"
                  />
                  <Button background="none" padding={0} my="auto">
                    <Image src="/icons/heart-white.svg" alt="Heart Icon" />
                  </Button>
                  <Button background="none" padding={0} my="auto">
                    <Image
                      src="/icons/shopping-cart.svg"
                      alt="Heart Icon"
                      mr="50px"
                    />
                  </Button>

                  <DropDownMenu setIsLoggedIn={setIsLoggedIn} />
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
        <Box display={{ base: "inline", lg: "none" }}>
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button bg="transparent" boxSize="30px" p="0">
                <Image src="/icons/Menu.svg" />
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content bg="#121212">
                  <Drawer.Header mt="30px">
                    <Drawer.Title>
                      {" "}
                      <Text color="white" fontSize="32px" fontWeight="normal">
                        <span className="font-semibold text-primary">Egy</span>
                        Book
                      </Text>
                    </Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Flex flexDir="column" align="flex-start" gap={8} py={6}>
                      {!isLoggedIn ? (
                        <>
                          <Flex align="center">
                            <Image
                              src="/icons/lang.svg"
                              alt="language Icon"
                              mr="6px"
                            />
                            <Text fontSize="32px" color="white" mr="24px">
                              EN
                            </Text>
                          </Flex>
                          <Button
                            fontSize="32px"
                            fontWeight="medium"
                            backgroundColor="transparent"
                            boxSize="fit"
                            p={0}
                            onClick={() => setIsLoggedIn(true)}
                            _active={{ color: "#ccc" }}
                          >
                            Login
                          </Button>
                          <Button
                            fontSize="32px"
                            fontWeight="medium"
                            boxSize="fit"
                            backgroundColor="transparent"
                            p={0}
                            onClick={() => setIsLoggedIn(true)}
                            _active={{ color: "#ccc" }}
                          >
                            Sign up
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            background="none"
                            padding={0}
                            fontSize="32px"
                            boxSize="fit"
                            fontWeight="normal"
                            _active={{ color: "#ccc" }}
                          >
                            <Image
                              src="/icons/heart-white.svg"
                              alt="Heart Icon"
                            />
                            Wishlist
                          </Button>
                          <Button
                            background="none"
                            padding={0}
                            fontSize="32px"
                            boxSize="fit"
                            fontWeight="normal"
                            _active={{ color: "#ccc" }}
                          >
                            <Image
                              src="/icons/shopping-cart.svg"
                              alt="Shopping Cart"
                            />
                            Cart
                          </Button>
                          <Flex align="center">
                            <Image
                              src="/icons/lang.svg"
                              alt="language Icon"
                              ml="4px"
                              mr="12px"
                            />
                            <Text fontSize="32px" color="white">
                              EN
                            </Text>
                          </Flex>
                          <Flex flexDir="column" gap={5}>
                            <Heading
                              fontSize="28px"
                              fontWeight="medium"
                              color="#d2ac71"
                            >
                              My profile
                            </Heading>
                            <Button
                              background="none"
                              padding={0}
                              fontSize="28px"
                              boxSize="fit"
                              fontWeight="normal"
                              _active={{ color: "#ccc" }}
                            >
                              Invite friends
                            </Button>{" "}
                            <Button
                              background="none"
                              padding={0}
                              fontSize="28px"
                              boxSize="fit"
                              fontWeight="normal"
                              _active={{ color: "#ccc" }}
                            >
                              Saved deals
                            </Button>{" "}
                            <Button
                              background="none"
                              padding={0}
                              fontSize="28px"
                              boxSize="fit"
                              fontWeight="normal"
                              _active={{ color: "#ccc" }}
                            >
                              Settings
                            </Button>
                            <Button
                              background="none"
                              color="#FF3B30"
                              padding={0}
                              fontSize="28px"
                              boxSize="fit"
                              fontWeight="normal"
                              _active={{ color: "#d92318" }}
                              onClick={() => setIsLoggedIn(false)}
                            >
                              Log out
                            </Button>
                          </Flex>
                        </>
                      )}
                    </Flex>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Image src="/images/LOGO.png" m="auto" />
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" color="white" bg="transparent" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
