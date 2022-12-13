import  TextArea  from "./accessories/TextArea";
import { useRecoilState } from 'recoil'
import { todoTitleState } from "../../../state/todoTitleState";

const TitleForm = () => {
  // titleの値をrecoilで管理
  const [todoTitle, setTodoTitle] = useRecoilState(todoTitleState);
  return (
    <>
      <TextArea
        h="104px"
        fontSize={24}
        placeholder="Text"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
    </>
  );
};
export default TitleForm;
