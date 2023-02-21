import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

// import type { ReactNode } from "react";
// import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import KEEPKEY_ICON from "lib/assets/png/keepkey.png";
import PIONEER_ICON from "lib/assets/png/pioneer.png";
// import Context from "lib/context";
import { usePioneer } from "lib/context/Pioneer";

import ThemeToggle from "./ThemeToggle";

// const Pioneer = new PioneerService();

const Header = () => {
  const { state } = usePioneer();
  const { api, user } = state;
  const { wallets, walletDescriptions, balances, pubkeys } = user;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [pioneerConnected, setPioneerConnected] = useState(false);

  // const [user, setUser] = useState({
  //   username: undefined,
  //   context: undefined,
  //   totalValueUsd: undefined,
  // });

  // const [keepkeyError, setKeepKeyError] = useState(false);
  // const [features, setKeepKeyFeatures] = useState({});

  const navigate = useNavigate();
  const handleToHome = () => navigate("/");
  const handleToDashboard = () => navigate("/dashboard");

  const onStart = async function () {
    try {
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  // onStart()
  useEffect(() => {
    onStart();
  }, [state, state.api]); // once on startup

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <Flex
      as="header"
      width="full"
      alignSelf="flex-start"
      gridGap={2}
      alignItems="center"
    >
      <IconButton
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Open Menu"
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={handleToHome}>
          <Box>Pioneer Template</Box>
        </Link>
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link onClick={handleToDashboard}>
            <Text color="gray.500" fontSize="sm">
              Dashboard
            </Text>
          </Link>
        </HStack>
      </HStack>
      <ThemeToggle />
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={0}
        >
          <Avatar size="lg" src={PIONEER_ICON}>
            {api ? (
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            ) : (
              <AvatarBadge boxSize="1.25em" bg="red.500" />
            )}
          </Avatar>
        </MenuButton>
        <MenuList>
          <MenuItem>{state.username}</MenuItem>
          {/* <MenuItem>context: {user.context || "not Paired"}</MenuItem> */}
          {/* <MenuDivider /> */}
          {/* <MenuItem>Total Value(usd): {user.totalValueUsd}</MenuItem> */}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
