import { IUser } from "../../../_services/UserService/types";

export interface IFooter {
  currentTab: string;
  currentUser?: IUser | undefined
}
