import { LOAD_DATA } from "./types";

export function loadData(data) {
  return { type: LOAD_DATA, payload: data };
}
