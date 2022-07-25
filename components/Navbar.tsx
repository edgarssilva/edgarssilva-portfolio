import { Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const links = [
  { href: "/", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
  { href: "/curriculum", label: "Curriculum" },
];

export default function Navbar() {
  return (
    <Flex
      as="header"
      direction={"row"}
      wrap={"nowrap"}
      py={4}
      px={6}
      bg="gray.100"
      minWidth="max-content"
      alignItems="center"
    >
      <Heading>Edgar Silva</Heading>
      <Spacer />
      <HStack spacing={6}>
        {links.map((l, i) => (
          <NextLink href={l.href} key={i}>
            <Link fontWeight={"medium"}>{l.label}</Link>
          </NextLink>
        ))}
      </HStack>
    </Flex>
  );
}
