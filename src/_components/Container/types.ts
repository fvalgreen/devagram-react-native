import {ReactElement} from "react";
import { IFooter } from "./Footer/types";

export interface IContainer{
  children: ReactElement<any, any>,
  footerProps: IFooter
}