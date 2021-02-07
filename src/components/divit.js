import { Flex } from "@chakra-ui/react";

const Divit = (props) => (
  <Flex
    backgroundColor={"gray.800"}
    width={{ base: "40px", sm: "80px" }}
    height={{ base: "40px", sm: "80px" }}
    borderRadius={"100%"}
    top={"50%"}
    transform={"translate(-50%, -50%)"}
    position={"absolute"}
    {...props}
  />
);

export default Divit;
