import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  Text,
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
          <Heading mb={4} size={"3xl"}>
            Hi{/* 👋 */}, I{"'"}m Edgar
          </Heading>
          <Text fontSize={"2xl"} mb={4}>
            Computer Engineer Gradute from Aveiro, Portugal. I like to work on
            game and web development as a full-stack.
          </Text>
          <ButtonGroup colorScheme="blue">
            <Button variant="solid">View Projects</Button>
            <Button variant="outline">Curriculum</Button>
          </ButtonGroup>
        </GridItem>
        <GridItem>
          <Lottie loop animationData={lottieJson} play speed={0.5} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
