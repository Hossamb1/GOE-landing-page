"use client";
import { useState } from "react";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";

import { Box, Container } from "@chakra-ui/react";
import HotelsSection from "./components/sections/HotelsSection";
import PlacesSection from "./components/sections/PlacesSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TrendingSection from "./components/sections/TrendingSection";
import BookNowSection from "./components/sections/BookNowSection";
import Footer from "./components/layout/Footer";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Hero isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} h="full" />

      <Box bg="#121212">
        <Container maxW="1172px" px="16px">
          <HotelsSection />
          <PlacesSection />
          <FeaturesSection />
          <TrendingSection />
          <BookNowSection />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
