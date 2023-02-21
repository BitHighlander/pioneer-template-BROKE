import { Keyring } from "@shapeshiftoss/hdwallet-core";
import { createContext, useReducer } from "react";

export enum WalletActions {
  SET_STATUS = "SET_STATUS",
  INIT_PIONEER = "INIT_PIONEER",
}

export interface InitialState {
  keyring: Keyring;
  status: any;
  username: string;
  context: string;
  totalValueUsd: number;
  app: any;
  api: any;
}

const initialState: InitialState = {
  keyring: new Keyring(),
  status: "disconnected",
  username: "",
  context: "",
  totalValueUsd: 0,
  app: {} as any,
  api: {} as any,
};

const Pioneer = createContext(initialState);
export default Pioneer;
