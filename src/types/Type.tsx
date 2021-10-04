import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  NewReport: undefined;
  HomeTab: undefined
};

type Props = NativeStackScreenProps<RootStackParamList>;

export { RootStackParamList, Props };
