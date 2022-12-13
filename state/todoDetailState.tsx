import { atom } from "recoil";

export const todoDetailState = atom<string> ({
  key: "todoDetailState",
  default: "なし",
})