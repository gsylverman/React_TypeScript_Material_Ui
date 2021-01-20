import { SITE_LAYOUT } from "./../actions/types";

type SiteState =
  | {
      layout: string;
    }
  | {};

const initialSiteState = {};

export default function siteReducer(
  state: SiteState = initialSiteState,
  action: any
) {
  switch (action.type) {
    case SITE_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    default:
      return state;
  }
}
