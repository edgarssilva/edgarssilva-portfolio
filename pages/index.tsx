import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/95348-coding-boy.json";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns={[null, null, "repeat(2,1fr)"]} gap={8}>
        <GridItem my="auto">
          <Box as="section" bg="bg-surface">
            <Container py={{ base: "16", md: "24" }}>
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
            </Container>
          </Box>
        </GridItem>
        <GridItem my="auto">
          <Container>
            <Lottie loop animationData={lottieJson} play speed={0.5} />
          </Container>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
