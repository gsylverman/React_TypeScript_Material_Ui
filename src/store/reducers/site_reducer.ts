import { SITE_LAYOUT } from "./../actions/types";

export default function siteReducer(state = {}, action: any) {
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
