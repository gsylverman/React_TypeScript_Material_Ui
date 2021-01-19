import { Dispatch } from "redux";
import { siteLayout } from "./index";

export const setLayout = (layout: string) => async (
  dispatch: Dispatch<any>
) => {
  dispatch(siteLayout(layout));
};
