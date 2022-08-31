import {
  Box,
  Button,
  chakra,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import Photo from "../assets/Edgar Silva.jpg";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const Home: NextPage = () => {
  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    //@ts-ignore
    import("../assets/95348-coding-boy.json").then(setAnimationData);
  }, []);

  return (
    <Container as="main" maxW={"container.xl"}>
      <Navbar />
      <section>
        <Grid
          templateColumns={[null, null, "repeat(2,1fr)"]}
          gap={8}
          // py={{ base: "8", md: "12" }}
        >
          <GridItem my="auto">
            <Box as="section" bg="bg-surface">
              <Stack spacing={{ base: "8", md: "10" }}>
                <Stack spacing={{ base: "4", md: "5" }} /*  align="center" */>
                  <Heading
                    size={useBreakpointValue({ base: "2xl", md: "2xl" })}
                  >
                    Hi{/* 👋 */}, I{"'"}m Edgar
                  </Heading>
                  <Text
                    color="muted"
                    maxW="2xl"
                    // textAlign="center"
                    fontSize="xl"
                  >
                    Computer Engineer Gradute from Aveiro, Portugal. I like to
                    work on game and web development as a full-stack.
                  </Text>
                </Stack>
                <Stack
                  spacing="3"
                  direction={{ base: "column", sm: "row" }}
                  // justify="center"
                >
                  <Button variant="outline" colorScheme="teal" size="lg">
                    Curriculum
                  </Button>
                  <Button variant="solid" colorScheme="teal" size="lg">
                    My Projects
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </GridItem>
          <GridItem my="auto">
            <Lottie
              loop
              animationData={animationData}
              play
              speed={0.5}
              style={{
                height: "300px",
              }}
              // py={{ base: "8", md: "12" }}
            />
          </GridItem>
        </Grid>
      </section>
      <chakra.section py={8}>
        <Heading as="h2" pb={8}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2, 3]} spacing={8}>
          <Project />
          <Project />
          <Project />
        </SimpleGrid>
      </chakra.section>
      <chakra.section py={8}>
        <Heading as="h2" pb={8}>
          About Me
        </Heading>
        <Box boxSize={"xs"} position="relative">
          <Image
            src={Photo}
            layout="fill"
            objectFit="cover"
            alt="Photo of Edgar Silva"
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </chakra.section>
    </Container>
  );
};

export default Home;
