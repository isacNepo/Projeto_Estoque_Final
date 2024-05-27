import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={2240}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
 
      background= "#363636"
      color="gray.900"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Flex justifyContent="center">
      <img width={60} 
            src="https://i.im.ge/2023/06/03/h3YwaX.logo2.png"
            alt="Workflow"
      />
      </Flex>
    </Flex>
  );
};

export default Header;
