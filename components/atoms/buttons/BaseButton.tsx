import {Button} from '@chakra-ui/react'
import {FC} from 'react'

type StyoeProps = {
  backgroundColor: string
  fontColor?: string
  borderColor?: string
  children: React.ReactNode
}

const BaseButton: FC<StyoeProps> = ({backgroundColor, fontColor, borderColor, children}) => {
  return (
    <Button background={backgroundColor} color={fontColor} rounded="full" border='1px' borderColor={borderColor}
            px={'6'}>{children}</Button>
  );
};

BaseButton.defaultProps = {
  fontColor: 'black',
  borderColor: 'black',
}

export default BaseButton;
