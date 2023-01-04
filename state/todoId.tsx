import { atom } from "recoil";

export interface ItodoId {
  docId: string;
  editFlg: boolean;
}

//todo作成時uuidを保存しておく
//フラグ操作が必要な時必要なフラグを追加できる
export const todoId = atom<ItodoId[]> ({
  key: "todoEditFlg",
  default:
    [
      {
        docId: '',
        editFlg:false
      }
    ]
})