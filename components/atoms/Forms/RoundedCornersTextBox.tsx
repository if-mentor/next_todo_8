import InputBox from "./accessories/InputBox";
import {FC} from "react";

type Props = {
  inputText: string
  changeInputText: (Event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoundedCornersTextBox: FC<Props> = ({inputText, changeInputText}) => {
  return (
    <InputBox
      w="540px"
      h="57px"
      background={"#F0FCFF"}
      borderRadius={'40px'}
      value={inputText}
      onChange={changeInputText}
    />
  );
};

export default RoundedCornersTextBox;
