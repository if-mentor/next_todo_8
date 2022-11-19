import {Button} from '@chakra-ui/react'

type Props = {
  backgroundColor: string
  fontColor: string
  children: React.ReactNode
  borderColor: string
}

const BaseButton = ({backgroundColor, fontColor, borderColor, children}: Props) => {
  return (
    <Button background={backgroundColor} color={fontColor} rounded="full" border='1px' borderColor={borderColor}
            px={'6'}>{children}</Button>
  );
};

export default BaseButton;
