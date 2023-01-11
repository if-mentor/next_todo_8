
import { atom } from "recoil";

export const todoTitleState = atom<string> ({
  key: "todoTitleState",
  default: "TODOを入力",
})