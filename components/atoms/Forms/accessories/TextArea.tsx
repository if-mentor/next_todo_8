import { FC } from "react";
import { Textarea, TextareaProps } from "@chakra-ui/react";

const TextArea: FC<TextareaProps> = (props) => {
  return (
    <>
      <Textarea
        w="1080px"
        h={props.h}
        color={"black"}
        fontWeight="bold"
        fontSize={props.fontSize}
        background={props.backgroundColor}
        resize="none"
        placeholder={props.placeholder}
        _placeholder={{color: "black"}}
        {...props}
      />
    </>
  );
};
export default TextArea;
