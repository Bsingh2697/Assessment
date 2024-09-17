import { Media } from "../store/types";
import { ScreenKeys } from "./ScreenKeys";

export type EKStackParamList = {
    [ScreenKeys.TABS]: undefined;
  };

export type EKTabParamList = {
    [ScreenKeys.HOME]: undefined;
    [ScreenKeys.MEDIA]: undefined;
    [ScreenKeys.GAMES]: undefined;
    [ScreenKeys.REPORTS]: undefined;
    [ScreenKeys.ACCOUNT]: undefined;
  };