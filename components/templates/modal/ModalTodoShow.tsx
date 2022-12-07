import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Textarea,
} from "@chakra-ui/react";

const ModalTodoShow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="400px" minH="424px" fontWeight="bold">
          <ModalHeader p="19px 75px 0 14px " fontSize="36px">Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="9px 14px">
            <FormControl>
              <FormLabel fontSize="18px">Name</FormLabel>
              <Input fontSize="14px" placeholder="内田裕也" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize="18px">Your Comment</FormLabel>
              <Textarea
                h="175px"
                fontSize="14px"
                textAlign="start"
                placeholder="シェケナベイベ"
              />
            </FormControl>
          </ModalBody>
          <Center>
            <ModalFooter p="0 14px 19px 14px">
              <Button
                onClick={onClose}
                bg="#28ADCA"
                maxW="372px"
                minW="372px"
                maxH="43px"
                minH="43px"
              >
                CREATE
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalTodoShow;
