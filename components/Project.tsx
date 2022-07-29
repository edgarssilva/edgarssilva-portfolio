import { Box, chakra, Flex, Icon, Image } from "@chakra-ui/react";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

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
    <Box
      w={64}
      bg="white"
      _dark={{ bg: "gray.800" }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Image
        w="full"
        h={40}
        fit="cover"
        objectPosition="center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />

      <Box py={4} px={6}>
        <chakra.h1
          fontSize="xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{ color: "white" }}
        >
          {props.name}
        </chakra.h1>

        <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
          {props.description}
        </chakra.p>

        <Flex
          alignItems="center"
          mt={4}
          color="gray.700"
          _dark={{ color: "gray.200" }}
        >
          <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            Choc UI
          </chakra.h1>
        </Flex>

        <Flex
          alignItems="center"
          mt={4}
          color="gray.700"
          _dark={{ color: "gray.200" }}
        >
          <Icon as={MdLocationOn} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            California
          </chakra.h1>
        </Flex>
        <Flex
          alignItems="center"
          mt={4}
          color="gray.700"
          _dark={{ color: "gray.200" }}
        >
          <Icon as={MdEmail} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            patterson@example.com
          </chakra.h1>
        </Flex>
      </Box>
    </Box>
  );
};

Project.defaultProps = {
  name: "JERR",
  description: "A software managent web application",
  image: "",
  url: "https://jerr.pt",
  github: "",
  technologies: [],
};

export default Project;
