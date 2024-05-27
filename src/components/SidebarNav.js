import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#363636">
          CADASTRO
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "#696969" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "#4F4F4F" : ""}
          >
            <Link href="/">
              <Text fontSize="md" fontWeight="medium" color="black">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#363636">
          ESTOQUE
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "#696969" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/balance" ? "#4F4F4F" : ""}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="black">
                SALDO
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "#696969" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockEntries" ? "#4F4F4F" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="black">
                ENTRADAS
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "#696969" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockOutputs" ? "#4F4F4F" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="black">
                SAÍDAS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
