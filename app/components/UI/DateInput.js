"use client";
import {
  Box,
  Menu,
  Image,
  Flex,
  Text,
  Grid,
  IconButton,
} from "@chakra-ui/react";

import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DateInput = ({ isLoggedIn }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();
  const isCurrentMonth =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();
  const nextMonth = month + 1;
  console.log(month);

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const nextFirstDay = new Date(year, nextMonth, 1);
  const nextLastDay = new Date(year, nextMonth + 1, 0);

  // Function to check if a date is in the past
  const isPastDate = (date) => {
    return date < new Date();
  };

  // Function to handle the previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Function to handle the next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const selectDate = (date) => {
    if (isPastDate(date)) return; // Do nothing if the date is in the past

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const isInRange = (date) => {
    if (startDate && endDate) {
      return date > startDate && date < endDate;
    }
    return false;
  };

  const isSameDate = (d1, d2) => d1.toDateString() === d2?.toDateString();

  // Generate days of the month for the current and next month
  const daysInMonth = [...Array(lastDay.getDate())].map(
    (_, i) => new Date(year, month, i + 1)
  );
  const nextMonthDays = [...Array(nextLastDay.getDate())].map(
    (_, i) => new Date(year, nextMonth, i + 1)
  );

  const blankDays = [...Array(firstDay.getDay())];
  const nextBlankDays = [...Array(nextFirstDay.getDay())];

  return (
    <Menu.Root zIndex={100} lazyMount>
      <Menu.Trigger
        h="full"
        w="full"
        fontWeight="semibold"
        cursor="pointer"
        position="relative"
      >
        {" "}
        <Box
          borderLeftWidth="0.5px"
          borderColor="black/20"
          top={{ base: "0px", md: "9px" }}
          h={{ base: "70px", md: "52px" }}
          position="absolute"
        />
        <Flex
          align="center"
          justify="center"
          px={2}
          gap="4"
          overflow="hidden"
          color="white"
        >
          <Image src="icons/Calendar.svg" alt="calendar" />
          {/* Display range result */}
          {startDate && endDate ? (
            <Text lineClamp="1">
              {startDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {endDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Text>
          ) : (
            <>Date</>
          )}
        </Flex>
      </Menu.Trigger>

      <Menu.Content
        p={4}
        py={8}
        left="0"
        top="75px"
        borderRadius="30px"
        backdropFilter={isLoggedIn ? "blur(17px)" : "blur(10px)"}
        bgColor={isLoggedIn ? "white/25" : "white/15"}
        w="full"
        position="absolute"
        color="white"
      >
        {/* Calendar */}
        <Flex justifyContent="space-evenly">
          {/* Current month */}
          <Box>
            <Flex justify="center" align="center" mb={4} position="relative">
              <IconButton
                aria-label="Previous Month"
                onClick={handlePrevMonth}
                variant="ghost"
                _hover={{ bg: "white/30" }}
                position="absolute"
                left="-20px"
                disabled={isCurrentMonth}
              >
                <Image
                  src={
                    isCurrentMonth
                      ? "icons/chevron_left.svg"
                      : "icons/chevron_left_white.svg"
                  }
                />
              </IconButton>
              <Text fontWeight="extrabold" fontSize={{ base: "xl", md: "2xl" }}>
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {year}
              </Text>
              <IconButton
                aria-label="Next Month"
                onClick={handleNextMonth}
                variant="ghost"
                _hover={{ bg: "white/30" }}
                position="absolute"
                display={{ base: "block", md: "none" }}
                right="-20px"
              >
                <Image src="icons/chevron-right.svg" />
              </IconButton>
            </Flex>

            <Grid templateColumns="repeat(7, 1fr)" gap={{ base: 1, md: 2 }}>
              {days.map((day) => (
                <Text
                  key={day}
                  fontWeight="medium"
                  fontSize="xs"
                  textAlign="center"
                >
                  {day}
                </Text>
              ))}

              {blankDays.map((_, i) => (
                <Box key={i} />
              ))}

              {daysInMonth.map((date) => {
                const selected =
                  isSameDate(date, startDate) || isSameDate(date, endDate);
                const inRange = isInRange(date);

                return (
                  <Box
                    key={date.toDateString()}
                    onClick={() => selectDate(date)}
                    w={{ base: "35px", md: 10 }}
                    py={{ base: "4px", md: "7px" }}
                    textDecor={isPastDate(date) ? "line-through" : "none"}
                    textAlign="center"
                    borderRadius="md"
                    borderWidth={isPastDate(date) ? "none" : "1px"}
                    borderColor="#D2AC71"
                    cursor="pointer"
                    bg={
                      isPastDate(date)
                        ? "#DAD2CA"
                        : inRange
                        ? "#EBDDBD"
                        : "#F6EEE5"
                    }
                    overflow="clip"
                    position="relative"
                    color={
                      isPastDate(date)
                        ? "#969696"
                        : selected
                        ? "white"
                        : inRange
                        ? "#C58F4A"
                        : "black"
                    }
                    _hover={{
                      bg: isPastDate(date) ? "gray.400" : "#D2AC71",
                    }}
                    opacity={isPastDate(date) ? 0.6 : 1}
                    pointerEvents={isPastDate(date) ? "none" : "auto"}
                  >
                    <Image
                      src={
                        startDate >= date
                          ? "icons/Polygon 2.svg"
                          : "icons/Polygon.svg"
                      }
                      position="absolute"
                      display={selected ? "block" : "none"}
                      top="-1px"
                      left={startDate >= date ? "-2px" : "2px"}
                    />
                    <Text zIndex={1} position="relative">
                      {date.getDate()}
                    </Text>
                  </Box>
                );
              })}
            </Grid>
          </Box>

          {/* Next month */}
          <Box display={{ base: "none", md: "block" }}>
            <Flex justify="center" align="center" mb={4} position="relative">
              <Text fontWeight="extrabold" fontSize="2xl">
                {new Date(year, month + 1, 1).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {new Date(year, month + 1, 1).getFullYear()}
              </Text>
              <IconButton
                aria-label="Next Month"
                onClick={handleNextMonth}
                variant="ghost"
                _hover={{ bg: "white/30" }}
                position="absolute"
                right="-20px"
              >
                <Image src="icons/chevron-right.svg" />
              </IconButton>
            </Flex>

            <Grid templateColumns="repeat(7, 1fr)" gap={2}>
              {days.map((day) => (
                <Text
                  key={day}
                  fontWeight="medium"
                  fontSize="xs"
                  textAlign="center"
                >
                  {day}
                </Text>
              ))}

              {nextBlankDays.map((_, i) => (
                <Box key={i} />
              ))}

              {nextMonthDays.map((date) => {
                const selected =
                  isSameDate(date, startDate) || isSameDate(date, endDate);
                const inRange = isInRange(date);

                return (
                  <Box
                    key={date.toDateString()}
                    onClick={() => selectDate(date)}
                    w={10}
                    py={{ base: "4px", md: "7px" }}
                    textDecor={isPastDate(date) ? "line-through" : "none"}
                    textAlign="center"
                    borderRadius="md"
                    borderWidth={isPastDate(date) ? "none" : "1px"}
                    borderColor="#D2AC71"
                    cursor="pointer"
                    bg={
                      isPastDate(date)
                        ? "#DAD2CA"
                        : inRange
                        ? "#EBDDBD"
                        : "#F6EEE5"
                    }
                    overflow="clip"
                    position="relative"
                    color={
                      isPastDate(date)
                        ? "#969696"
                        : selected
                        ? "white"
                        : inRange
                        ? "#C58F4A"
                        : "black"
                    }
                    _hover={{
                      bg: isPastDate(date) ? "gray.400" : "#D2AC71",
                    }}
                    opacity={isPastDate(date) ? 0.6 : 1}
                    pointerEvents={isPastDate(date) ? "none" : "auto"}
                  >
                    <Image
                      src={
                        startDate >= date
                          ? "icons/Polygon 2.svg"
                          : "icons/Polygon.svg"
                      }
                      position="absolute"
                      display={selected ? "block" : "none"}
                      top="-1px"
                      left={startDate >= date ? "-2px" : "2px"}
                    />
                    <Text zIndex={1} position="relative">
                      {date.getDate()}
                    </Text>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </Flex>
      </Menu.Content>
    </Menu.Root>
  );
};

export default DateInput;
