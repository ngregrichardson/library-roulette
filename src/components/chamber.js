import { Flex } from "@chakra-ui/react";
import Bullet from "./bullet";

const Chamber = ({ bullet, ...rest }) => (
  <Flex
    backgroundColor={"gray.300"}
    width={{ base: "50px", sm: "70px" }}
    height={{ base: "50px", sm: "70px" }}
    borderRadius={"100%"}
    top={"50%"}
    transform={"translate(-50%, -50%)"}
    position={"absolute"}
    padding={"2%"}
    {...rest}
  >
    {bullet ? <Bullet /> : null}
  </Flex>
);

export default Chamber;
