import { Flex, useColorMode } from "@chakra-ui/react";

const Divit = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      backgroundColor={colorMode === "light" ? "white.500" : "black.500"}
      width={{ base: "40px", sm: "80px" }}
      height={{ base: "40px", sm: "80px" }}
      borderRadius={"100%"}
      top={"50%"}
      transform={"translate(-50%, -50%)"}
      position={"absolute"}
      transition={"background-color 0.2s ease 0s"}
      {...props}
    />
  );
};

export default Divit;
