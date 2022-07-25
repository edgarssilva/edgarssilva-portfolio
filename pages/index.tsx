import { Grid, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Grid>
        <Heading mb={4} size={"3xl"}>
          Hi, I{"'"}m Edgar
        </Heading>
        <Text fontSize={"2xl"}>
          Computer Engineer Gradute from Aveiro, Portugal. I like to work on
          game and web development as a full-stack.
        </Text>
      </Grid>
    </>
  );
};

export default Home;
