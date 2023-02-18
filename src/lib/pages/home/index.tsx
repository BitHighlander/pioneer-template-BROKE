import { Grid, useDisclosure } from "@chakra-ui/react";
import { KkRestAdapter } from "@keepkey/hdwallet-keepkey-rest";
import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { SDK } from "@pioneer-sdk/sdk";
import * as core from "@shapeshiftoss/hdwallet-core";
import { useConnectWallet } from "@web3-onboard/react";
import {useState, useEffect, useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import Context from "lib/context";

const Home = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const { app, api, context, username, totalValueUsd } = useContext(Context);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [wallet, setWallet] = useState({});
  // const [app, setApp] = useState({});

  const onLogin = async function () {
    try {
      const address = wallet?.accounts[0]?.address;
      // eslint-disable-next-line no-console
      console.log("address: ", address);

      // is address logged in?
      const user = await api.GetUser({ publicAddress: address });
      // eslint-disable-next-line no-console
      console.log("user: ", user.data);

      // login
      const { nonce } = user.data;
      const message = `I am signing my one-time nonce: ${nonce}`;

      // eslint-disable-next-line no-console
      console.log("wallet: ", wallet);
      // console.log("wallet: ",wallet.provider)
      // console.log("wallet: ",await wallet.provider.request('personal_sign'))
      // console.log("wallet: ",wallet.provider.request(message,address))
      // const signature = await wallet.provider.request('personal_sign',{message,address})
      // const signature = await wallet.sign(
      //     `I am signing my one-time nonce: ${nonce}`,
      //     address,
      //     '' // MetaMask will ignore the password argument here
      // );
      // console.log("signature: ",signature)
      //
      // console.log("message: ", message);
      // console.log("address: ", address);
      //
      // // const ethersWallet = new ethers.Wallet(wallet.provider)
      // if (!wallet || !wallet.provider) throw Error("Onbord not setup!");
      // const ethersProvider = new ethers.providers.Web3Provider(
      //   wallet.provider,
      //   "any"
      // );
      // const signer = ethersProvider.getSigner();
      // const signature = await signer.signMessage(message);
      // console.log("signature: ", signature);
      // console.log("address: ", address);
      // console.log("message: ", message);
      //
      // // signin get api key
      // const loginResp = await pioneer.Login(
      //   {},
      //   { publicAddress: address, signature, message }
      // );
      // console.log("loginResp: ", loginResp.data);

      // store api key in localstoarage

      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  useEffect(() => {
    if (wallet?.accounts && wallet?.accounts[0]?.address) {
      onLogin();
    }
  }, [wallet, wallet?.provider, api]);

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

  return <Grid gap={4}>Homepage</Grid>;
};

export default Home;
