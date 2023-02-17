import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  AvatarBadge,
  useDisclosure,
  Text,
  Spacer,
} from "@chakra-ui/react";

// import type { ReactNode } from "react";
// import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import KEEPKEY_ICON from "lib/assets/png/keepkey.png";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [keepkeyConnected, setKeepKeyConnected] = useState(false);
  // const [keepkeyError, setKeepKeyError] = useState(false);
  // const [features, setKeepKeyFeatures] = useState({});

  const navigate = useNavigate();
  const handleToHome = () => navigate("/");
  const handleToDashboard = () => navigate("/dashboard");

  const onStart = async function () {
    try {
      // eslint-disable-next-line no-console
      console.log("onStart");
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setKeepKeyError("Bridge is offline!");
    }
  };

  // onStart()
  useEffect(() => {
    onStart();
  }, []); // once on startup

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
          <Avatar size="lg" src={KEEPKEY_ICON}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </MenuButton>
        <MenuList>
          <MenuItem>Link 1</MenuItem>
          <MenuItem>Link 2</MenuItem>
          <MenuDivider />
          <MenuItem>Link 3</MenuItem>
          <MenuItem>Link 3</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
