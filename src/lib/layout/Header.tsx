import { Box, Flex } from "@chakra-ui/react";
// import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { useEffect } from "react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  // const [keepkeyConnected, setKeepKeyConnected] = useState(false);
  // const [keepkeyError, setKeepKeyError] = useState(false);
  // const [features, setKeepKeyFeatures] = useState({});

  const onStart = async function () {
    try {

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
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto">
        <div>
        </div>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
