import { atom } from "recoil";

export const todoTrashState = atom<boolean> ({
  key: "todoTrashState",
  default: false,
})