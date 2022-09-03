import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  technologies: string[];
}

const Project = (props: ProjectProps) => {
  return (
    <Flex
      bg="white"
      // _dark={{ bg: "gray.800" }}
      // shadow={{ lg: "lg" }}
      // rounded={{ lg: "lg" }}
      direction={["column", "row"]}
      p={8}
      gap={8}
    >
      <Flex direction={"column"} wrap="nowrap" flex={1}>
        <Box
          w={"100%"}
          h="350"
          rounded={{ lg: "lg" }}
          bgSize="cover"
          position={"relative"}
          // bg="#f8f9fa"
          /*   style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
          }} */
        >
          <NextImage src={props.image} layout="fill" objectFit="contain" />
        </Box>
        <Box>
          <chakra.h3
            pt={4}
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="semibold"
          >
            Technologies
          </chakra.h3>

          <SimpleGrid
            as="ul"
            columns={[1, 2, 2, 3]}
            _dark={{ color: "gray.400" }}
            fontSize={"md"}
            // listStyleType="none"
          >
            {props.technologies.map((tech, i) => (
              <chakra.li key={i} ml="5">
                {tech}
              </chakra.li>
            ))}
          </SimpleGrid>
        </Box>

        <Stack direction={["column", "row"]} mt={6} spacing={4}>
          <Link
            href={props.url}
            target="_blank"
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.800" }}
          >
            <Flex align={"center"} justifyContent={"center"}>
              Live Preview
            </Flex>
          </Link>
          <Link
            href={props.github}
            target="_blank"
            bg="gray.200"
            color="gray.900"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.100" }}
          >
            <Flex align={"center"} justifyContent={"center"}>
              <FaGithub />
              <chakra.span ml={2}>Source Code</chakra.span>
            </Flex>
          </Link>
        </Stack>
      </Flex>

      <Container m={0}>
        <chakra.h2
          fontSize={{ base: "2xl", md: "3xl" }}
          color="gray.800"
          _dark={{ color: "white" }}
          fontWeight="bold"
        >
          {props.name}{" "}
        </chakra.h2>
        <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          {props.description}
        </chakra.p>
      </Container>
    </Flex>
  );
};

Project.defaultProps = {
  name: "JERR",
  description:
    "A software managent web applicationA software managent web applicationA software managent web applicationA software managent web applicationA software managent web ",
  image: require("../assets/jerr.png"),
  url: "https://jerr.pt",
  github: "https://github.com/edgarssilva/jerr",
  technologies: [
    "React.js",
    "Node.js",
    "Moleculer.js",
    "Mantine",
    "Heroku",
    "Docker",
    "Chakra UI",
    "TypeScript",
    "Sass",
  ],
};

export default Project;
