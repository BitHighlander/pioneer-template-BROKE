import { Grid, useDisclosure } from "@chakra-ui/react";
import { KkRestAdapter } from "@keepkey/hdwallet-keepkey-rest";
import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { SDK } from "@pioneer-sdk/sdk";
import * as core from "@shapeshiftoss/hdwallet-core";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [wallet, setWallet] = useState({});
  const [app, setApp] = useState({});

  const onStart = async function () {
    try {
      const serviceKey = "135085f0-5c73-4bb1-abf0-04ddfc710b07";
      const config: any = {
        apiKey: serviceKey,
        pairingInfo: {
          name: "ShapeShift",
          imageUrl: "https://assets.coincap.io/assets/icons/fox@2x.png",
          basePath: "http://localhost:1646/spec/swagger.json",
          url: "https://pioneer-template.vercel.com",
        },
      };
      const sdk = await KeepKeySdk.create(config);
      // eslint-disable-next-line no-console
      console.log(config.apiKey);
      const keyring = new core.Keyring();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const walletInit = await KkRestAdapter.useKeyring(keyring).pairDevice(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sdk
      );
      setWallet(walletInit);
      // eslint-disable-next-line no-console
      console.log("wallet: ", walletInit);

      let queryKey = localStorage.getItem("queryKey");
      let username = localStorage.getItem("username");
      if (!queryKey) {
        queryKey = `key:${uuidv4()}`;
        localStorage.setItem("queryKey", queryKey);
      }
      if (!username) {
        username = `user:${uuidv4()}`;
        username = username.substring(0, 13);
        localStorage.setItem("username", username);
      }

      const blockchains = [
        "bitcoin",
        "ethereum",
        "thorchain",
        "bitcoincash",
        "litecoin",
        "binance",
        "cosmos",
        "dogecoin",
      ];

      // add custom path
      const paths: any = [];
      // const spec = "https://pioneers.dev/spec/swagger.json";
      // const wss = "wss://pioneers.dev";
      const spec = "http://127.0.0.1:9001/spec/swagger.json";
      const wss = "ws://127.0.0.1:9001";
      const configPioneer: any = {
        blockchains,
        username,
        queryKey,
        spec,
        wss,
        paths,
      };
      const appInit = new SDK(spec, configPioneer);
      setApp(appInit);

      // init with HDwallet
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await appInit.init(walletInit);
      // eslint-disable-next-line no-console
      console.log("result: ", result);

      // eslint-disable-next-line no-console
      console.log("app: ", appInit);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return <Grid gap={4} />;
};

export default Home;
