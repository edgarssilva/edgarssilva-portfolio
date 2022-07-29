import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMenu } from "react-icons/fi";

const links = [
  { href: "/", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/curriculum", label: "Curriculum" },
];

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box as="section" pb={{ base: "3", md: "6" }}>
      <Box as="nav" bg="bg-surface" py={{ base: "4", lg: "5" }}>
        <HStack spacing="10" justify="space-between">
          <Heading>Edgar Silva</Heading>
          <Spacer />
          {isDesktop ? (
            <Flex justify="space-evenly" flex="1">
              <ButtonGroup variant="link" spacing="8">
                {links.map((l, i) => (
                  <NextLink href={l.href} key={i}>
                    <Button key={i}>{l.label}</Button>
                  </NextLink>
                ))}
              </ButtonGroup>
            </Flex>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Box>
    </Box>
  );
}
