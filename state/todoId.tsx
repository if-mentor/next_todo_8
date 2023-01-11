import { atom } from "recoil";

//操作対象のidをrecoilに保存する
export const todoId = atom({
  key: "todoId",
  default: "",
});
