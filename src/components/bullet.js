import { Flex } from "@chakra-ui/react";

const Bullet = () => (
  <Flex
    width={"100%"}
    height={"100%"}
    padding={"20%"}
    backgroundColor={"yellow.500"}
    borderRadius={"100%"}
  >
    <Flex
      width={"100%"}
      height={"100%"}
      backgroundColor={"yellow.700"}
      borderRadius={"100%"}
    />
  </Flex>
);

export default Bullet;
