import { createContext } from "react";

const Context = createContext({
  username: "",
  context: "",
  totalValueUsd: 0,
  app: {} as any,
  api: {} as any,
  walletsAvailable: [] as any,
});
export default Context;
