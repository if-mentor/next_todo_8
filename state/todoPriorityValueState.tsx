import { atom } from "recoil";

export const todoPriorityValueState = atom<string> ({
  key: "todoPriorityValueState",
  default: "High",
})