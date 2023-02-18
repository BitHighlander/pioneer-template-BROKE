import { ChakraProvider } from "@chakra-ui/react";
import { Web3OnboardProvider } from "@web3-onboard/react";
import { BrowserRouter as Router } from "react-router-dom";

import Context from "lib/context";
import { PioneerService } from "lib/context/pioneer";
import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/theme";
import web3Onboard from "./web3-onboard";

const user = new PioneerService();
user.init();

const App = () => (
  <Web3OnboardProvider web3Onboard={web3Onboard}>
    <ChakraProvider theme={theme}>
      <Context.Provider value={user}>
        <Router>
          <Layout>
            <Routings />
          </Layout>
        </Router>
      </Context.Provider>
    </ChakraProvider>
  </Web3OnboardProvider>
);

export default App;
