import TextArea from "./accessories/TextArea";
import { useRecoilState } from 'recoil'
import { todoDetailState } from "../../../state/todoDetailState";

const TextBox = () => {
  // detailの値をrecoilで管理
  const [todoDetail, setTodoDetail] = useRecoilState(todoDetailState);
  return (
      <TextArea 
        h="208px" 
        fontSize={24} 
        placeholder="Text" 
        onChange={(e) => setTodoDetail(e.target.value)}
      />
  );
};
export default TextBox;
