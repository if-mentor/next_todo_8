import {atom, useRecoilState, useSetRecoilState} from "recoil";
import {useEffect} from "react";
import {db} from '../firebase';
import {
  collection,
  onSnapshot,
} from 'firebase/firestore';


export const setData = atom({
  key: "setData",
  default: [],
});


export const setFirebaseData = () => {
  const [datas, setDatas] = useRecoilState(setData)
  useEffect(() => {
    //データの取得
    const postData = collection(db, 'todos')

    //リアルタイムでデータを取得する。
    onSnapshot(postData, (todo: any) => {
      setDatas(todo.docs.map((doc: any) => ({...doc.data()})));
    });
  }, []);
  return datas
}
