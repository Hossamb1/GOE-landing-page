"use client";
import { useState } from "react";
import { Box, Menu, Flex, Text, IconButton, Image } from "@chakra-ui/react";

const Counter = ({ label, subLabel, value, setValue, total }) => {
  const isMaxReached =
    (label === "Adults" || label === "Children") && total >= 16;

  return (
    <Flex w="100%" justify="space-between" align="center" px={4} py={2}>
      <Box lineHeight="1" pt={1}>
        <Text fontWeight="semibold">{label}</Text>
        <span className="text-[12px]! font-medium text-[#B7B7B7]">
          {subLabel}
        </span>
      </Box>
      <Flex align="center" gap={2}>
        <IconButton
          size="sm"
          bg="transparent"
          border="1px solid"
          borderColor="white/30"
          borderRadius="full"
          disabled={value === 0}
          aria-label={`decrease ${label}`}
          onClick={() => setValue(Math.max(0, value - 1))}
        >
          <Image src="/icons/Minus.svg" />
        </IconButton>
        <Text w={5} textAlign="center">
          {value}
        </Text>
        <IconButton
          size="sm"
          bg="transparent"
          border="1px solid"
          borderColor="white/30"
          borderRadius="full"
          aria-label={`increase ${label}`}
          disabled={isMaxReached || (label === "Rooms" && value >= 6)}
          onClick={() => setValue(value + 1)}
        >
          <Image src="/icons/Plus.svg" />
        </IconButton>
      </Flex>
    </Flex>
  );
};

const GuestsAndRoomsInput = ({ isLoggedIn }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);

  const label =
    adults || rooms
      ? `${adults + children} Guest${
          adults + children > 1 ? "s" : ""
        } · ${rooms} Room${rooms > 1 ? "s" : ""}`
      : "Guests & rooms";

  return (
    <Menu.Root h="full">
      <Menu.Trigger
        h="full"
        w="full"
        borderTop="0.5px solid"
        borderColor="black/20"
        fontWeight="semibold"
        cursor="pointer"
        position="relative"
      >
        <Box
          borderLeftWidth={{ base: "0", md: "0.5px" }}
          borderColor="black/20"
          top="9px"
          h="52px"
          position="absolute"
        />
        <Flex align="center" justify="center" px={2} gap="4" overflow="hidden">
          <Image src="/icons/Users.svg" alt="Users" />
          <Text lineClamp="1" color="#F6EEE5">
            {label}
          </Text>
        </Flex>
      </Menu.Trigger>

      <Menu.Content
        spacing={1}
        zIndex={100}
        mt="5px"
        backdropFilter={isLoggedIn ? "blur(17px)" : "blur(10px)"}
        bgColor={isLoggedIn ? "white/25" : "white/15"}
        py={5}
        borderRadius="30px"
        left="50"
        minW="25%"
        position="absolute"
        color="white"
      >
        <Counter
          label="Adults"
          value={adults}
          subLabel="Age 18 or above"
          setValue={setAdults}
          total={adults + children}
        />
        <Counter
          label="Children"
          value={children}
          subLabel="under 18"
          setValue={setChildren}
          total={adults + children}
        />
        <Counter label="Rooms" value={rooms} setValue={setRooms} />
        <Text fontSize="xs" fontWeight="medium" color="#B7B7B7" px="6px" pt={3}>
          You can search for up to 16 travelers
        </Text>
      </Menu.Content>
    </Menu.Root>
  );
};

export default GuestsAndRoomsInput;
