import * as SecureStore from "expo-secure-store";
import { IReport } from "../components/report/interface/IReport";

const saveReport = async (key: string, value: IReport[]) => {
  return await SecureStore.setItemAsync(key, JSON.stringify(value));
};

const getDataReport = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export { saveReport, getDataReport };
