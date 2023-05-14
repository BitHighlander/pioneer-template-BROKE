import {
  Grid,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { KkRestAdapter } from "@keepkey/hdwallet-keepkey-rest";
import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { SDK } from "@pioneer-sdk/sdk";
import * as core from "@shapeshiftoss/hdwallet-core";
import axios from "axios";
import Context from "lib/context";
import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const handleInputChangeQuery = (e: any) => setQuery(e.target.value);
  // const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  // const { app, api, context, username, totalValueUsd } = useContext(Context);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [wallet, setWallet] = useState({});
  // const [app, setApp] = useState({});

  const onStart = async function () {
    try {
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return (
    <Grid gap={4}>
      <h2>Your App goes here!</h2>
    </Grid>
  );
};

export default Home;
