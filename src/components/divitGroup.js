import Divit from "./divit";

const DivitGroup = () => (
  <>
    <Divit
      left={{ base: "-5px", sm: "-20px" }}
      transform={"translate(-50%, -50%)"}
    />
    <Divit
      right={{ base: "-5px", sm: "-20px" }}
      transform={"translate(50%, -50%)"}
    />
  </>
);

export default DivitGroup;
