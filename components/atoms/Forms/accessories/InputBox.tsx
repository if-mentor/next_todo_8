import { FC } from "react";
import { Input, InputProps } from "@chakra-ui/react";

const InputBox: FC<InputProps> = (props) => {
  return (
    <>
      <Input
        w={props.w}
        h={props.h}
        color={"black"}
        fontWeight="bold"
        fontSize={props.size}
        background={"white"}
        placeholder={props.placeholder}
        _placeholder={{ color: "black" }}
        {...props}
      ></Input>
    </>
  );
};
export default InputBox;
